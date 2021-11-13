import styled from "styled-components/native";
import { Colors } from "../../library/constants/colors";

export const ButtonContainer = styled.TouchableOpacity`
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  margin-horizontal: ${({mh}) => mh ?? '0%'};
  margin-vertical: ${({mv}) => mv ?? '0%'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bgc}) => bgc ?? Colors.white};
  border-radius: 10px;
  opacity: ${({op}) => op ?? '1'};
`;
