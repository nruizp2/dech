import { Grid2 } from "@mui/material";

import { useIntl } from "react-intl";

import "@fontsource/poppins/800.css"
import "@fontsource/nunito-sans"

import "../css/us.css"
import Decorator from "./sub-components/decorator";

function Us(){
    const intl = useIntl();
    return(
        <Grid2 container>
            <Grid2 size={12} paddingTop={'5%'} paddingLeft={'5%'} sx={{justifyContent:'center', alignItems:'center', display:'flex', position: 'relative'}}>
                <p className="us-main-title">{intl.formatMessage({id: "us1"})}</p>

                <Decorator p={"absolute"} d={1} x={'5%'} y={'10%'} deg={0} w={"5%"} h={'auto'}/>
                <Decorator p={"absolute"} d={2} x={'80%'} y={'80%'} deg={0} w={"3%"} h={'auto'}/>
            </Grid2>
            <Grid2 size={12} paddingRight={'5%'} paddingLeft={'5%'} paddingTop={'3%'} sx={{justifyContent:'center', alignItems:'start', display:'flex', flexDirection:'column', position: 'relative'}}>
                <p className="us-sec-title">{intl.formatMessage({id: "us2"})}</p>
                <p className="us-sec-title">{intl.formatMessage({id: "us3"})}</p>
                <p className="us-sec-title">{intl.formatMessage({id: "us4"})}</p>
                <p className="us-sec-title">{intl.formatMessage({id: "us5"})}</p>

                <Decorator p={"absolute"} d={3} x={'0%'} y={'0%'} deg={0} w={"5%"} h={'auto'}/>
                <Decorator p={"absolute"} d={4} x={'90%'} y={'80%'} deg={0} w={"5%"} h={'auto'}/>
            </Grid2>
        </Grid2>
    )

};

export default Us;