import React from 'react';
import {ScrollView} from 'react-native';
import { FlexContainer, Layout } from '../../components/general';
import { Titles } from '../../components/Titles';

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
      <FlexContainer w='90%' h='50%' bgc='red' aln='flex-end'>
        <ScrollView style={{
          width: '100%',
        }}>
            <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
              <Titles 
              title={'Jose Alfredo Jimenez'}
              size={'25px'}
              height={'20%'}
              />
        </ScrollView>
      </FlexContainer>
    </Layout>
  )
}

