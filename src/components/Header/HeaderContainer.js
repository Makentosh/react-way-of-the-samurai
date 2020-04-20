import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {setUserSuccess, setLogout} from '../../redux/authReducer'
import Header from './Header';

class HeaderContainer extends PureComponent {

  componentDidMount() {
      this.props.setUserSuccess()
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if(prevProps.isAuth !== this.props.isAuth) {
  //     this.props.setUserSuccess()
  //   }
  // }

  render() {
    return (
        <Header {...this.props} logout={this.props.setLogout}/>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps, {setUserSuccess, setLogout})(HeaderContainer);


// authAPI.checkAuth()
//   .then(data => {
//     if (data.resultCode === 0) {
//       let {id, login, email} = data.data;
//       this.props.setUserData(id, email, login)
//     }
//   })
