import React, {PureComponent} from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router';
import {profileAPI} from '../../api/api';


class Profile extends PureComponent {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2
    }

    profileAPI.getProfile(userId)
        .then(data => {
          this.props.setUserProfile(data);
        })
  }

  render() {
    return (
      <aside className={classes.main}>
        <ProfileInfo profile={this.props.userProfile}/>
        <MyPostsContainer />
      </aside>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile
  }
};


export default connect(mapStateToProps, {setUserProfile})(withRouter(Profile));
