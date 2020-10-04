import {actions} from '../../redux/messageReducer';
import React, {PureComponent}  from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';



class DialogsContainer extends PureComponent {

  render() {
    return (
        <Dialogs {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
  }
};




export default connect(mapStateToProps, {actions})(withAuthRedirect(DialogsContainer));
