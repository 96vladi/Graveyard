import React from 'react';
import { CustomText, FlexContainer, Layout } from '../../components/general';
import { Information } from '../../components/Information';

import { Titles } from '../../components/Titles';
import { IconDetails } from '../../library/data';
import { DetailsContainer } from './styledComponent';



export const Details = () => {
  return (
    <Layout>
      <Titles 
        title={'Jose Alfredo Jimenez'}
        size={'25px'}
        height={'10%'}
        />
      <FlexContainer w='90%' h='30%' bgc='blue'>

      </FlexContainer>
      <FlexContainer w='90%' h='50%' aln='flex-end'>
        <DetailsContainer>
          <CustomText fw="bold">Description</CustomText>
          <CustomText aln="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CustomText>
          <Information iconDetails={IconDetails}></Information>
        </DetailsContainer>
      </FlexContainer>
    </Layout>
  )
}

