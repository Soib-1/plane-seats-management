import * as Types from "./Navbar.types";
import * as Styles from "./Navbar.styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Navbar = ({}: Types.Props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Styles.TextLogo>-ai®lines-</Styles.TextLogo>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
