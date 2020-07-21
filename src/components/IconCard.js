import React from 'react';
import { Card, CardBody } from 'grommet';

const IconCard = ({ margin, icon, size }) => (
  <Card
    margin={margin}
    height={size}
    width={size}
    elevation="xlarge"
    background="white"
    round="large"
  >
    <CardBody>{icon}</CardBody>
  </Card>
);

export default IconCard;