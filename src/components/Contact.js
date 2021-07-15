import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Flip from 'react-reveal/Flip';
import Send from "@material-ui/icons/Send";
import emailjs, { init } from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  
  useEffect(() => {
    init("user_O5HFMB4vdt5pPNPhH3aqS");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_7w5xua4', 'template_5djxh6u', e.target, 'user_O5HFMB4vdt5pPNPhH3aqS')
    .then((result) => {
        if (result.status === 200) {
          setOpen(true)
          // const frm = document.getElementsByTagName('form')[0];
          // frm.submit(); // Submit the form
          // frm.reset();  // Reset all form data
          // return false; // Prevent page refresh
        }
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <Box component="div" className={classes.contactContainer}>
      <Flip left>
        <Grid container justify="center">
          <Box component="form" className={classes.form} onSubmit={sendEmail}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ className: classes.input }}
              name="user_name"
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
              type="email"
              name="user_email"
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
              name="message"
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
              type="submit"
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Flip>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={6000}
        key={"top-right"}
      >
        <Alert severity="success">Thanks for contacting me!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
