import {actions} from '../../redux/messageReducer';
import React, {PureComponent}  from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {AppStateType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";



class DialogsContainer extends PureComponent {

  render() {
    return (
        // @ts-ignore
        <Dialogs {...this.props}/>
    )
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
  }
};




export default connect(mapStateToProps, {...actions})(withAuthRedirect(DialogsContainer)) as React.ComponentType;
