import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {setUserData} from '../../redux/authReducer'
import Header from './Header';
import {authAPI} from '../../api/api';

class HeaderContainer extends PureComponent {

  componentDidMount() {
      authAPI.checkAuth()
        .then(data => {
          if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            this.props.setUserData(id, email, login)
          }
        })
  }

  render() {
    return (
        <Header {...this.props}/>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
