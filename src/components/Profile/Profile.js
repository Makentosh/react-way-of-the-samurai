import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {setUserProfileSuccess, setStatusSuccess, updateStatusSuccess} from '../../redux/profileReducer';
import {withRouter} from 'react-router';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';


class Profile extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    console.log(this.props)

    if (!userId) {
      userId = 2
    }

    this.props.setUserProfileSuccess(userId);
    this.props.setStatusSuccess(userId);
  }



  render() {

    return (
        <ProfileInfo profile={this.props.userProfile}
                     status={this.props.status}
                      updateStatus={this.props.updateStatusSuccess}/>

    )
  }

}



let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
  }
};


export default connect(mapStateToProps, {setUserProfileSuccess, setStatusSuccess, updateStatusSuccess})(withAuthRedirect(withRouter(Profile)));


// profileAPI.getProfile(userId)
//     .then(data => {
//       this.props.setUserProfile(data);
//     })
