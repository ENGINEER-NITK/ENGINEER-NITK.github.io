import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../embla.css'
import Box from "@mui/material/Box";

export const EmblaCarousel = ({children, alignItems = "center",axis = 'x', gap = '10px', flex = '0 0 250px', height = 'auto'}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, axis: axis }, [Autoplay({delay: 2000})])
    const direction = axis === 'x'? 'row' : 'column'

    return (
        <div className="embla" ref={emblaRef}>
            <Box className="embla__container" sx={{
                flexDirection: direction,
                gap,
                height,
                 alignItems
            }}>
                {
                    children.map((_)=> {
                        return <Box className="embla__slide" sx={{
                            flex: flex
                        }}>{_}</Box>
                    })
                }
            </Box>
        </div>
    )
}
export default EmblaCarousel
