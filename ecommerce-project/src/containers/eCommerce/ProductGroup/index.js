import React from 'react'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from "./styles";
const ProductGroup = () => {
    const {sidebar}= useStyles()
    return (
        <main>
            {/* <Container maxWidth='lg'> */}
            <Grid container>
        {/* <div
         className={classes.toolbar}
          /> */}
          <Grid className={sidebar} item xs={12} sm={3}>
        <Divider />
        <List>
            <ListItem>
              <Typography variant="h6">کالاهای گروه لبنیات</Typography>    
                </ListItem>
            <ListItem>  <Typography> ماست </Typography>   </ListItem>
            <ListItem> <Typography>پنیر  </Typography>    </ListItem>
            <ListItem>  <Typography>شیر  </Typography> </ListItem>
            <ListItem> <Typography>کره  </Typography>  </ListItem>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List>
        <ListItem>
              <Typography variant="h6">کالاهای گروه شوینده</Typography>    
                </ListItem>
            <ListItem>  <Typography> پودر لباسشویی </Typography>   </ListItem>
            <ListItem> <Typography>قرص ماشین ظرفشویی  </Typography>    </ListItem>
            <ListItem>  <Typography>مایع دستشویی  </Typography> </ListItem>
            <ListItem> <Typography>شیشه پاک کن  </Typography>  </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
              <Typography variant="h6">کالاهای گروه  نوشیدنی</Typography>    
                </ListItem>
            <ListItem>  <Typography> چایی  </Typography>   </ListItem>
            <ListItem> <Typography> قهوه   </Typography>    </ListItem>
            <ListItem>  <Typography>آبمیوه   </Typography> </ListItem>
            <ListItem> <Typography>دلستر    </Typography>  </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
              <Typography variant="h6">کالاهای گروه خوار وبار</Typography>    
                </ListItem>
            <ListItem>  <Typography> برنج  </Typography>   </ListItem>
            <ListItem> <Typography> قند   </Typography>    </ListItem>
            <ListItem>  <Typography>روغن   </Typography> </ListItem>
            <ListItem> <Typography>نبات    </Typography>  </ListItem>
        </List>
        </Grid>
        <Grid item xs={12} sm={9}>
            <Container>
                گروه لبنیات
            </Container>

        </Grid>
        </Grid>
        {/* </Container> */}
      </main>
    )
}

export default ProductGroup
