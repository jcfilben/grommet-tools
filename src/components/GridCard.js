import React from 'react';

import {
  Anchor,
  Box,
  Paragraph,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from 'grommet';

const GridCard = (props) => (
  <Card
    // width='medium'
    background="rgb(255,255,255)"
  >
    <Box margin={{ horizontal: 'medium', top: 'large' }}>{props.icon}</Box>
    <CardHeader>
      <Heading margin={{ horizontal: 'medium', vertical: 'xsmall' }}>
        {props.heading}
      </Heading>
    </CardHeader>
    <CardBody>
      <Paragraph
        fill
        alignSelf="start"
        margin={{ horizontal: 'medium', vertical: 'xsmall' }}
      >
        {props.text}
      </Paragraph>
    </CardBody>
    <Box
      round="medium"
      background={props.buttonColor}
      margin={{ horizontal: 'medium', vertical: 'small' }}
      alignSelf="start"
      width="auto"
    >
      <Anchor color="black" margin="small" color="rgb(0,0,0)">
        Open {props.heading}
      </Anchor>
    </Box>
    <CardFooter
      background={props.buttonColor}
      margin={{ top: 'large' }}
      alignContent="end"
      justify="end"
    >
      <Anchor
        color="black"
        alignSelf="center"
        href="#"
        margin="small"
        label="Learn More"
      />
    </CardFooter>
  </Card>
);
export default GridCard;
