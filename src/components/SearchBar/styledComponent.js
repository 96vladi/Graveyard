import styled from "styled-components/native";
import { Colors } from "../../library/constants/colors";

export const SearchContainer = styled.View`
  height: 10%;
  width: ${({w}) => w ?? '100%'};
`;
export const IconContainer = styled.View`
  width: 10%;
  position: absolute;
  align-items: center;
  left: 310px;
  top: 8px;
`;
