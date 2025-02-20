import CarouselDech from "./sub-components/carousel";

import "../css/projects.css"

import "@fontsource/poppins/800.css"
import "@fontsource/nunito-sans"

import p1_1 from "../assets/proyect 1/p1.png"
import p1_2 from "../assets/proyect 1/p2.png"
import p1_3 from "../assets/proyect 1/p3.png"
import p1_4 from "../assets/proyect 1/p4.png"

import p2_1 from "../assets/project 2/p1.jpg"
import p2_2 from "../assets/project 2/p2.jpg"
import p2_3 from "../assets/project 2/p3.jpg"
import p2_4 from "../assets/project 2/p4.jpg"
import p2_5 from "../assets/project 2/p5.jpg"
import p2_6 from "../assets/project 2/p6.jpg"
import p2_7 from "../assets/project 2/p7.jpg"
import p2_8 from "../assets/project 2/p8.jpg"
import p2_9 from "../assets/project 2/p9.jpg"
import p2_10 from "../assets/project 2/p10.jpg"

import p3_1 from "../assets/project 3/p1.png"
import p3_2 from "../assets/project 3/p2.png"
import p3_3 from "../assets/project 3/p3.png"
import p3_4 from "../assets/project 3/p4.png"
import p3_5 from "../assets/project 3/p5.png"
import p3_6 from "../assets/project 3/p6.png"
import p3_7 from "../assets/project 3/p7.png"

import computer from "../assets/computer.png"
import phone from "../assets/phone.png"
import ipad from "../assets/ipad.png"

import { useIntl } from "react-intl";


import { Grid2 } from "@mui/material";

function Projects () {
    const intl = useIntl();

    const GetComputer = () => {
        return(
            <Grid2 size={{ xs: 12, md: 6 }} 
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '3%', paddingRight: '3%' }}>
                <div style={{position: 'relative', width: '100%',maxWidth: '580px', aspectRatio: '580 / 305', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={computer} alt='computer' style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 3 }} />
                    <div style={{ position: 'absolute', width: '86%', height: '79%', top: '6%',left: '7%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                        <CarouselDech w={'100%'} h={'100%'} imgs={[p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p3_7]} />
                    </div>
                </div>
            </Grid2>
        )
    }

    const GetPhone = () => {
        return(
            <Grid2 size={{ xs: 12, md: 6 }} 
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '3%', paddingRight: '3%' }}>
                <div style={{position: 'relative', width: '100%',maxWidth: '580px', aspectRatio: '270 / 310', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={phone} alt='phone' style={{ width: '100%', height: '77%', position: 'absolute', zIndex: 3 }} />
                    <div style={{ position: 'absolute', width: '86%', height: '91%', top: '10%',left: '7%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                        <CarouselDech w={'44%'}  h={'88%'} imgs={[p2_1,p2_2,p2_3,p2_4,p2_5,p2_6,p2_7,p2_8,p2_9,p2_10]} />
                    </div>
                </div>
            </Grid2>
        )
    }

    const GetIpad = () => {
        return(
            <Grid2 size={{ xs: 12, md: 6 }} 
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '3%', paddingRight: '3%' }}>
                <div style={{position: 'relative', width: '100%',maxWidth: '580px', aspectRatio: '580 / 305', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={ipad} alt='ipad' style={{ width: '80%', height: '90%', position: 'absolute', zIndex: 3 }} />
                    <div style={{ position: 'absolute', width: '88%', height: '100%', top: '2%',left: '6%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                        <CarouselDech w={'85%'}  h={'89%'} imgs={[p1_1,p1_2,p1_3,p1_4]} />
                    </div>
                </div>
            </Grid2>
        )
    }

    return(
        <Grid2 container sx={{width:'100%', display:'flex',justifyContent:'center', alignItems:'center', paddingTop:'5%', paddingBottom: '50px'}}>
            <Grid2 paddingBottom={'25px'} size={12} sx={{display:'flex', flexDirection:'column',width:'100%', justifyContent:'center', alignItems:'center', paddingLeft:'5%'}}>
                <p className="project-main-title">{intl.formatMessage({id:"project1"})}</p>
                <p className="project-sec-title">{intl.formatMessage({id:"project2"})}</p>
            </Grid2>

            
            <Grid2  size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%', }}>
                <p className="project-title">{intl.formatMessage({id:"project7"})}</p>
                <p className="project-description">{intl.formatMessage({id:"project8"})}</p>
            </Grid2>

            <GetComputer/>
            
            <Grid2 paddingTop={'30px'} container size={12} display={{xs: 'flex', md: 'none'}} sx={{ justifyContent:'center', alignItems:'center', paddingBottom: '0%'}}>
                <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '0%'}}>
                    <p className="project-title">{intl.formatMessage({id:"project3"})}</p>
                    <p className="project-description">{intl.formatMessage({id:"project4"})}</p>
                </Grid2>

                <GetPhone />  
            </Grid2>

            <Grid2 container size={12} display={{xs: 'none', md: 'flex'}} sx={{ justifyContent:'center', alignItems:'center', paddingBottom: '0%'}}>
                <GetPhone />  

                <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '0%'}}>
                    <p className="project-title">{intl.formatMessage({id:"project3"})}</p>
                    <p className="project-description">{intl.formatMessage({id:"project4"})}</p>
                </Grid2>
            </Grid2>

            <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%'}}>
                <p className="project-title">{intl.formatMessage({id:"project5"})}</p>
                <p className="project-description">{intl.formatMessage({id:"project6"})}</p>
            </Grid2>
            
            <GetIpad />

        </Grid2>
    )
}

export default Projects;