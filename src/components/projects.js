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

import { useIntl } from "react-intl";


import { Grid2 } from "@mui/material";

function Projects () {
    const intl = useIntl();
    return(
        <Grid2 container sx={{width:'100%', justifyContent:'center', alignItems:'center', paddingTop:'5%'}}>
            <Grid2 size={12} sx={{display:'flex', flexDirection:'column',width:'100%', justifyContent:'center', alignItems:'center', paddingLeft:'5%'}}>
                <p className="project-main-title">{intl.formatMessage({id:"project1"})}</p>
                <p className="project-sec-title">{intl.formatMessage({id:"project2"})}</p>
            </Grid2>

            <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%'}}>
                <p className="project-title">{intl.formatMessage({id:"project3"})}</p>
                <p className="project-description">{intl.formatMessage({id:"project4"})}</p>
            </Grid2>
            <Grid2 size={{xs:12, md: 6}} sx={{width:'100%', display:'flex', height:'auto', justifyContent:'center', alignItems:'center' , paddingLeft:'3%', paddingRight:'3%', paddingBottom: '3%'}}>
                <CarouselDech  h={'450px'} imgs={[p2_1,p2_2,p2_3,p2_4,p2_5,p2_6,p2_7,p2_8,p2_9,p2_10]} />
            </Grid2>

            <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%'}}>
                <p className="project-title">{intl.formatMessage({id:"project5"})}</p>
                <p className="project-description">{intl.formatMessage({id:"project6"})}</p>
            </Grid2>
            <Grid2 size={{xs:12, md: 6}} sx={{width:'100%', display:'flex', height:'auto', justifyContent:'center', alignItems:'center' , paddingLeft:'3%', paddingRight:'3%', paddingBottom: '3%'}}>
                <CarouselDech  h={'450px'} imgs={[p1_1,p1_2,p1_3,p1_4]} />
            </Grid2>

        </Grid2>
    )
}

export default Projects;