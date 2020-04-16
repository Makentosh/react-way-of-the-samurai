import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {setUserProfileSuccess} from '../../redux/profileReducer';
import {withRouter} from 'react-router';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';


class Profile extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2
    }

    this.props.setUserProfileSuccess(userId)
  }



  render() {

    return (
        <ProfileInfo profile={this.props.userProfile}/>

    )
  }

}



let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
};


export default connect(mapStateToProps, {setUserProfileSuccess})(withAuthRedirect(withRouter(Profile)));


// profileAPI.getProfile(userId)
//     .then(data => {
//       this.props.setUserProfile(data);
//     })
