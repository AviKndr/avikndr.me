import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


function Top(props) {
  const {toggleTheme} = props;
  return (
      <AppBar color='primary' position='static'>
          <ToolBar>
            <Typography variant="title" color="inherit" style={{borderWidth:'2px',borderColor:'white',borderStyle:'solid',padding:'3px'}}>
            Avinash Kondareddy
            </Typography>
            <div style={{marginLeft:'auto',color:'white'}}>
            <Tooltip title='Toggle Dark Theme'><Switch color='secondary' onChange={toggleTheme}/></Tooltip>
            <Tooltip title='Github'>
            <IconButton color='inherit' href="https://github.com/Avikndr">
                <SvgIcon>
                    <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                </SvgIcon>
            </IconButton>
            </Tooltip>
            <Tooltip title='Email'>
            <IconButton color='inherit' href="mailto:email@avikndr.me">
                <SvgIcon>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </SvgIcon>
            </IconButton>
            </Tooltip>
            <Tooltip title='Resume'>
            <IconButton color='inherit' href="https://github.com/Avikndr">
                <SvgIcon>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </SvgIcon>
            </IconButton>
            </Tooltip>
            </div>
          </ToolBar>
      </AppBar>
  )
}

export default Top;