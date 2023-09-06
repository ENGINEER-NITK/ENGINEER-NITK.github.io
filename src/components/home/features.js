import {Container, Grid} from "@mui/material";
import GradientText from "../common/gradienttext";
import GradientBox from "../common/gradientbox";
import Spacer from "../Spacer";
import {BiMobile, BiShield, BiUserCheck, BiWifi} from "react-icons/bi";
import {Description, Heading} from "../common/typography";
import Box from "@mui/material/Box";
import {BsSpeedometer} from "react-icons/bs";
import useGsap, {animateOnScroll} from "../../hooks/useGsap";

const features = [
    {
        name: 'Responsive Design',
        description: 'Our websites look great on all devices, from mobile to desktop.',
        icon: <BiMobile size='32px'/>, // Replace with the actual icon name or icon URL
        background: 'linear-gradient(135deg, #f7f7f7, #cfcfcf)', // Replace with the desired gradient colors,
        contrast: 'black'
    },
    {
        name: 'User Friendly',
        description: 'Intuitive and user-friendly interfaces to enhance the user experience.',
        icon: <BiUserCheck size='32px'/>, // Replace with the actual icon name or icon URL
        background: 'linear-gradient(135deg, #5856d6, #151473)', // Replace with the desired gradient colors,
        contrast: 'white'
    },
    {
        name: 'SEO Optimized',
        description: 'We optimize websites to rank higher on search engine results.',
        icon: <BiWifi size='32px'/>, // Replace with the actual icon name or icon URL
        background: 'linear-gradient(135deg, #4cd964, #13691e)', // Replace with the desired gradient colors
        contrast: 'white'
    },
    {
        name: 'Fast Loading',
        description: 'Optimized performance for quick loading and smooth browsing.',
        icon: <BsSpeedometer size='32px'/>, // Replace with the actual icon name or icon URL
        background: 'linear-gradient(135deg, #ff3b30, #7b1009)', // Replace with the desired gradient colors
        contrast: 'white'
    },
    // Add more features as needed
];

function Features () {
    useGsap('#features-root', ()=> {
        animateOnScroll('.title', '.gradient-box')
    })
    return(
        <Container id='features-root' maxWidth='lg'>
            <GradientText className='title' primary='Discover' secondary='Features.'/>
            <Spacer size='sm'/>
            <Grid container spacing={1.5}>
                {
                    features.map((_, index)=> <Grid item xs={12} md={3}>
                        <GradientBox size='small' background={_.background}>
                            <Box width='70%'>
                                {_.icon}
                                <Heading paragraph color='black'>{_.name}</Heading>
                                <Description opacity={0.2} color={_.contrast}>{_.description}</Description>
                            </Box>
                        </GradientBox>
                    </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default Features
