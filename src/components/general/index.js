import styled from "styled-components/native";
import { Colors } from "../../library/constants/colors";

export const Layout = styled.View`
  background-color: ${Colors.lilac};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
export const FlexContainer = styled.View`
  background-color: ${({bgc}) => bgc ?? 'transparent'}
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
  display: flex;
  align-items: ${({aln}) => aln ?? 'center'};
  justify-content: ${({jc}) => jc ?? 'space-around'};
  flex-direction: ${({dir}) => dir ?? 'column'}
`;

// export const ButtonContainer = styled.TouchableOpacity`
//   height: ${({h}) => h ?? '100%'};
//   width: ${({w}) => w ?? '100%'};
//   margin-horizontal: ${({mh}) => mh ?? '0%'};
//   margin-vertical: ${({mv}) => mv ?? '0%'};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({bgc}) => bgc ?? 'white'};
//   border-radius: 10px;
//   opacity: ${({op}) => op ?? '1'};
// `;

export const TextButton = styled.Text`
  color: ${({clr}) => clr ?? 'white'};
  font-size: ${({fs}) => fs ?? '20px'};
  font-weight: ${({fw}) => fw ?? 'bold'};
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? 'white'};
  font-size: ${({fz}) => fz ?? '20px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
  margin-bottom: ${({mb}) => mb ?? '0px'};
  margin-top: ${({mt}) => mt ?? '0px'};
`;

export const CustomInputStyle = styled.TextInput`
  background-color: ${({bgc}) => bgc ?? 'white'};
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  padding: ${({pd}) => pd ?? '10px'};
  border: ${({border}) => border ?? '0px'};
  opacity: ${({op}) => op ?? '1'};
  border-radius: ${({br}) => br ?? '0px'}
  margin-horizontal: ${({mh}) => mh ?? '0%'};
  margin-vertical: ${({mv}) => mv ?? '0%'};
  color: white;
  fontWeight: bold;
`;
