import decoration1 from '../../assets/decoration-1.png'
import decoration2 from '../../assets/decoration-2.png'
import decoration3 from '../../assets/decoration-3.png'
import decoration4 from '../../assets/decoration-4.png'

function Decorator({d, p , x, y, deg,w ,h}){
    const decorations = {
        1: decoration1,
        2: decoration2,
        3: decoration3,
        4: decoration4
    }

    return(
        <img alt={'decoration'} src={decorations[d]} style={{
            width:w,
            height: h,
            position: p,
            left: x,
            top: y,
            rotate: `rotate(${deg}deg)`,

        }}></img>
    )
}

export default Decorator;