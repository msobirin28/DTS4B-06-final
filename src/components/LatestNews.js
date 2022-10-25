import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

const LatestNews = ({ news, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardActionArea onClick={() => handleClick(news.uuid)}>
        <CardMedia component="img" width="270" height="176" image={`${news.image_url}`} alt={`${news.title}`} />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h6" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LatestNews;
