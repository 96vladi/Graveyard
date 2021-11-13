import styled from "styled-components/native";
import { Colors } from "../../library/constants/colors";
import { FlexContainer } from "../general";

export const IconContainerNav = styled(FlexContainer)`
  background-color: ${Colors.NavBar};
  flex-direction: row;
  height: 80%;
  width: 90%;
  border-radius: 20px;
  opacity: 0.8;
`;
