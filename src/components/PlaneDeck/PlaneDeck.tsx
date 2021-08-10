import * as Types from "./PlaneDeck.types";
import * as Styles from "./PlaneDeck.styles";
import Seat from "../Seat/Seat";
import { Box } from "@material-ui/core";

interface ISeatRow {
  seats: string[];
}

const SeatRow = ({ seats }: ISeatRow) => {
  seats.map((seat) => {
    console.log(seat);
  });
  return (
    <Styles.SeatRow>
      {seats.map((seat) => (
        <Seat number={seat} />
      ))}
    </Styles.SeatRow>
  );
};

const PlaneDeck = ({}: Types.Props) => {
  return (
    <>
      <Styles.StyledContainer>
        {Array.from({ length: 12 }, () =>
          Array.from(
            { length: 6 },
            (_, index) => ["A", "B", "C", "D", "E", "F"][index]
          )
        ).map((seat) => (
          <SeatRow seats={seat} />
        ))}
      </Styles.StyledContainer>
    </>
  );
};

export default PlaneDeck;
