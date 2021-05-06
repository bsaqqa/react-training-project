import React from 'react';
import { Row, Col, Image, Typography, Form, Input, Button, Checkbox} from 'antd';
import '../index.css'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function Login() {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    }
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    }
  return (
    <>
      <Row>
      <Col span={13} xs={24} sm={24} md={24} lg={13} xl={13}>
        <div className="container">
        <Title level = {2}>Client Area login</Title>
          <Paragraph>Kindly sign-in to your client account so you can <br/>
                    manage your projects.</Paragraph>
          <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        style={{ marginBottom: 0 }}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Your email" className="formInput"/>
      </Form.Item>
​
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password'}]}
        style ={{margin : "0px"}}
      >
        <Input.Password placeholder="*****"  className="formInput"/>
      </Form.Item>
​
      <Form.Item name="remember" valuePropName="checked" style ={{margin : "0px"}}>
        <Checkbox > Keep me logged in </Checkbox>
      </Form.Item>
​
      <Form.Item>
        <Button htmlType="submit" className="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
    <Row className="Footer">
      <Col span={18}>
      <Paragraph> All copyrights resaved {new Date().getFullYear()} </Paragraph>
      </Col>
      <Col style={{display: 'flex'}} >

        <Link style={{fontSize: '140%'}}>
          <TwitterOutlined/>
        </Link>

        <Link style={{marginLeft: '30%', fontSize: '140%'}}>
          <FacebookOutlined />
        </Link>

        <Link style={{marginLeft: '30%', fontSize: '140%'}}>
          <InstagramOutlined />
        </Link>

        <Link style={{marginLeft: '30%', fontSize: '140%'}}>
          <LinkedinOutlined />
        </Link>

      </Col>
    </Row>
  </div>
      </Col>
      <Col span={11} style={{height: '100vh'}} xs={24} sm={24} md={24} lg={11} xl={11}>
      <Image style={{height: '100vh'}}
          src="error"
          fallback="images/Login.png"
          className="LoginImage"
        />
      </Col> 
      </Row>
    </>
  );};
export default Login;
