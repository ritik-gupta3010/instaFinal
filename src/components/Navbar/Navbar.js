import React from "react";
import "./Navbar.css";
// import Button from "@mui/material/Button";
// import Link from "@mui/material/Link"
import Write from "../../Page/write/index";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
// import ExploreIcon from '@mui/icons-material/Explore';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialoge: false,
      mobileOpen: false,
      drawerWidth: 240,
    };
  }
  openDialogeHandleClick = () => {
    const { openDialoge } = this.state;
    this.setState({ openDialoge: !openDialoge });
  };
  handleDrawerToggle = () => {
    // alert("open")
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { openDialoge } = this.state;
    return (
      <>
        <nav>
          <div className="top">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              sx={{ display: { sm: "none" }, ml: "0px" }}
            >
              <MenuIcon />
            </IconButton>
            {this.state.mobileOpen === false ? (
              <div className="top1" style={{}}>
                <div className="topLeft">
                  <span>Instagram</span>
                  <span className="instagram">
                    <i className="fa fa-instagram " aria-hidden="true"></i>
                  </span>
                </div>
                
                <div className="topCenter">
                  <ul className="topList">
                    <li className="topListItem" title="Home">
                      {/* <a
                    style={{ textDecoration: "none",  color: "white"}}
                    href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a> */}
                      <HomeIcon onClick={()=>{window.location.href="/"}}/>
                    </li>
                    <li className="topListItem" title="create a new post">
                      <AddIcon
                        sx={{ color: "white" }}
                        onClick={this.openDialogeHandleClick}
                      />
                    </li>
                    {/* <li className="topListItem" title="Open your saved post">
                      <i className="fa fa-compass" aria-hidden="true"></i> 
                      <ExploreIcon/>
                      <TurnedInIcon />
                    </li> */}
                    <li className="topListItem" title="Open your liked post">
                      {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
                      {/* <FavoriteBorderIcon/> */}
                      <FavoriteIcon sx={{color:"white"}} onClick={()=>{window.location.href="/likePost"}}/>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          <Box component="nav" >
            <Drawer
              // container={container}
              // variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              // ModalProps={{
              //   keepMounted: true, // Better open performance on mobile.
              // }}
              sx={{
                zIndex:"6000",
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: this.state.drawerWidth,
                },
              }}
            >
              <Box
                onClick={this.handleDrawerToggle}
                sx={{ textAlign: "center" ,color:"rgb(50, 55, 101)"}}
              >
                <Typography variant="h5" sx={{ my: 2 }}>
                  <i className="fa fa-instagram " aria-hidden="true"></i>
                  <span style={{ marginLeft: "2%" }}>INSTAGRAM</span>
                </Typography>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemButton sx={{ textAlign: "center" }}onClick={()=>{window.location.href="/"}}>
                    <HomeIcon />
                      <span style={{ marginLeft: "2%" }}>Home</span>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={this.openDialogeHandleClick}
                    >
                      <AddIcon
                      // sx={{ color: "white" }}
                      />
                      <span style={{ marginLeft: "2%" }}>Create post</span>
                    </ListItemButton>
                  </ListItem>
                  {/* <ListItem>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <TurnedInIcon />
                      <span style={{ marginLeft: "2%" }}>Save Post</span>
                    </ListItemButton>
                  </ListItem> */}
                  <ListItem>
                    <ListItemButton sx={{ textAlign: "center" }} onClick={()=>{window.location.href="/likePost"}}>
                      <FavoriteIcon />
                      <span style={{ marginLeft: "2%" }}>Like Post</span>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </nav>
        <Write openDiolog={openDialoge} onClose={this.openDialogeHandleClick} />
      </>
    );
  }
}
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         INSTAGRAM
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Instagram
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
