import {Container, Typography} from "@mui/material";
import GradientText from "../common/gradienttext";
import Spacer from "../Spacer";
import Carousel from "../common/carousel";
import GradientBox from "../common/gradientbox";
import {Description, Heading} from "../common/typography";
import {FiStar} from "react-icons/fi";
import Box from "@mui/material/Box";
import {BsFillStarFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";

const testimonials = [
    {
        name: 'Rahul Sharma',
        description: 'Great service and professional team. They delivered my project on time and exceeded my expectations.',
        rating: 5,
    },
    {
        name: 'Priya Patel',
        description: 'I am extremely satisfied with their work. They understood my requirements and provided a user-friendly website.',
        rating: 4,
    },
    {
        name: 'Amit Kumar',
        description: 'Highly recommended! The team is very responsive and guided me through the entire development process.',
        rating: 5,
    },
    {
        name: 'Sneha Gupta',
        description: 'The website design is excellent and visually appealing. They are dedicated to delivering quality work.',
        rating: 4,
    },
    {
        name: 'Sanjay Singh',
        description: 'I am impressed with their attention to detail and prompt communication. They made the whole process smooth.',
        rating: 5,
    },
    {
        name: 'Anjali Sharma',
        description: 'The team is creative and talented. They transformed my vision into reality with their expertise.',
        rating: 4,
    },
    {
        name: 'Vikas Patel',
        description: 'I am happy with the results. They provided regular updates and handled my project professionally.',
        rating: 5,
    },
    {
        name: 'Kavita Verma',
        description: 'Excellent work and excellent support. They addressed all my queries and made sure I was satisfied.',
        rating: 4,
    },
    {
        name: 'Rajesh Tiwari',
        description: 'Their design skills are commendable. The website they built for us is user-friendly and functional.',
        rating: 5,
    },
    {
        name: 'Neha Singh',
        description: 'I had a great experience working with them. They are reliable, talented, and deliver high-quality work.',
        rating: 4,
    },
];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random gradient based on the name
const generateRandomGradient = (name) => {
    // Convert name to a unique number
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    const hue = sum % 360;

    // Generate random saturation and lightness values
    const saturation = getRandomNumber(40, 60);
    const lightness = getRandomNumber(30, 70);

    // Generate gradient colors
    const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const color2 = `hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%)`;

    return {
        background: `linear-gradient(to bottom right, ${color1}, ${color2})`,
        backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
    };
};


const QuoteWithDescription = ({children}) => {
    return (
        <Box position="relative">
            {/* Quote */}
            <Box
                position="absolute"
                top={0}
                right={0}
                fontSize="100px"
                lineHeight="0.8"
                color="rgba(0,0,0,0.1)"
                zIndex={1}
            >
                &rdquo;
            </Box>

            {/* Description */}
            <Box mt={4}>
                <Typography variant="body2" fontFamily="typography.fontFamily">
                    {children}
                </Typography>
            </Box>
        </Box>
    );
};


const Testimonial = ({name, description, rating}) => {
    return (
        <GradientBox height='100%' size='small' background='linear-gradient(135deg, #f7f7f7, #cfcfcf)'>
            <Box>
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="transparent"
                    fontFamily="typography.fontFamily"
                    letterSpacing="-1px"
                    fontSize="32px"
                    lineHeight="1.2"
                    sx={generateRandomGradient(name)} gutterBottom>{name}</Typography>
                {[...Array(rating)].map((_, index) => (
                    <AiFillStar key={index} />
                ))}
                <Box>
                    <QuoteWithDescription>{description}</QuoteWithDescription>
                </Box>
            </Box>
        </GradientBox>
    )
}

const Testimonials = () => {
    return (
        <Container maxWidth='lg'>
            <Spacer size='sm'/>
            <Carousel>
                {testimonials.map((_)=><Testimonial name={_.name} description={_.description} rating={_.rating}/>)}
            </Carousel>
        </Container>
    )
}



export default Testimonials
