import React from 'react';
import { Box } from 'grommet';
import { ScreenshotCard } from '../index.js';

const ScreenShotRow = ({ src, label, ...rest }) => (
  <Box direction="row-responsive" justify="center" gap="small" {...rest}>
    {src.map((val, i) => (
      <ScreenshotCard src={val} label={label[i]} a11yTitle={label[i]} />
    ))}
  </Box>
);
export { ScreenShotRow };
