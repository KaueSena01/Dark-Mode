import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		width: '100%',
		height: '100px',
		position: 'absolute',
		backgroundColor: '#232323',
		marginTop: '157px',
		textAlign: 'center',
	},
}));

function Footer() {
	const usingStyles = useStyles();
	return(
		<div className={usingStyles.footer}>
			<p style={{fontSize: '20px', color: '#fff'}}>
			Dark Mode project</p>
			<p style={{fontSize: '15px', color: '#fff'}}>
			Kauê Sena <a href="#" style={{color: '#21c5f4'}}>Projects</a></p>
		</div>
	);
}

export default Footer;