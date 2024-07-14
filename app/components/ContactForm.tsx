"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../api/submit";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  ThemeProvider,
  Theme,
  useTheme,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import styles from "./ContactForm.module.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#9a8a78",
            "--TextField-brandBorderHoverColor": "#b09c88",
            "--TextField-brandBorderFocusedColor": "#b09c88",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });
const ContactForm: FC = () => {
  const outerTheme = useTheme();
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <Container className={styles.container} maxWidth="sm">
      <Box
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Typography className={styles.formTitle}>Napište nám</Typography>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            className={styles.formInput}
            label="Name"
            variant="outlined"
            fullWidth
            required
            {...register("name", { required: true })}
          />
          <TextField
            className={styles.formInput}
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            {...register("email", { required: true })}
          />
          <TextField
            className={styles.formInput}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            {...register("message", { required: true })}
          />
          <Button
            className={styles.formButton}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </ThemeProvider>
      </Box>
    </Container>
  );
};
export default ContactForm;
