import { Box, Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  border-radius: 0.8rem;
  width: 80%;
  min-height: 80vh;
  padding: 2rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SeatRow = styled(Box)`
  padding: 0.2rem;
  display: flex;
  flex-direction: row;
`;
