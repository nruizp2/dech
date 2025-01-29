import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function CarouselDech({ imgs, h, w }) {
    return (
        <Carousel
            width="100%"  // El carrusel ocupa el 100% del ancho disponible
            height={h}    // Ajusta la altura según lo que pase como prop
            autoPlay={true}
            indicators={true}
            swipe={true}
            cycleNavigation={true}
            animation="slide"
            duration={1000}
            sx={{ width: '100%', height: '100%' }} // Asegura que el carrusel ocupe todo el espacio disponible
        >
            {imgs.map((i, index) => (
                <Item key={`img-carousel-${index}`} h={h} w={w} source={i} />
            ))}
        </Carousel>
    );
}

function Item({ source, h, w }) {
    return (
        <Paper sx={{
            width: '100%',  // El Paper ocupa todo el ancho disponible
            height: '100%', // El Paper ocupa toda la altura disponible
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent'
        }}>
            <img
                src={source}
                alt="item-carousel"
                style={{
                    width: '100%',  
                    height: '100%', 
                    objectFit: 'contain', 
                }}
            />
        </Paper>
    );
}

export default CarouselDech;
