import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Gameboxd from "../assets/images/Gameboxd.png";
import Historwe from "../assets/images/Historwe.png";
import CitySounds from "../assets/images/CitySounds.png";
import weatherdashboard from "../assets/images/weatherdashboard.png";

const cardStyle = {
  maxWidth: 345,
  margin: "2rem",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: "5em",
  paddingBottom: "3em",
  backgroundColor: "#5B5B6C",
};

export default function MediaCard() {
  return (
    <>
      <div style={containerStyle}>
        {/* First project */}
        <Card sx={cardStyle}>
          <CardMedia sx={{ height: 500 }} image={Gameboxd} title="Gameboxed" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GameBoxed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Site for video game lovers who wanna write reviews about games
              they have played.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href="https://gameboxed.herokuapp.com/"
              target="_blank">
              Visit Site
            </Button>
            <Button
              size="small"
              href="https://github.com/Smulchman/gameboxd"
              target="_blank">
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        {/* Second project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 500 }}
            image={CitySounds}
            title="City Sounds"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              City Sounds
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For music lovers that wanna find top songs in any country.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href="https://jandreassi.github.io/city-sounds/"
              target="_blank">
              Visit Site
            </Button>
            <Button
              size="small"
              href="https://github.com/jAndreassi/city-sounds"
              target="_blank">
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        {/* third project */}
        <Card sx={cardStyle}>
          <CardMedia sx={{ height: 500 }} image={Historwe} title="HistorWe" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              HistorWe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For history lovers who wanna know different historical events that
              happened on the current day.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href="https://calm-castle-61617.herokuapp.com/"
              target="_blank">
              Visit Site
            </Button>
            <Button
              size="small"
              href="https://github.com/Smulchman/historical-media"
              target="_blank">
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
        {/* Fourth project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 500 }}
            image={weatherdashboard}
            title="Weather Dashborad"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Dashborad
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For anyone who needs the current of future weather forecast.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href="https://jandreassi.github.io/weather-dashboard/"
              target="_blank">
              Visit Site
            </Button>
            <Button
              size="small"
              href="https://github.com/jAndreassi/weather-dashboard"
              target="_blank">
              GitHub Repo
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
