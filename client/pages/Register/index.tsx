import { Button, Input, Form, Row, Col } from 'antd'
import React from 'react'
import styles from './index.module.scss'

export interface Props {
  user?: boolean
}

export const Register: React.FC<Props> = ({ user }) => {
  console.log(user)
  const [form] = Form.useForm()
  return (
    <Form form={form} className={styles.register}>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item label="username">
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item label="password">
            <Input type="password" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Button>click</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Register
