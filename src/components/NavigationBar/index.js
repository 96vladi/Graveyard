import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlexContainer } from '../general';
import { Colors } from '../../library/constants/colors';
import { IconContainerNav } from './styledComponent';

export const NavigationBar = () => {
  return(
    <FlexContainer
      h="10%"
      dir="row"
      aln="flex-end">
        <IconContainerNav>
          <Icon 
            name="home" size={30} color={Colors.person}
          />
          <Icon 
            name="book-reader" size={30} color={Colors.person}
          />
          <Icon 
            name="arrow-circle-down" size={40} color={Colors.person}
          />
          <Icon 
            name="grin-stars" size={30} color={Colors.person}
          />
          <Icon 
            name="camera-retro" size={30} color={Colors.person}
          />
        </IconContainerNav>
    </FlexContainer>
  );
};
