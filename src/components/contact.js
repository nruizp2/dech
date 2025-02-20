import { useState } from 'react';

import { Grid2, TextField } from "@mui/material";

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

    const [mail, setMail] =  useState('')
    const [comment, setComment] =  useState('')
    const [validMail, setValidMail] = useState(true)
    const [name, setName] =  useState('')

    const [touched1, setTouched1] = useState(false)
    const [touched2, setTouched2] = useState(false)

    const getInputProps = () => {
        return {
            '& .MuiInputBase-input': {
              color: 'black',
              marginBottom: '1.25rem'
            },
            '& .MuiInputLabel-root': {
              color: 'black',
              fontSize: '1.25rem' 
            },
            '& .MuiInputLabel-root:active': {
              color: 'black',
              fontSize: '1.25rem' 
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
              backgroundImage: 'linear-gradient(90deg, #CB4937, #C23477)',
              height: '3px'
            },
            '&:hover .MuiInput-underline:before': {
              borderBottom: 'none',
              backgroundImage: 'linear-gradient(90deg, #CB4937, #C23477)',
              height: '4px',
              backgroundColor: 'transparent' 
            },
            '& .MuiInput-underline:after': {
              borderBottom: 'none',
              backgroundImage: 'linear-gradient(90deg, #000000, #ffffff)',
              height: '4px'
            },
            '& .MuiInputBase-root:before, .MuiInputBase-root:after, .MuiInputBase-root:hover:not(.Mui-disabled):before': {
              borderBottom: 'none !important'
            },
            '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: -30 // Ajusta según tamaño del texto
            }
          } 
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      
      const checkMail = (e) => {
        const newEmail = e.trim(); 
        setMail(newEmail);
        
        const isValid = newEmail ? validateEmail(newEmail) : false;
        setValidMail(isValid);
      };

    return(
        <div>
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
        <form onSubmit={((e) => {
            if (!validMail || name.length === 0 || comment.length === 0) {
                e.preventDefault();
                alert(`${intl.formatMessage({id: "contact3"})}`);
              }
        })} action={`https://formsubmit.co/${globals['mail']}`} method="POST" style={{ width: '100%' }}>
        <Grid2 container paddingBottom={'20px'} className='contact-form' sx={{display: 'flex',justifyContent:'center', alignItems:'center', height: 'auto'}}>
            <Grid2 size={12} sx={{display: 'flex',justifyContent:'left', alignItems:'left', paddingTop: '20px'}}>
                <p className="contact-form-text-1">{intl.formatMessage({id: "contact4"})}</p>
            </Grid2>

            <Grid2 padding={'2% 7%'} size={6} sx={{display: 'flex',justifyContent:'flex-start', alignItems:'center', height: '120px', }}>
                <TextField name="name" onClick={() => setTouched1(true)}  fullWidth helperText={(name.length === 0  && touched1)? `${intl.formatMessage({id: "contact5"})}` : ''} error={name.length === 0  && touched1} sx={getInputProps()} onChange={(e) => setName(e.target.value)} label={`${intl.formatMessage({id: "contact7"})}`} variant="standard" />
            </Grid2>
            <Grid2 padding={'2% 7%'}  size={6} sx={{display: 'flex',justifyContent:'flex-start', alignItems:'center', height: '120px'}}>
                <TextField name="mail" onClick={() => checkMail(mail)}   fullWidth helperText={validMail? '': `${intl.formatMessage({id: "contact6"})}` } error={!validMail} sx={getInputProps()} onChange={(e) => checkMail(e.target.value)}  value={mail} label={`${intl.formatMessage({id: "contact8"})}`} variant="standard" />
            </Grid2>
            <Grid2 padding={'5% 7%'} size={12} sx={{display: 'flex',justifyContent:'center', alignItems:'center', width: '100%'}}>
                <TextField name="comment" onClick={() => setTouched2(true)} rows={5} multiline  fullWidth helperText={(comment.length === 0  && touched2)?  `${intl.formatMessage({id: "contact5"})}`: '' } error={(comment.length === 0  && touched2)} sx={getInputProps()} onChange={(e) => setComment(e.target.value)} label={`${intl.formatMessage({id: "contact9"})}`} variant="standard" />
            </Grid2>
            <Grid2 padding={'1% 7%'} size={12} sx={{display: 'flex',justifyContent:'right', alignItems:'center', width: '100%'}}>
                <button type='submit'  className='send-contact-button'><p className='home-button-1-text'>{intl.formatMessage({id: "contact10"})}</p></button>
            </Grid2>

        </Grid2>
        </form>
        </div>
    )

}

export default Contact;