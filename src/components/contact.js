import { Grid2 } from "@mui/material";

import {useIntl} from 'react-intl';

import "@fontsource/poppins/800.css"
import "@fontsource/nunito-sans/400.css"

import igLogo from "../assets/ig-logo.png"
import mailLogo from "../assets/mail-logo.png"
import phoneLogo from "../assets/phone-logo.png"

import globals from "../Globals";

import '../css/contact.css'
function Contact(){
    const intl = useIntl();

    return(
        <Grid2 container sx={{display: 'flex',justifyContent:'center', alignItems:'center'}}>
            <Grid2 paddingTop={{xs: '50px', md: '200px'}}  size={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom:'0px', paddingRight:'5%' , paddingLeft: '5%', textAlign:'center'}}>
                <p className="contact-main-title">{intl.formatMessage({id: "contact1"})}</p>
                <p className="contact-sec-title" >{intl.formatMessage({id: "contact2"})}</p>
            </Grid2>

            <Grid2 paddingTop={{xs: '30px', md: '90px'}} className="contact-method-grid"  size={{xs: 12, md: 4}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img className="contact-method-photo" style={{filter:'invert(100%)'}} alt='instagram'src={igLogo}></img>
                <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dechsolutions/" className="contact-method-text">{globals['ig']}</a>
            </Grid2>

            <Grid2 paddingTop={{xs: '30px', md: '90px'}} className="contact-method-grid"  size={{xs: 12, md: 4}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img className="contact-method-photo" style={{filter:'invert(100%)'}} alt='instagram'src={mailLogo}></img>
                <p   className="contact-method-text">{globals['mail']}</p>
            </Grid2>

            <Grid2 paddingTop={{xs: '30px', md: '90px'}} className="contact-method-grid"  size={{xs: 12, md: 4}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img className="contact-method-photo" style={{filter:'invert(100%)'}} alt='instagram'src={phoneLogo}></img>
                <p className="contact-method-text">{globals['phone']}</p>
            </Grid2>
        </Grid2>
    )

}

export default Contact;