import React from 'react';
import { colors } from '../../../library/constants/colors';
import { CustomButton, CustomImput, CustomText, FlexContainer, Layout } from '../../Generals';
 
const Ingress = () => {
  return (
    <Layout bg={colors.bacground} jc='space-between'>
      <FlexContainer h='15%' aln='flex-end' dir='row'>
        <CustomText clr='white' fz='60px' fw='bold'>
          My App
        </CustomText>
      </FlexContainer>
      <FlexContainer h='45%'>

      </FlexContainer>
      <FlexContainer h='20%'>
        <CustomImput placeholder='Name' pd='5px' h='50px' w='350px'/>
        <CustomButton bg={colors.button} h='50px' w='100px'>
          <CustomText>Enter</CustomText>
        </CustomButton>
      </FlexContainer>
    </Layout>
  )
}

export default Ingress
