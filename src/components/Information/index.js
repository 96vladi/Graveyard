import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../library/constants/colors';
import { CustomText } from '../general';
import { ContainerDescription, ContainerIconInfo, InformationContainer } from './styledComponent';


export const Information = ({ iconDetails }) => {
  return (
    <>
      {
        iconDetails.map((data) => (
          <InformationContainer>
            <ContainerIconInfo>
              <Icon 
                name={data.iconAssigned} size={25} color={Colors.person}
            />
            </ContainerIconInfo>
            <ContainerDescription>
              <CustomText>{data.title}</CustomText>
              <CustomText>{data.description}</CustomText>
            </ContainerDescription>
          </InformationContainer>
        ))
      }
    </>
    
  )
}
