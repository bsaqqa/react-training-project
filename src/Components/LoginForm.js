import React, {useState} from 'react';

import { Layout, Typography, Button, 
        Form, Input, Checkbox , message
  } from 'antd';
import axios from '../Services/axios'

const { Title } = Typography;


const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
const LoginForm = ({onClose}) => {
    const [errors, setErrors] = useState()
    const doLogin = async (data)=>{
        console.log({
            username: data.email,
            password: data.password
          });
        // axios.post('/login', JSON.stringify({
        //     username: data.email,
        //     password: data.password
        //   }))
        //   .then(function (response) {
        //     console.log(response.data.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     setErrors(error.message)
        //   });
        try{
            const response = await axios.post('/login', 
                    JSON.stringify({
                        username: data.email,
                        password: data.password
                    }));
            localStorage.setItem('token',response.data.token);
            onClose();
            message.success(response.data.message);

        }catch(e){
            setErrors(e.message);
            console.error(e)
        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        doLogin(values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
      // labelCol={{span:8}}
      // wrapperCol={{span:16}}
        {...layout}
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {errors && <ul style={{color:"red"}}>
                <li>{errors}</li>
        </ul>}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
                type: 'email',
                message: 'Input must be email'
            }
          ]}
        >
          <Input  />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };


  export default LoginForm;