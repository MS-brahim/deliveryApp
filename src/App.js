import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './views/auth/Login';
import SwitchMode from './shared/button/SwitchMode';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './views/auth/Register';
import NotFound from './views/404Pages/NotFound';
import Home from './views/home/home';
import NavBarLayout from './layouts/NavBarLayout';
import AboutUs from './views/about-us/AboutUs';
import Contact from './views/contact/Contact';
import Service from './views/service/Service';
import Pricing from './views/pricing/Pricing';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    components: {
      MUIDataTableBodyRow: {
        styleOverrides: {
          root: {
            '&:nth-of-type(2n)': {
              backgroundColor: '#BDE3FF29',
            }
          },
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            // ...darkScrollbar(),
            backgroundColor: darkMode ? '#202124' : '#f8f8f8',
            "& h1": {
              color: darkMode ? '#fff' : '#202124',
            }
          }
        }
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('TdmnDarkMode', !darkMode);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SwitchMode onChange={toggleDarkMode} />
      <CssBaseline />
      <Routes>
        <Route element={<NavBarLayout />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Route>
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
