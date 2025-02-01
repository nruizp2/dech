import { Grid2 } from "@mui/material";

import logo from "../assets/full-logo.png"

import "@fontsource/montserrat/700.css";
import "@fontsource/nunito-sans";

import "../css/footer.css"

import { useIntl } from "react-intl";

function Footer(){
    const currentYear = new Date().getFullYear();
    const intl = useIntl();
    return (
        <Grid2 container className="footer-main-container" position="sticky" sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Grid2 paddingTop={{xs: 2, md:0}} size={{xs:12, md: 3}} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img className="img-logo-footer"src={logo} alt="logo"></img>
                <p className="dech-typo-footer">Dech</p>
            </Grid2>
            <Grid2 size={{xs:12, md: 6}} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* Espacio para poner soporte, politicas, ect en el futuro */}
            </Grid2>

            <Grid2 paddingTop={{xs: "3%", md: '0'}} size={{xs:12, md: 3}} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p className="footer-text">{`© ${currentYear} ` +  intl.formatMessage({id: "footer"})}</p>
            </Grid2>
        </Grid2>
    )
}

export default Footer;