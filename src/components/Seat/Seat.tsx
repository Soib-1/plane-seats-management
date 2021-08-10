import * as Types from "./Seat.types";
import * as Styles from "./Seat.styles";

const Seat = ({ number }: Types.Props) => {
  return (
    <>
      <Styles.Seat>
        <Styles.SeatNumber>{number}</Styles.SeatNumber>
      </Styles.Seat>
    </>
  );
};

export default Seat;
