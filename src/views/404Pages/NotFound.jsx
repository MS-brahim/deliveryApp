import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
    return (
        <Box maxWidth="sm" sx={{ mt: "10%", textAlign:'center', mx:'auto' }}>
            <Typography variant="h3" sx={{width:'100%'}}>
                404 error
            </Typography>
            <Typography variant="h4">
                There’s no page here !!
            </Typography>
            <Typography variant="h5">
                Looks like you ended up here by accident?
            </Typography>
            <Button variant="contained" sx={{mt:2}}>Go To home page</Button>
        </Box>
    )
}
