import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Seat = styled(Box)`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.5rem;
  background: #ddd;
  &:hover {
    background: #bbb;
  }
  transition: 0.2s linear;
  display: flex;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0.3rem 0.1rem;

  &:nth-of-type(3) {
    margin-right: 1.2rem;
  }
`;

export const SeatNumber = styled(Typography)`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
`;
