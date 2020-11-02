import React from 'react';
import ProfileInfo from '../ProfileInfo';
import {connect} from 'react-redux';
import {setUserProfileSuccess, setStatusSuccess, updateStatusSuccess, savePhoto, saveProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../types/types";

type DispatchStatePropsType = {
  setUserProfileSuccess: (userId: string | number) => void
  setStatusSuccess: (userId: string | number) => void
  userProfile: ProfileType
  status: string
  savePhoto: (file: File) => void
  updateStatusSuccess: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
  userId: string
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type AllPropsType = MapPropsType & DispatchStatePropsType & RouteComponentProps<PathParamsType>


class Profile extends React.Component<AllPropsType> {

  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;

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

  componentDidUpdate(prevProps: AllPropsType) {
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


let mapStateToProps = (state: AppStateType) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    userId: state.auth.userId
  }
};

// @ts-ignore
export default connect(mapStateToProps, {setUserProfileSuccess, setStatusSuccess, updateStatusSuccess, savePhoto, saveProfile})(withRouter(Profile));
