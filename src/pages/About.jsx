import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import boysrainy from "../assets/images/boys.and.rainy.jpg";
import wedding from "../assets/images/wedding.pic.jpg";
import meandzay from "../assets/images/me.and.zay.jpg";
import meandlevs from "../assets/images/me.and.levs.jpg";

const cardStyle = {
  maxWidth: 250,
  maxHeight: 320,
  margin: "1rem",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: "5em",
};

export default function About() {
  return (
    <>
      <div style={containerStyle}>
        {/* First project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 330 }}
            image={boysrainy}
            title="My 2 boys and dog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My 2 boys and dog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Zayden, Levi and Rainy.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        {/* Second project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 330 }}
            image={wedding}
            title="Wedding day picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wedding day picture.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Me, my wife and my goddaughter.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        {/* </div>
      <div style={containerStyle}> */}
        {/* First project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 330 }}
            image={meandzay}
            title="Me and my oldest son."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Me and my oldest son.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Me and Zayden.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        {/* Second project */}
        <Card sx={cardStyle}>
          <CardMedia
            sx={{ height: 330 }}
            image={meandlevs}
            title="Me and my youngest son."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Me and my youngest son.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Me and Levi.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
      <div
        style={{
          margin: "2em",
          color: "#121214",
          paddingBottom: "5em",
        }}>
        <p style={{ fontSize: "1.4em" }}>
          Welcome to my portfolio webpage! I am a highly motivated individual
          who recently completed a coding bootcamp through Columbia Engineering
          to transition into a career as a full stack developer. During my
          bootcamp, I gained extensive knowledge in a variety of programming
          languages and technologies, including Github, HTML/CSS, JavaScript,
          API's, frameworks, wireframing, Node.js, Express.js, MySQL, MongoDB,
          NoSQL, React, and more. My willingness to learn and adapt quickly to
          new technologies will make me an invaluable asset to any tech team.
        </p>
        <p style={{ fontSize: "1.4em" }}>
          Before my career change, I successfully operated a small business for
          over a decade. My entrepreneurial spirit and experience in running a
          business have given me a unique perspective on problem-solving and
          decision-making, skills that will be highly valuable in my new career.
          I am not afraid of hard work and am willing to put in the effort to
          achieve my goals.
        </p>
        <p style={{ fontSize: "1.4em" }}>
          Family is the most important thing in my life, and they are the
          driving force behind my career change. I am highly motivated to
          provide a better life for them, and my dedication and hard work will
          help me achieve my goals. I am committed to developing innovative
          solutions and am excited to collaborate with others to create
          outstanding projects.
        </p>
        <p style={{ fontSize: "1.4em" }}>
          Thank you for visiting my portfolio webpage. I look forward to sharing
          my skills and experience with you and working together to create
          exceptional software solutions.
        </p>
      </div>
    </>
  );
}
