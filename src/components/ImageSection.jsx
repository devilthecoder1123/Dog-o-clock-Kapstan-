import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 500,
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 400,
  },
  btn: {
    backgroundColor: '#black',
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
});

const ImageSection = () => {
  const [dogPictureUrl, setDogPictureUrl] = useState("");
  const handleGetNewDogPicture = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogPictureUrl(data.message))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    handleGetNewDogPicture();
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box my={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={dogPictureUrl}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box>
        <Button className={classes.btn} size="large" color="success" variant="outlined" onClick={handleGetNewDogPicture}>
          Get New Image
        </Button>
      </Box>
    </Container>
  );
};

export default ImageSection;
