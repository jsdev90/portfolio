import { useRef, useState, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#111111",
    height: "calc(100vh - 80px)",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
  },
  wrapper: {
    maxWidth: 640,
    margin: "0 auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  },
  heading: {
    color: "#e0e0e0",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    fontFamily: "'Courgette', cursive !important",
  },
  subHeading: {
    color: "#e0e0e0",
    paddingBottom: "1rem",
    textAlign: "center",
    fontFamily: "'Courgette', cursive",
  },
  form: {
    marginTop: theme.spacing(2),
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#e0e0e0",
    borderColor: "#e0e0e0",
    padding: theme.spacing(1),
    "&:disabled": {
      borderColor: "#e0e0e0",
      color: "#e0e0e0",
      background: "darkgray",
    },
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    marginBottom: "1rem",
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
        borderWidth: 2,
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#e0e0e0",
      },
    },
  },
})(TextField);

const Contact = () => {
  const form = useRef();
  const classes = useStyles();
  const firstRender = useRef(true);
  const [field, setField] = useState({
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e, field) => {
    setField((current) => ({
      ...current,
      [field]: e.target.value,
    }));
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [field.email, field.message, field.name]);

  const isEnabled =
    field.message && field.name && field.email && validateEmail(field.email);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isEnabled) {
      sendForm(
        "service_8buo5sp",
        "template_wp5f308",
        form.current,
        "user_O5HFMB4vdt5pPNPhH3aqS"
      ).then(
        (result) => {
          toast.success(
            "Thank you for getting in touch! I appreciate you contacting us! I will get back in touch with you soon! Have a great day!",
            {
              progress: undefined,
            }
          );
        },
        (error) => {
          toast.error(
            "Sorry, could you please reach out to johann.dev94@gmail.com?",
            {
              progress: undefined,
            }
          );
        }
      );
    } else {
      firstRender.current = false;
    }
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Box component="div" className={classes.wrapper}>
        <Typography variant="h5" className={classes.heading}>
          Contact Me
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeading}>
          Every amazing partnership begins with a dialogue, and I believe the
          starting point for something extraordinary is a click away. Please
          fill out the form below and I'll be in touch to continue the
          conversation, and see where that takes me - to new products, or new
          visions, or new ways of using technology for shared benefit.
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          Let's make something great!
        </Typography>
        <Box
          component="form"
          className={classes.form}
          onSubmit={sendEmail}
          ref={form}
        >
          <InputField
            fullWidth={true}
            label="Please tell me how I can help you"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="message"
            error={field.message === "" && !firstRender.current}
            onChange={(e) => handleChange(e, "message")}
            required
            helperText={
              field.message === "" && !firstRender.current
                ? "This field is required."
                : ""
            }
            minRows={3}
          />
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="user_name"
            error={field.name === "" && !firstRender.current}
            onChange={(e) => handleChange(e, "name")}
            required
            helperText={
              field.name === "" && !firstRender.current
                ? "This field is required."
                : ""
            }
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="user_email"
            error={
              (field.email === "" || !validateEmail(field.email)) &&
              !firstRender.current
            }
            onChange={(e) => handleChange(e, "email")}
            required
            helperText={
              (field.email === "" || !validateEmail(field.email)) &&
              !firstRender.current
                ? "Please enter a correct email."
                : ""
            }
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            type="submit"
            disabled={!isEnabled}
          >
            Contact Me
          </Button>
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Box>
    </Box>
  );
};

export default Contact;
