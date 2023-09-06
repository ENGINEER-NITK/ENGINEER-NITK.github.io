import {Container, Typography} from "@mui/material";
import styled from "styled-components";

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #F57C00;
  position: absolute;
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2196F3;
  position: absolute;

`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: #4CAF50;
  position: absolute;

`;


const Intro = () => {
    return (
        <Container maxWidth='sm'>
            <Typography color='white' variant='body2'>
                ANAS
            </Typography>
            {[...Array(20).keys()].map(()=> <Square className='square shape'/>)}
            {[...Array(20).keys()].map(()=> <Triangle className='square shape'/>)}
            {[...Array(20).keys()].map(()=> <Circle className='square shape'/>)}

        </Container>
    )
}

export default Intro
