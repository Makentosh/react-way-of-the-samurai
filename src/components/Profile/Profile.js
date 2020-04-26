import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';
import {setUserProfileSuccess, setStatusSuccess, updateStatusSuccess} from '../../redux/profileReducer';
import {withRouter} from 'react-router';


class Profile extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.userId;

      if(!userId) {
        this.props.history.push('/login')
      }
    }

    if(userId) {
      this.props.setUserProfileSuccess(userId);
      this.props.setStatusSuccess(userId);
    }


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
    status: state.profilePage.status,
    userId: state.auth.userId
  }
};


export default connect(mapStateToProps, {setUserProfileSuccess,
                                          setStatusSuccess,
                                          updateStatusSuccess})(withRouter(Profile));


// profileAPI.getProfile(userId)
//     .then(data => {
//       this.props.setUserProfile(data);
//     })
