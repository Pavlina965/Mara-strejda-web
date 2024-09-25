"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";
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
  FormControl,
  InputLabel,
  Input,
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
      MuiFormControl: {
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
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#9a8a78",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#b09c88",
            },
          },
        },
      },
    },
  });
const ContactForm: FC = () => {
  const outerTheme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  function onSubmit(FormData: FormData) {
    sendEmail(FormData);
  }
  return (
    <>
      <h1>Napište nám</h1>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 10,
        }}
        maxWidth="sm"
      >
        <Box
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <FormControl variant="outlined" fullWidth>
              <TextField
                className={styles.formInput}
                label="Jméno"
                variant="outlined"
                fullWidth
                required
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name", { required: "Prosím zadejte jméno" })}
              ></TextField>
              <TextField
                className={styles.formInput}
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                error={!!errors.email?.message}
                {...register("email", {
                  required: "Prosím zadejte vaší emailovou adresu",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Prosím, zadejte platný email",
                  },
                })}
              />
              <TextField
                className={styles.formInput}
                label="Zpráva"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                {...register("message", { required: true })}
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Poslat zprávu
            </Button>
          </ThemeProvider>
        </Box>
      </Container>
    </>
  );
};
export default ContactForm;
