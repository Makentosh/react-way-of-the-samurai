import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {setUserSuccess} from '../../redux/authReducer'
import Header from './Header';

class HeaderContainer extends PureComponent {

  componentDidMount() {
      this.props.setUserSuccess();

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

export default connect(mapStateToProps, {setUserSuccess})(HeaderContainer);


// authAPI.checkAuth()
//   .then(data => {
//     if (data.resultCode === 0) {
//       let {id, login, email} = data.data;
//       this.props.setUserData(id, email, login)
//     }
//   })
