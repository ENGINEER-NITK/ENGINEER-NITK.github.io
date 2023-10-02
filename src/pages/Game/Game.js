import React, { useEffect, useRef } from 'react';
import Appbar from '../../components/Appbar';
import { Box, Container } from '@mui/material';
import Footer from '../../components/common/footer';
import Sketch from 'react-p5';
import GradientText from '../../components/common/gradienttext';
import Spacer from '../../components/Spacer';
import { Description } from '../../components/common/typography';
import Section from '../../components/common/section';
import Patternbg from '../../components/common/patternbg';

const Game = () => {
  return (
    <Box  sx={{ backgroundColor: 'black' }}>
    <Patternbg>
      <Appbar />
      <Container maxWidth="lg" color="white" sx={{ pt: 15 }}>
        <GradientText primary='Game' secondary='Is On!!' />
        <Spacer size='sm'/>
        <P5Game />
        <Spacer size='sm'/>
        <Description>
          *Scoreboard with goodies/gift for top 3 winners comming soon...
        </Description>
        <Spacer size='xs'/>

      </Container>
    </Patternbg>
      <Footer/>
    </Box>
  );
};

function P5Game() {
  // Variables
  let background_color, board_color, ball_color, font_color, board_angle, board_rotation_speed, board_width, board_height, board_center_x, board_center_y, ball_pos, ball_speed, ball_radius, ticks, multiplier, score, score_per_tick, multiplier_increase_per_tick, multiplier_increase_stack, multiplier_increase_stack_limit, top_score = 0, game_over = false;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(Math.max(p5.windowWidth/2, 350), p5.windowHeight/2).parent(canvasParentRef);
    background_color = p5.color(255);
    board_color = p5.color(95, 95, 155);
    ball_color = p5.color(0);
    font_color = p5.color(0);
    board_center_x = p5.width * 0.5;
    board_center_y = p5.height * 0.5 + 128;
    board_width = 250;
    board_height = 20;
    board_rotation_speed = p5.PI / 254;
    ball_radius = 15;
    score_per_tick = 1 / 30;
    multiplier_increase_stack_limit = 0.1;
    multiplier_increase_per_tick = 0.01 / 25;
    game_setup(p5);
  };

  const game_setup = (p5) => {
    board_angle = p5.random(p5.PI / 128, p5.PI / 64);
    if (p5.random(0, 1) < 0.5) {
      board_angle = -board_angle;
    }
    ball_pos = 0.5;
    ball_speed = 0;
    multiplier = 1;
    multiplier_increase_stack = 0;
    score = 0;
    ticks = 0;
    game_over = false;
  }

  const tick = (p5) => {
    if (p5.mouseIsPressed && (p5.mouseX < p5.width/2) || p5.keyIsDown(p5.LEFT_ARROW)){
      board_angle -= board_rotation_speed;
    } else if (p5.mouseIsPressed && (p5.mouseX >= p5.width/2) || p5.keyIsDown(p5.RIGHT_ARROW)) {
      board_angle += board_rotation_speed;
    }

    ball_speed += p5.map(board_angle, -p5.PI/2, p5.PI/2, -0.001 * multiplier, 0.001 * multiplier);
    ball_pos += ball_speed;
    if ((ball_pos <= 0) || (ball_pos >= 1)) {
      game_over = true;
    }

    var board_bias = (ball_pos - 0.5) * p5.PI / 1023;
    board_angle += board_bias;
    multiplier_increase_stack += multiplier_increase_per_tick;

    if (multiplier_increase_stack >= multiplier_increase_stack_limit) {
      multiplier += multiplier_increase_stack;
      multiplier_increase_stack -= multiplier_increase_stack_limit;
    }

    score += score_per_tick * multiplier;
    ticks += 1;
    top_score = Math.max(score, top_score);
  }

  const draw = p5 => {
    if (!game_over) {
      tick(p5);
    }
    p5.background(background_color);
    p5.colorMode(p5.HSB);
    let board_color2 = p5.color(ticks % 360, 39, 61);
    p5.colorMode(p5.RGB);
    p5.fill(board_color2);
    p5.noStroke();
    p5.rectMode(p5.CENTER);
    p5.push();
    p5.translate(board_center_x, board_center_y);
    p5.rotate(board_angle);
    p5.rect(0, 0, board_width, board_height);
    p5.fill(ball_color);
    p5.translate(-board_width/2, -(board_height/2 + ball_radius/2));
    p5.ellipse(ball_pos * board_width, 0, ball_radius, ball_radius);
    p5.pop();
    p5.fill(font_color);
    p5.textFont("Courier New", 84);
    p5.textAlign(p5.CENTER);
    p5.text(Math.round(score).toString(), p5.width/2, p5.height/2);
    p5.textFont("Courier New", 24);
    p5.text("Multiplier: " + (Math.round(10 * multiplier)/10).toString() + "x", p5.width/2, p5.height/2 + 48);
    p5.text("Top score: " + Math.round(top_score).toString(), p5.width/2, p5.height/2 + 72);
  };

  const mousePressed = (p5) => {
    if (game_over) {
      game_setup(p5);
    }
  }

  return <Box>
    <Sketch style={{display: 'grid', placeItems: 'center'}} setup={setup} draw={draw} mousePressed={mousePressed} />
  </Box>;
}
export default Game;
