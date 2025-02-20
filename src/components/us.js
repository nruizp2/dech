import { Grid2 } from "@mui/material";

import { useIntl } from "react-intl";

import "@fontsource/poppins/800.css"
import "@fontsource/nunito-sans"

import "../css/us.css"

function Us(){
    const intl = useIntl();
    return(
        <Grid2 container alignItems={'stretch'} paddingBottom={'40px'}>
            <Grid2 size={12} paddingBottom={'80px'} paddingTop={'5%'} paddingLeft={'5%'} sx={{justifyContent:'center', alignItems:'center', display:'flex', position: 'relative'}}>
                <p className="us-main-title">{intl.formatMessage({id: "us1"})}</p>

            </Grid2>

            <Grid2 height={'100%'} paddingLeft={'50px'} size={{xs: 12, md: 4}} sx={{justifyContent:'center', alignItems:'start', display:'flex', flexDirection:'column', position: 'relative'}}>
                <p className="us-sec-title">{intl.formatMessage({id: "us2"})}</p>
                <div className="us-gradient-div"></div>
                <p className="us-text">{intl.formatMessage({id: "us3"})}</p>
                <p className="us-text">{intl.formatMessage({id: "us4"})}</p>
            </Grid2>

            <Grid2 height={'100%'} paddingLeft={'50px'} size={{xs: 12, md: 4}} sx={{justifyContent:'center', alignItems:'start', display:'flex', flexDirection:'column', position: 'relative'}}>
                <p className="us-sec-title">{intl.formatMessage({id: "us5"})}</p>
                <div className="us-gradient-div"></div>
                <p className="us-text">{intl.formatMessage({id: "us6"})}</p>
            </Grid2>

            <Grid2 height={'100%'} paddingLeft={'50px'} size={{xs: 12, md: 4}} sx={{justifyContent:'center', alignItems:'start', display:'flex', flexDirection:'column', position: 'relative'}}>
                <p className="us-sec-title">{intl.formatMessage({id: "us7"})}</p>
                <div className="us-gradient-div"></div>
                <p className="us-text">{intl.formatMessage({id: "us8"})}</p>
            </Grid2>

            <Grid2 height={'300px'}>

            </Grid2>

            
        </Grid2>
    )

};

export default Us;