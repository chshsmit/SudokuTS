/**
 * Congratulations.tsx
 * @author Christopher Smith
 * @description Congratulations dialog when the user completes the puzzle successfully
 * @created 2020-11-01T10:08:18.911Z-08:00
 * @last-modified 2020-11-01T11:10:10.335Z-08:00
 */

// ---------------------------------------------------------------

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeIcon from "@material-ui/icons/Home";
import ReplayIcon from "@material-ui/icons/Replay";

import trophy from "static/trophy.png";

// -----------------------------------------------------------

interface CongratulationsProps {
  gameIsOver: boolean;
}

const CongratulationsStyles = makeStyles({
  centeredText: {
    textAlign: "center",
  },
  trophyImage: {
    width: "75%",
  },
  dialogActions: {
    justifyContent: "space-around",
    marginTop: "2%",
  },
  dialogActionButton: {
    minWidth: "45%",
    maxWidth: "45%",
  },
});

const CongratulationsTransition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// -----------------------------------------------------------

const Congratulations = ({
  gameIsOver,
}: CongratulationsProps): React.ReactElement => {
  const classes = CongratulationsStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={gameIsOver}
      fullScreen={fullScreen}
      TransitionComponent={CongratulationsTransition}
    >
      <DialogTitle className={classes.centeredText}>
        Congratulations
      </DialogTitle>
      <DialogContent className={classes.centeredText}>
        <DialogContentText>You completed the puzzle!</DialogContentText>
        <img src={trophy} alt="trophy" className={classes.trophyImage} />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          className={classes.dialogActionButton}
          // variant="contained"
          color="secondary"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          className={classes.dialogActionButton}
          // variant="contained"
          color="primary"
          startIcon={<ReplayIcon />}
        >
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// -----------------------------------------------------------

export default Congratulations;
