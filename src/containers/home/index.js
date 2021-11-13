import React from 'react';
import { FlatList } from 'react-native';
import { FlexContainer, Layout } from '../../components/general'
import { ListMausoleums } from '../../components/ListMausoleums';
import { NavigationBar } from '../../components/NavigationBar';
import { SearchBar } from '../../components/SearchBar';
import { Mausoleums } from '../../library/data';
 
export const Home = () => {
  return(
    <Layout>
      <SearchBar></SearchBar>
      <FlexContainer
        h="80%"
        dir="row"
        aln="flex-start">
        <FlatList 
          data = { Mausoleums }
          renderItem = {({item}) =>  <ListMausoleums item={item}/>}
        />
      </FlexContainer>
      <NavigationBar></NavigationBar>
    </Layout>
  );
};
