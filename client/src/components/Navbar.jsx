import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';

const StyledIconButton = styled(IconButton)({
    '& img': {
        width: 180,
        height: 50,
    },
});

function Navbar() {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        <Navigate to="/login" />
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <StyledIconButton href='/' edge="start" color="inherit" aria-label="menu">
                    <img alt="logo" src="https://telematics.poliba.it/images/logo2.png" />
                </StyledIconButton>
                <div style={{ flexGrow: 1 }} />
                {!localStorage.getItem('token') ? 
                <>
                    <Button href='/login' color="inherit" variant='outfilled'>Accedi</Button>
                    <Button href='/registration' color="inherit" variant='outfilled'>Registrati</Button>
                </> : 
                    <Button href='/login' color="inherit" variant='outfilled' onClick={logout}>Logout</Button>
                }
                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
