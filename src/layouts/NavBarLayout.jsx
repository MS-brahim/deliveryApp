import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

export default function NavBarLayout() {
    return (
        <>
            <NavBar />
            <Box sx={{ mt: 5 }}>
                <Outlet />
            </Box>
        </>
    )
}
