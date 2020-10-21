import React from 'react';
import './App.module.scss';
import 'antd/dist/antd.css';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Loader from './components/Loader';
import {AppStateType} from './redux/reduxStore';
import {Breadcrumb, Col, Layout, Menu, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FindUsers from './components/FindUsers/FindUsers';
import Login from './components/Login/Login';
import HeaderNavigation from './components/Header/HeaderNavigation';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const sideBarMenu = [
    {id: 1, title: 'Profile', url: '/profile'},
    {id: 2, title: 'Dialogs', url: '/dialogs'},
    {id: 3, title: 'News', url: '/news'},
    {id: 4, title: 'Music', url: '/music'},
    {id: 5, title: 'Settings', url: '/settings'},
    {id: 6, title: 'Find Users', url: '/find'},
];

type MapPropsType = ReturnType<typeof mapStateToProps>

type dispatchPropsType = {
    initializeApp: () => void
}


class App extends React.Component<MapPropsType & dispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <Layout>
                <Header className="header">
                    <Row>
                        <Col span={24}>
                            <HeaderNavigation/>
                        </Col>
                    </Row>

                </Header>

                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu mode="inline"
                                  // defaultSelectedKeys={['1']}
                                  defaultOpenKeys={['profile']}
                                  style={{height: '100%'}}>
                                <SubMenu key="profile"
                                         icon={<UserOutlined/>}
                                         title="My profile">
                                    {sideBarMenu.map((nav, index) => (
                                        <Menu.Item key={index}>
                                            <Link to={nav.url}>
                                                {nav.title}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            </Menu>
                        </Sider>

                        <Content style={{padding: '0 24px', minHeight: 280, background: 'darkorange'}}>
                            <Switch>
                                <Route render={() => <Profile/>} path={'/profile/:userId?'}/>
                                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                                <Route render={() => <News/>} path={'/news'}/>
                                <Route render={() => <Music/>} path={'/music'}/>
                                <Route render={() => <Settings/>} path={'/settings'}/>
                                <Route render={() => <FindUsers/>} path={'/find'}/>
                                <Route render={() => <Login/>} path={'/login'}/>
                                <Route path={'*'} render={() => <div>404</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>

                <Footer style={{textAlign: 'center'}}>
                   Social Network by Vasyl Batig ©2020
                </Footer>
            </Layout>
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

// @ts-ignore
export default connect(mapStateToProps, {initializeApp})(withRouter(App));
