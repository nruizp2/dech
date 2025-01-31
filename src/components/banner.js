import 'bootstrap/dist/css/bootstrap.css';
import "../css/banner.css"

import { Grid2, AppBar, Toolbar, Container, Menu, MenuItem} from "@mui/material";

import FullLogo from "../assets/full-logo.png"
import menuIcon from "../assets/menu-icon.png"
import ES from "../assets/ES-icon.png"
import EN from "../assets/EN-icon.png"
    
import "@fontsource/montserrat/700.css";
import "@fontsource/nunito-sans";

import {useIntl} from 'react-intl';

import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react';


function Banner({f, setLocale}){
        let navigate = useNavigate();

        const [anchorEl, setAnchorEl] = useState(null);
        const [openMenu, setOpenMenu] = useState(false)
        const [langClick, setLangClick] = useState(true);

        const handleMenu = () => {
            setOpenMenu(!openMenu)
        }
        const handleClose = () => {
            setAnchorEl(null);
            setOpenMenu(false)
          };
        
        const handleNavigate = (path) => {
            window.scrollTo(0, 0);
            f()
            navigate(`/${path}`)
        }
        
        const handleNavigateAndClose = (path) => {
            handleNavigate(path);
            handleClose();
        }

        const intl = useIntl();
        const [currLocale, setCurrLocale] = useState(intl.locale);

        const changeLocale = async () => {
            if(!langClick) return;

            setLangClick(false);

            setTimeout(() => {
                if(currLocale === "es"){
                    setCurrLocale('en');
                    setLocale('en');
                }
                else{
                    setCurrLocale('es');
                    setLocale('es');
                }
                setLangClick(true);
              }, 100);
              
        }

        useEffect(() => {
            const handleResize = () => {
              setOpenMenu(false)
            };
            window.addEventListener('resize', handleResize);
        
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []);
        
        return(
            <AppBar position="sticky" className='main-div-banner' sx={{background:'transparent', backdropFilter: 'blur(10px)'}}>
                <Container>
                    <Toolbar disableGutters>
                        <Grid2 container display={{xs:'none', md:'flex'}} sx={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                            <Grid2 size={1}></Grid2>
                            <Grid2 onClick={() => handleNavigate('')} size= {2} display={'flex'} sx={{cursor: 'pointer',justifyContent:'center', alignItems:'center'}}>
                                <img alt='logo' className="img-logo" src={FullLogo}></img>
                                <p  className="dech-typo" >Dech</p>
                            </Grid2>
                            <Grid2 size={1}></Grid2>
                            <Grid2 size={4} display={'flex'} sx={{gap: '20px', justifyContent:'center', alignItems:'center'}}>
                                <p onClick={() => handleNavigate('')} className="inicio-text">{intl.formatMessage({id:"home"})}</p>
                                <p onClick={() => handleNavigate('services')} className="inicio-text">{intl.formatMessage({id:"services"})}</p>
                                <p onClick={() => handleNavigate('projects')} className="inicio-text">{intl.formatMessage({id:"projects"})}</p>
                                <p onClick={() => handleNavigate('us')} className="inicio-text">{intl.formatMessage({id:"about us"})}</p>
                            </Grid2>
                            <Grid2  size={1}></Grid2>
                            <Grid2 size={2} sx={{justifyContent:'center', alignItems:'center'}}>
                                <button onClick={() => handleNavigate('contact')} className="banner-button-contact"><p className='banner-button-contact-text'>
                                {intl.formatMessage({id:'contact'}).split('').map((char, index) => (
                                    <span key={index}>{char}</span>
                                ))}
                                </p>
                                </button>
                            </Grid2>
                            <Grid2 size={1} onClick={() => changeLocale()}>
                                <img  alt='language' src={currLocale === "es"? EN: ES} className={langClick? 'lang-img': 'lang-img-animated'}></img>
                            </Grid2>
                        </Grid2>

                        <Grid2 container display={{xs:'flex', md:'none'}} sx={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                            <Grid2 size={2} display={'flex'} >
                                <img onClick={() => handleMenu()} style={{opacity: (openMenu? '1': '0.5')}} alt='menu-icon' className='menu-icon' src={menuIcon}></img>
                                <Menu
                                    anchorEl={anchorEl} open={openMenu} onClose={handleClose} anchorOrigin={{ vertical: 60, horizontal: 0,}}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }} 
                                >   
                                    <MenuItem onClick={() => handleNavigateAndClose('')} className="MenuItem"><p className="inicio-text">{intl.formatMessage({id:"home"})}</p></MenuItem>
                                    <MenuItem onClick={() => handleNavigateAndClose('services')} className="MenuItem"><p className="inicio-text">{intl.formatMessage({id:"services"})}</p></MenuItem>
                                    <MenuItem onClick={() => handleNavigateAndClose('projects')}><p className="inicio-text">{intl.formatMessage({id:"projects"})}</p></MenuItem>
                                    <MenuItem onClick={() => handleNavigateAndClose('us')}><p className="inicio-text">{intl.formatMessage({id:"about us"})}</p></MenuItem>
                                    <MenuItem onClick={handleClose}><img onClick={() => changeLocale()} alt='language' src={currLocale === "es"? EN: ES} className='lang-img'></img></MenuItem>
                                </Menu>
                            </Grid2>
                            <Grid2 size= {6} display={'flex'} sx = {{ justifyContent:'center', alignItems:'center', textAlign:'center',}}>
                                <img onClick={() => handleNavigate('')} alt='logo' className="img-logo" src={FullLogo}></img>
                                <p onClick={() => handleNavigate('')} className="dech-typo" >Dech</p>
                            </Grid2>
                            <Grid2 size= {4} sx = {{ justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <button onClick={() => handleNavigate('contact')} className="banner-button-contact"><p className='banner-button-contact-text'>
                                {intl.formatMessage({id:'contact'}).split('').map((char, index) => (
                                    <span key={index} >{char}</span>
                                ))}
                                </p>
                                </button>
                            </Grid2>
                        </Grid2>
                    </Toolbar>
                </Container>
            </AppBar>  
        )
}

export default Banner;