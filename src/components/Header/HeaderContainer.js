import React, {PureComponent} from "react";
import Header from './Header';

class HeaderContainer extends PureComponent {

  render() {
    return (
        <></>
    )
  }

}



export default HeaderContainer;


// componentDidUpdate(prevProps, prevState, snapshot) {
//   if(prevProps.isAuth !== this.props.isAuth) {
//     this.props.setUserSuccess()
//   }
// }

// authAPI.checkAuth()
//   .then(data => {
//     if (data.resultCode === 0) {
//       let {id, login, email} = data.data;
//       this.props.setUserData(id, email, login)
//     }
//   })
