import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {
  setUserProfileSuccess,
  setStatusSuccess,
  updateStatusSuccess,
  savePhoto,
  saveProfile
} from '../../redux/profileReducer';
import {withRouter} from 'react-router';


class Profile extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.userId;

      if (!userId) {
        this.props.history.push('/login')
      }
    }

    if (userId) {
      this.props.setUserProfileSuccess(userId);
      this.props.setStatusSuccess(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.refreshProfile();
    }
  }

  render() {

    return (
        <ProfileInfo profile={this.props.userProfile}
                     status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatusSuccess}
                     saveProfile={this.props.saveProfile}/>

    )
  }

}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    userId: state.auth.userId
  }
};


export default connect(mapStateToProps, {
  setUserProfileSuccess,
  setStatusSuccess,
  updateStatusSuccess,
  savePhoto,
  saveProfile
})(withRouter(Profile));
