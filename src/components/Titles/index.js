import React from 'react';
import { FlexContainer, CustomText } from '../general';

export const Titles = ({title, size, height}) => {
  return(
    <FlexContainer h={height}>
      <CustomText fz={size}>{title}</CustomText>
    </FlexContainer>
  );
};
