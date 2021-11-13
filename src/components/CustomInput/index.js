import React from 'react';
import { FlexContainer } from '../general';
import { Colors } from '../../library/constants/colors';
import { CustomInputStyle } from '../general';

export const CustomInput = () => {
  return(
    <FlexContainer 
      bgc={Colors.lilac} 
      h="20%" 
      jc="center" 
      dir="row">
        <CustomInputStyle
          bgc={Colors.gray} 
          h="40%" 
          w="90%" 
          br="10px"
          mv="15%"
          op="0.2"
          placeholder="Nombre" placeholderTextColor="#FFF">
        </CustomInputStyle>
    </FlexContainer>
  );
};
