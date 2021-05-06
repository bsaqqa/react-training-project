import React from 'react';

import { Layout } from 'antd';
import { Link } from 'react-router-dom';


const { Content } = Layout;

class Users extends React.Component {

    render() {
        return (
          <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                Users
              <Link to="/dashboard">Back to Home</Link>
            </Content>
        );
    }
}
export default Users;