import React, {FC} from "react";
import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const sideBarMenu = [
  {id: 1, title: 'Profile', url: '/profile'},
  {id: 2, title: 'Dialogs', url: '/dialogs'},
  {id: 3, title: 'News', url: '/news'},
  {id: 4, title: 'Music', url: '/music'},
  {id: 5,title: 'Settings', url: '/settings'},
  {id: 6, title: 'Find Users', url: '/find'},
];

type PropsType = {
    url: string
    title: string
}

const NavItem: FC<PropsType> = ({url, title}) => {
  return (
    <li>
      <NavLink
          to={url}
          activeClassName={classes.active}
      >
        {title}
      </NavLink>
    </li>
  )
};

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        {sideBarMenu.map(item => <NavItem key={item.id} {...item}/>)}
      </ul>
    </nav>
  )
};

export default Navbar;
