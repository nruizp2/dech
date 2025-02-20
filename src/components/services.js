import "../css/services.css";

import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/400.css";

import { Grid2, Box} from "@mui/material";

import {useIntl} from 'react-intl';

function Services(){
    const intl = useIntl();
    const l = [2,4,6,8,10,12]
    const getImageSrc = (i) => require(`../assets/icon-services-${i}.png`);

    return(
        <Grid2 container className="services-principal-grid" spacing={10} paddingBottom={'40px'}>
            <Grid2 size= {12}>
                <Box component='p'  textAlign={{xs:"start", md:'center'}} marginLeft={{xs:'5%', md:'25%'}} marginRight={{xs:'0%', md:'25%'}} className="services-text-1">{intl.formatMessage({id:"services1"})}</Box>
            </Grid2>
            {
                l.map((i,_) => (
                        <Grid2 key={`serviceGrid${i}`} className="services-grid" size={{xs:12, md: 4}} sx= {{width:'100%', justifyContent:'center', alignItems:'center', display:'flex', flexDirection: 'column'}}>
                            <img className="services-icon" alt={`icon-services-${i}`}  src={getImageSrc(i)}></img>
                            <p className="services-title">{intl.formatMessage({id: `services${i}`})}</p>
                            <p className="services-description">{intl.formatMessage({id: `services${i + 1}`})}</p>
                        </Grid2>
                    
                ))
            }
        </Grid2>
    )
}

export default Services;