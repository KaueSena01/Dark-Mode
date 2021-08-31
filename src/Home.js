import React from 'react';
import { 
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Switch
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

import Banner from './Banner';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
    	height: '100vh',
    	backgroundColor: theme.palette.background.dark
    },
    appBar: {
    	boxShadow: 'none'
    },
    grow: {
    	flexGrow: 1
    },
    title: {
    	fontSize: '20px'
    },
    logo: {
    	fontSize: '26px',
    	paddingRight: theme.spacing(5)
    }
}));

function Home({darkMode, setDarkMode}) {
	const usingStyles = useStyles();
    const theme = useTheme();

	return(
		<div className={usingStyles.root}>
		<AppBar color="inherit" className={usingStyles.appBar}>
  		<Toolbar>
  		
  		<div className={usingStyles.logo}>🚀</div>
        <Typography  style={{color: theme.palette.type === 'dark' ? '#fff' : '#232323'}}
        variant="h6" className={usingStyles.title}>Home</Typography>

    	<div className={usingStyles.grow} />

    	<Switch value={darkMode} 
    	onChange={() => setDarkMode(!darkMode)} />
    	
  		</Toolbar>
	</AppBar>

		<Banner/>
		<Footer/>
		</div>
	);
}

export default Home;