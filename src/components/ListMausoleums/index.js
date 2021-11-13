import React from 'react';
import { Image } from 'react-native';
import { CustomText } from '../general';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ContainerImgDetall, DetallContainer, ImageContainer } from './styledComponent';
import { Colors } from '../../library/constants/colors';
export const ListMausoleums = ({item}) => {
  return(
    <ContainerImgDetall>
      <ImageContainer>
        <Image 
          source={require('../../library/images/m1.jpg')}
          style={{
            flex: 1, 
            width: null, 
            height: null,
            borderRadius: 20}}/>
      </ImageContainer>
      <DetallContainer>
        <CustomText clr={Colors.white} fz="15px">
          {item.nombre}
          {item.visitas}
        </CustomText>
        <CustomText clr={Colors.white} fz="15px">
          {item.visitas}
        </CustomText>
        <Icon 
          name="street-view" size={30} color={Colors.person}
        />
      </DetallContainer>
    </ContainerImgDetall>
  );
};
