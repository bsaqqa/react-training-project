import React from 'react';

import { Layout, Typography, Button, Row, Col   } from 'antd';
import { Link } from 'react-router-dom';
import { Pie } from '@antv/g2plot';

import {
    DashboardTwoTone,
} from '@ant-design/icons';
const { Content } = Layout;

const { Title } = Typography;



class Index extends React.Component {

    componentWillMount() {
        const data = [
            { type: 'TO DO', value: 42 },
            { type: 'IN PROGRESS', value: 32 },
            { type: 'COMPLETED', value: 26 },
        ];
        this.initPieChart(data, 'chart1');
    }


    render() {
        return (
          <Content
                className="site-layout-background"
                style={{
                    display: 'flex',
                    flexDirection: "column",
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <section style={{ display: 'flex', alignContent:'center', width: '100%', justifyContent:'space-between' }}>
                    <Title level={2} style={{ display:'flex', alignItems: 'center' }}>
                        <DashboardTwoTone/>
                        <span style={{marginLeft: '.8rem'}}>Dashboard</span>
                    </Title>
                    <Button  type="primary" style={{textTransform: "uppercase"}}> + New Project</Button>
                </section>
              <Row>
                  <Col span={8} className="contentCenter p-2 ">
                        <div className="chart-box" style={{display: 'flex', flexDirection:"column"}}>
                            <div className="shadow chart-box mb-2">Col</div>
                            <div className="shadow chart-box">Col</div>
                        </div>
                  </Col>
                  <Col span={8} className="contentCenter  p-2 ">
                      <div className="shadow chart-box">
                          <div id="chart1"></div>
                      </div>
                  </Col>
                  <Col span={8} className="contentCenter  p-2 ">
                      <div className="shadow chart-box">col</div>
                  </Col>
              </Row>

          </Content>
        );
    }

    initPieChart(data , chartElement){
        const piePlot = new Pie(chartElement, {
            appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.9,
            label: {
                type: 'inner',
                offset: '-30%',
                content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                style: {
                    fontSize: 14,
                    textAlign: 'center',
                },
            },
            interactions: [{ type: 'element-active' }],
        });

        piePlot.update({ "theme": {
                "styleSheet": {
                    "brandColor": "#5B8FF9",
                    "paletteQualitative10": ["#5B8FF9", "#61DDAA", "#65789B", "#F6BD16", "#7262fd", "#78D3F8", "#9661BC", "#F6903D", "#008685", "#F08BB4"],
                    "paletteQualitative20": ["#5B8FF9", "#CDDDFD", "#61DDAA", "#CDF3E4", "#65789B", "#CED4DE", "#F6BD16", "#FCEBB9", "#7262fd", "#D3CEFD", "#78D3F8", "#D3EEF9", "#9661BC", "#DECFEA", "#F6903D", "#FFE0C7", "#008685", "#BBDEDE", "#F08BB4", "#FFE0ED"]
                }
        } });
        piePlot.render();
    }
}
export default Index;