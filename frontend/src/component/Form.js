import { Button, Form, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import './Form.css'
import React from 'react';
const API = 'http://127.0.0.1:5000/result'
const user = 'Super Admin'
class Form1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            app_id: '',
            role: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = async (e) => {
        console.log(this.state,e);
        axios({
            method: "post",
            url: API,
            data: this.state,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(response => {
                console.log(response);
            }).catch((err)=>{
                console.log(err)
            })
            
    }
    render() {
        const { email, app_id, role } = this.state
        return (
            <div className='Form' >

                <h2> Fill the Details</h2>
                <Form 
                    onFinish={this.handleSubmit}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 7,
                    }}>
                    <Form.Item label='Email' rules={[{ required: true }]}>
                        <Input
                            placeholder="Enter your email"
                            name='email'
                            value={email}
                            onChange={this.changeHandler}
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="Valid Email only">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />
                    </Form.Item>
                    <Form.Item label='App Id' rules={[{ required: true }]}>
                        <Input placeholder='App Id' name='app_id' value={app_id}
                            onChange={this.changeHandler}></Input>
                    </Form.Item>
                    <Form.Item label='Role' rules={[{ required: true }]}>
                        <Input placeholder='Role' name='role' value={role}
                            onChange={this.changeHandler}/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <Button type="primary" htmlType="submit" >Click to Submit</Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}

export default Form1    