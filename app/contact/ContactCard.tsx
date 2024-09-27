import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./ContactCard.module.css";
export default function ContactCard() {
  return (
    <Grid container spacing={2} sx={{}}>
      <Grid item xs={6} spacing={2}>
        <Card
          sx={{
            background: "#f6f6f6",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent sx={{ color: "#333333", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Telefon
            </Typography>
            <Typography variant="body1">+420 602 320 962</Typography>
            <Typography variant="body1">+420 602 293 982</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card
          sx={{
            background: "#f6f6f6",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent sx={{ color: "#333333", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Email
            </Typography>
            <Typography variant="body1">
              <a href="mailto:kracmer@mikopa.cz">kracmer@mikopa.cz</a>
            </Typography>
            <Typography variant="body1">+420 602 293 982</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card
          sx={{
            background: "#f6f6f6",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent sx={{ color: "#333333", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              O firmě
            </Typography>
            <Typography variant="body1">DIČ: 47117478</Typography>
            <Typography variant="body1">IČO: CZ47117478</Typography>
            <Typography variant="body1">Spisová značka 12484 C,</Typography>
            <Typography variant="body1">Městský soud v Praze</Typography>
            <Typography variant="body1">Založeno: 14.8.1992</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card
          sx={{
            background: "#f6f6f6",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent sx={{ color: "#333333", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Otevírací doba
            </Typography>
            <Typography variant="body1">
              Pondělí až středa 6:30 - 15:30
            </Typography>
            <Typography variant="body1">Čtvrtek 6:30 - 17:00</Typography>
            <Typography variant="body1">Pátek 6:30 - 11:00</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
