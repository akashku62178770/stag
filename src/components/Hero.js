import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import myteam from "../images/myteam.jpg";
import useStyles from "../styles/styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Let's scale your business
          </Typography>
          {/* <Typography variant="h6" className={classes.subtitle}>
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography> */}
          <Typography variant="h6" className={classes.subtitle}>
            We are a group of dedicated volunteers working on a game project in
            its initial stages, and we have already recruited over ten
            experienced individuals. Although this is not a startup, it is a
            community of professionals who have come together to offer support
            and assistance to each other, while striving for self-improvement.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
