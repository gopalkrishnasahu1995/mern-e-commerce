import React from 'react'
import { Menu, Layout, Input } from 'antd' ;
import {UserOutlined} from '@ant-design/icons'
import {UseNetwork} from '../../hooks/useNetwork'

export const HomePage: React.FC<any> = () => {
  const {isOnline} = UseNetwork()
  console.log(isOnline)
  const { Header } = Layout
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact us</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  )
}

export default HomePage
