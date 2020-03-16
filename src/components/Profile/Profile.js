import React from "react";
import classes from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <aside className={classes.main}>
      <div className={classes.main__image}>
        <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt=""/>
      </div>
      <div className={classes.profile}>
        <div className={classes.profile__avatar}>
          <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt=""/>
        </div>
        <div className={classes.profile__info}>
          <div className={classes.profile__name}>Vasyl B.</div>
          <div className={classes.profile__date}>date of birth: 21 august</div>
          <div className={classes.profile__city}>city: Lviv</div>
          <div className={classes.profile__education}>education: wayup</div>
          <div className={classes.profile__site}>website: none</div>
        </div>
      </div>
      <MyPosts/>
    </aside>
  )
};

export default Profile;
