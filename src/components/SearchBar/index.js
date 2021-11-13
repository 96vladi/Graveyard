import React from 'react';
import { Colors } from '../../library/constants/colors';
import { CustomInputStyle } from '../general';
import { IconContainer, SearchContainer } from './styledComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchBar = () => {
  return(
    <SearchContainer>
      <CustomInputStyle 
        bgc={Colors.gray}
        h="70%"
        op ="0.3"
        br ="10px"
        placeholder="Search" placeholderTextColor="#FFF">
        </CustomInputStyle>
        <IconContainer>
          <Icon name="search" size={30} color={Colors.gray} />
        </IconContainer>
    </SearchContainer>
  );
};
