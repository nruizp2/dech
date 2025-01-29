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


import { Grid2 } from "@mui/material";

function Projects () {
    return(
        <Grid2 container sx={{width:'100%', justifyContent:'center', alignItems:'center', paddingTop:'5%'}}>
            <Grid2 size={12} sx={{display:'flex', flexDirection:'column',width:'100%', justifyContent:'center', alignItems:'center', paddingLeft:'5%'}}>
                <p className="project-main-title">¡Mira lo que podemos hacer!</p>
                <p className="project-sec-title">Explora algunos de los productos innovadores que hemos creado, diseñados para cumplir con tus necesidades.</p>
            </Grid2>

            <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%'}}>
                <p className="project-title">Modelos de predicción aplicados</p>
                <p className="project-description">Desarrollamos un software innovador diseñado para analizar el contenido de entrevistas y predecir si se enfoca principalmente en los Objetivos de Desarrollo Sostenible (ODS) 3, 4 y 5. Este sistema no solo facilita la clasificación automática de los temas abordados en las entrevistas, sino que también incluye una funcionalidad que permite a los usuarios reentrenar el modelo con nuevos datos, asegurando que el sistema se mantenga actualizado y preciso a medida que evoluciona la información. Esta solución contribuye a mejorar la eficiencia en la evaluación de las entrevistas y apoya la toma de decisiones informadas para impulsar las iniciativas de los ODS en diversas comunidades.</p>
            </Grid2>
            <Grid2 size={{xs:12, md: 6}} sx={{width:'100%', display:'flex', height:'auto', justifyContent:'center', alignItems:'center' , paddingLeft:'3%', paddingRight:'3%', paddingBottom: '3%'}}>
                <CarouselDech  h={'450px'} imgs={[p1_1,p1_2,p1_3,p1_4]} />
            </Grid2>

            <Grid2 size={{xs:12, md: 6}}  sx={{justifyContent:'center', alignItems:'center', paddingBottom: '3%'}}>
                <p className="project-title">Aplicaciones móviles</p>
                <p className="project-description">Desarrollamos un software innovador diseñado para analizar el contenido de entrevistas y predecir si se enfoca principalmente en los Objetivos de Desarrollo Sostenible (ODS) 3, 4 y 5. Este sistema no solo facilita la clasificación automática de los temas abordados en las entrevistas, sino que también incluye una funcionalidad que permite a los usuarios reentrenar el modelo con nuevos datos, asegurando que el sistema se mantenga actualizado y preciso a medida que evoluciona la información. Esta solución contribuye a mejorar la eficiencia en la evaluación de las entrevistas y apoya la toma de decisiones informadas para impulsar las iniciativas de los ODS en diversas comunidades.</p>
            </Grid2>
            <Grid2 size={{xs:12, md: 6}} sx={{width:'100%', display:'flex', height:'auto', justifyContent:'center', alignItems:'center' , paddingLeft:'3%', paddingRight:'3%', paddingBottom: '3%'}}>
                <CarouselDech  h={'450px'} imgs={[p2_1,p2_2,p2_3,p2_4,p2_5,p2_6,p2_7,p2_8,p2_9,p2_10]} />
            </Grid2>

        </Grid2>
    )
}

export default Projects;