import { LogoDev, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Navbar() {

    const StyleToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    }))

    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>NewsMedia</Typography>
                <LogoDev sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="" />

                </Icons>
                <UserBox>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src="" />
                        <Typography variant='span'>Jefry</Typography>
                    </UserBox>
                </UserBox>
            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar
