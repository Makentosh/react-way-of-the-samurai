import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import {setUserData} from '../../redux/authReducer'
import Header from './Header';

class HeaderContainer extends PureComponent {

  componentDidMount() {
    // console.log(this.props)

    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
          console.log(response)
          if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
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
