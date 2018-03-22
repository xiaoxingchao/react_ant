import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import Link from 'umi/link';

import styles from './nav.css'
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
// const MenuItemGroup = Menu.ItemGroup;


// function Nav({ location }) {
//   return (
//     <Menu
//       selectedKeys={[location.pathname]}
//       mode="horizontal"
//       theme="dark"
//     >
//       <Menu.Item key="/">
//         <Link to="/"><Icon type="home" />Home</Link>
//       </Menu.Item>
//       <Menu.Item key="/users">
//         <Link to="/test"><Icon type="bars" />Users</Link>
//       </Menu.Item>
//       <Menu.Item key="/umi">
//         <a href="https://github.com/umijs/umi" target="_blank">umi</a>
//       </Menu.Item>
//       <Menu.Item key="/dva">
//         <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
//       </Menu.Item>
//       <Menu.Item key="/404">
//         <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
//       </Menu.Item>
//     </Menu>
//   );
// }

class Nav extends React.Component {
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span><Link to="/test">Option 1</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              55555555555
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Nav;

