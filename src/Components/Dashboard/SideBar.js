import React from 'react';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import '../../assets/css/dashboard.css'


const { Header, Sider, Content } = Layout;

const links = [
    {
        path: '/dashboard',
        title: "Dashboard",
        icon: <UserOutlined />
    },
    {
        path: '/dashboard/users',
        title: "Users",
        icon:<VideoCameraOutlined />
    }
];
var activeIndeies = ['0'];

export default class Sidebar extends React.Component {
    history = null;
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        }
        this.history = this.props.component.props.history;
    }

    componentWillMount(){
        this.checkActiveIndex();
    }

    checkActiveIndex = (path = this.history.location.pathname)=>{
        const index = links.findIndex(e => e.path == path);
        activeIndeies =  [ index+ '' ];
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    goToPage = path =>{
        this.history.push(path);
        this.checkActiveIndex(path);
    }

    render(){
        return (<>
                <Layout className="h-screen" id="components-layout-demo-custom-trigger">
                    <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <img src="/images/logo-sm.png" className="logo " alt="FTC" />
                        <Menu mode="vertical"  selectedKeys={activeIndeies}>
                            { links.map((e, index)=>(
                                <Menu.Item key={index} icon={e.icon} onClick={()=> this.goToPage(e.path)}>
                                    {e.title}
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: '0 2rem', display:'flex' }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                                style: { paddingLeft: 0}
                            })}
                            <ul className=" " style={{ marginLeft: 'auto' }}>
                                Icons
                            </ul>
                        </Header>
                        {this.props.component}
                    </Layout>
                </Layout>
            </>
        );
    }
}
