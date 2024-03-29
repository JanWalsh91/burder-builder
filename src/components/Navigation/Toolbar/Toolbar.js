import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const toolbar = ( props ) => {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle clicked={props.drawerToggleClicked}/>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems isAuthenticated={props.isAuth}/>
			</nav>
		</header>
	);
};

export default toolbar;