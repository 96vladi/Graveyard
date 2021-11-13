import React from 'react';
import { TextButton, FlexContainer } from '../general';
import { ButtonContainer } from './styledComponent';
import { Colors } from '../../library/constants/colors';

export const CustomButton = () => {
  return(
    <FlexContainer 
      bgc={Colors.lilac} 
      h="10%" 
      jc="center" 
      dir="column">
      <ButtonContainer 
        bgc={Colors.bottonGray} 
        h="60%" 
        w="30%" 
        mh="35%" op="0.8"> 
        <TextButton>
          Enter
        </TextButton>
      </ButtonContainer>
      </FlexContainer>
  );
};
