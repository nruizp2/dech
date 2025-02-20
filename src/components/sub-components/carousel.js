import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function CarouselDech({ imgs, h, w }) {
    return (
        <Carousel
            autoPlay={true}
            indicators={false}
            swipe={true}
            cycleNavigation={true}
            animation="slide"
            duration={1000}
            sx={{ 
                width: w, // Usamos el ancho proporcionado (puede ser porcentaje o píxeles)
                height: h, // Usamos la altura proporcionada (puede ser porcentaje o píxeles)
                position: 'relative', // Aseguramos que el carrusel sea un contenedor relativo
            }}
        >
            {imgs.map((i, index) => (
                <Item key={`img-carousel-${index}`} source={i} />
            ))}
        </Carousel>
    );
}

function Item({ source }) {
    return (
        <Paper sx={{
            width: '100%',  // Ocupa todo el ancho del carrusel
            height: '100%', // Ocupa toda la altura del carrusel
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            position: 'relative', // Aseguramos que el Paper sea un contenedor relativo
        }}>
            <img
                src={source}
                alt="item-carousel"
                style={{
                    width: '100%',  
                    height: '100%', 
                    objectFit: 'contain', // Ajusta la imagen dentro del contenedor
                }}
            />
        </Paper>
    );
}

export default CarouselDech;