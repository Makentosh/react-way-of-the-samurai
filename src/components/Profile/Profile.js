import React, {PureComponent} from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import {setUserProfileSuccess} from '../../redux/profileReducer';
import {Redirect, withRouter} from 'react-router';


class Profile extends PureComponent {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2
    }

    this.props.setUserProfileSuccess(userId)
  }



  render() {
    if(!this.props.isAuth) return <Redirect to={'/Login'}/>;

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
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
  }
};


export default connect(mapStateToProps, {setUserProfileSuccess})(withRouter(Profile));


// profileAPI.getProfile(userId)
//     .then(data => {
//       this.props.setUserProfile(data);
//     })
