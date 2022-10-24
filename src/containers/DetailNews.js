import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";

const HomeNews = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedMovies = await thenewsapi.get("news/uuid/" + params.uuid);
        setDetail(fetchedMovies.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "left" }}>
        Hot Topics
      </Typography>
      <Box>
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={`${detail.image_url}`}
              alt={`${detail.title}`}
              sx={{
                height: "100%",
                backgroundSize: "cover",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {detail.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeNews;
