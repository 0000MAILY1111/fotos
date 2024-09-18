import { Box, Drawer, Toolbar, Typography } from "@mui/material";

export const Sidebar = ({drawerWidth = 240}) => {
    return (
        <Box>
            component = 'nav'
            sx = {{width : {sm:drawerWidth}, flexShrink : {sm:0}}}
            <Drawer 
            variant='permanent'
            open sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper' : {width : drawerWidth, boxSizing : 'border-box'}

            }}
            >   
            <Toolbar variant = 'h6' noWrap component='div'>
                <Typography>Miley</Typography>
            </Toolbar>


            </Drawer>
        </Box>
        
        
    )
}

export default Sidebar;
