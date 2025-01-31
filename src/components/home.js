import 'bootstrap/dist/css/bootstrap.css';
import "../css/home.css"

import { Grid2 } from "@mui/material";

import {useIntl} from 'react-intl';

import img1 from "../assets/home1Img.png"

import "@fontsource/montserrat/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";

import Decorator from './sub-components/decorator';

import { useNavigate } from "react-router-dom";

function Home({f}){
    let navigate = useNavigate();
    const intl = useIntl();
    // const video1_url  = 'https://www.youtube.com/embed/tgbNymZ7vqY'

    const handleNavigate = (path) => {
        window.scrollTo(0, 0);
        f()
        navigate(`/${path}`)
    }

    return(
        <Grid2 container paddingTop={'20px'} paddingRight={'0'} paddingLeft={'10%'}>
            <Grid2 size={{xs: 12, md: 7}} display={'block'}  paddingTop={{sx:'10px', md:'150px'}}>
                <h1 className='home-text-1'>{intl.formatMessage({id:"home1"})}</h1>
                <p className='home-text-2'>{intl.formatMessage({id:"home2"})}</p>
                <button onClick={()=> handleNavigate('services')} className='home-button-1'><p className='home-button-1-text'>{intl.formatMessage({id:"home3"})}</p></button>
            </Grid2>
            <Grid2 size={{xs: 12, md: 5}} sx= {{display:'flex' ,width:'100%', justifyContent:'center', alignItems:'center', position:'relative'}}>
                
                <Decorator p={"absolute"} d={1} x={'0%'} y={'10%'} deg={0} w={"15%"} h={'auto'}/>
                <Decorator p={"absolute"} d={2} x={'80%'} y={'0%'} deg={0} w={"8%"} h={'auto'}/>
                <Decorator p={"absolute"} d={3} x={'90%'} y={'80%'} deg={0} w={"8%"} h={'auto'}/>
                <Decorator p={"absolute"} d={4} x={'0%'} y={'85%'} deg={0} w={"15%"} h={'auto'}/>
                
                <img alt='icon1' className='home-img-1' src={img1}></img>
            </Grid2>
            {/* <Grid2 size={{xs:12, md:6}} paddingTop={'3%'}>
                <p className='home-text-4'>{intl.formatMessage({id:"home4"})}</p>
            </Grid2>
            <Grid2 size={{xs:12, md:6}} paddingTop={'3%'}>
                <p className='home-text-5'>{intl.formatMessage({id:"home5"})}</p>
            </Grid2>

            <Grid2 size={12} display={{xs: 'none', md:'flex'}}  paddingTop={'3%'} paddingRight={'5%'} sx={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <iframe title='t1' height='800px' className='home-video-1' src={video1_url}></iframe>
            </Grid2>
            <Grid2 size={12}  display={{xs: 'flex', md:'none'}}  paddingTop={'3%'} paddingRight={'5%'} sx={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <iframe title='t2' height='400px' className='home-video-1' src={video1_url}></iframe>
            </Grid2> */}

            <Grid2 size={{xs:12, md:6}} sx={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                <p style={{paddingTop:'3%'}} className='home-text-4'>{intl.formatMessage({id:"home6"})}</p>
            </Grid2>

            <Grid2 size={{xs:12, md:6}} sx={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                <button onClick={()=> handleNavigate('contact')} className='home-button-1'><p className='home-button-1-text'>{intl.formatMessage({id:"contact"})}</p></button>
            </Grid2>
        </Grid2>
    )
}
export default Home;

