import React from 'react';
import { Row, Col, Image, Typography, Form, Input, Button, Checkbox} from 'antd';
import '../index.css'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
const { Title } = Typography;
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
        <Title>Client Area login</Title>
          <p><span>Kindly sign-in to your client account so you can</span>
           <span>manage your projects.</span></p>
          <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Your email" className="formInput"/>
      </Form.Item>
​
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password'}]}
      >
        <Input.Password placeholder="*****"  className="formInput"/>
      </Form.Item>
​
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
​
      <Form.Item>
        <Button htmlType="submit" className="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
    <Row style={{marginTop: '130px'}}>
      <Col span={12}>
      <p>All copyrights resaved {new Date().getFullYear()}</p>
      </Col>
      <Col span={6} offset={6}>
      <TwitterOutlined />
      <FacebookOutlined style={{marginLeft: '10%'}}/>
      <InstagramOutlined style={{marginLeft: '10%'}}/>
      <LinkedinOutlined style={{marginLeft: '10%'}}/>
        </Col>
    </Row>
  </div>
      </Col>
      <Col span={11} style={{height: '100vh'}} xs={24} sm={24} md={24} lg={11} xl={11}>
      <Image style={{height: '100vh'}}
          src="error"
          fallback="images/Login.png"
        />
      </Col> 
      </Row>
    </>
  );};export default Login;
