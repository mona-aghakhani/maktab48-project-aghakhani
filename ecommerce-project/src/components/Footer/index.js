import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
  // let theme=useContext(ThemeContext)

  return (
    <footer
    //  style={{margin:"90vh 0"}}
     >
      <Box bgcolor="text.secondary">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography>با ما همراه باشید</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>mona.aqakhani@</Typography>
          </Box>
          <Box textAlign="center">
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
          </Box>
        </Container>
      </Box>
      {/* <AppBar className={appbar} color="secondary" position="relative">
        <Toolbar className={header}>
          <Typography variant="h6" noWrap>
            با ما همراه باشید
          </Typography>

          <HomeIcon className={icon} />
         
        </Toolbar>
      </AppBar> */}
    </footer>
  );
};
export default Footer;
