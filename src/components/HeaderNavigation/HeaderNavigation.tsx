import React, {FC} from 'react';
import {Avatar, Button, Col, Row} from 'antd'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setLogout} from '../../redux/authReducer';
import {AppStateType} from '../../redux/reduxStore';
import {UserOutlined} from '@ant-design/icons';

type MapPropsType = {
    isAuth: boolean
    login: string | null
}

type DispatchPropsType = {
    setLogout: () => void
}

const HeaderNavigation: FC<DispatchPropsType & MapPropsType> = ({...props}) => {

    return (
        <>
            {props.isAuth
                ?
                <Row>
                    <Col span={23}>
                        <Row>
                            <Col>
                                <Avatar style={{backgroundColor: '#87d068', marginRight: 16}}
                                        icon={<UserOutlined/>}/>
                            </Col>
                            <Col span={1}>
                                <div style={{color: 'white'}}>
                                    {props.login}
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={1}>
                        <Button type="primary"
                                onClick={props.setLogout}>
                            Logout
                        </Button>
                    </Col>
                </Row>
                : <Row>
                    <Col span={1}>
                      <Button type="primary">
                        <NavLink to={'/login'}>Login</NavLink>
                        </Button>
                    </Col>
                </Row>
            }
        </>
    )

};

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    } as MapPropsType
};


export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {setLogout})(HeaderNavigation);
