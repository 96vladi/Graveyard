import styled from 'styled-components/native'

export const Layout = styled.View`
  background-color: ${({bg}) => bg ?? 'transparent'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: ${({jc}) => jc ?? 'flex-start'};
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const FlexContainer = styled.View`
  align-items: ${({aln}) => aln?? 'center'};
  background-color: ${({bg}) => bg ?? 'transparent'};
  display: flex;
  flex-direction: ${({dir}) => dir ?? 'column'};
  height: ${({h}) => h ?? '100%'};
  justify-content: ${({jc}) => jc ?? 'space-around'};
  width: ${({w}) => w ?? '100%'}; 
  border: ${({br}) => br ?? '1px'};
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? 'black'};
  font-size: ${({fz}) => fz ?? '20px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
`;

export const CustomImput = styled.TextInput`
  background-color: ${({bg}) => bg ?? 'rgba(188, 188, 230, 0.2)'};
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  padding: ${({pd}) => pd ?? '0px'};
  border: ${({br}) => br ?? '1px'};
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: ${({bg}) => bg ?? 'transparent'};
  display:flex;
  justify-content: center;
  align-items: center;
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  padding: ${({pd}) => pd ?? '0px'};
  border-radius: 10px;
  opacity: 0.8;
`;
