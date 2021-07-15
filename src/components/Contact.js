import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Flip from 'react-reveal/Flip';
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#111111",
    height: "100vh",
    padding: theme.spacing(4)
  },
  heading: {
    color: "#e0e0e0",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#e0e0e0",
    borderColor: "#e0e0e0",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#e0e0e0",
    },
    "& label": {
      color: "#e0e0e0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#e0e0e0",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Flip left>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Flip>
    </Box>
  );
};

export default Contact;
