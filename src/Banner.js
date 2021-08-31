import React from 'react';
import { Button, makeStyles, Toolbar } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	banner: {
		height: '400px',
		maxWidth: '1200px',
		// backgroundColor: '#ff0000',
		margin: '0 auto'
	},
	alingElements: {
		// marginTop: '150px',
		height: '370px',
		width: '1200px',
		// backgroundColor: '#232323',
		display: 'flex',
		justifyContent: 'space-between'
	},
	logo: {
		height: '400px',
		maxWidth: '600px'
	},
	text: {
		width: '600px'
	}
}));

function Banner() {
	const usingStyles = useStyles();
	const theme = useTheme();

	return(
		<div className={usingStyles.banner}>
			<Toolbar  />
			<Toolbar  />
			<div className={usingStyles.alingElements}>
				<div className={usingStyles.logo}>
				<img src="/img/logo-banner.png" style={{width: '100%'}}/>
				</div>
				<div className={usingStyles.text}>
					<h1 style={{fontSize: '50px'}}
					style={{color: theme.palette.type === 'dark' ? '#fff' : '#232323'}}>
					Página inicial</h1>

					<p style={{maxWidth: '400px', fontSize: '20px',
					color: theme.palette.type === 'dark' ? '#fff' : '#232323'}}>
					O modo escuro dos smartphones, 
	   				também chamado de dark mode, deixa 
	   				a tela de fundo mais escura e as 
	   				letras claras.</p>
				</div>
			</div>
		</div>
	);
}

export default Banner;