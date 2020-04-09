import React, {PureComponent} from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {connect} from 'react-redux';
import axios from 'axios'
import {setUserProfile} from '../../redux/profileReducer';
import Loader from '../Loader';


class Profile extends PureComponent {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
          this.props.setUserProfile(response.data);
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


export default connect(mapStateToProps, {setUserProfile})(Profile);
