import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";
import { useNavigate } from "react-router-dom";
import { Divider, Typography } from "@mui/material";

const Home = () => {
  const [news, setNews] = useState([]);
  const [newsReady, setNewsReady] = useState(false);
  const [topics, setTopics] = useState([]);
  const [topicsReady, setTopicsReady] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await thenewsapi.get("news/all");
        setNews(fetchedNews.data.data);
        setNewsReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await thenewsapi.get("news/top", { params: { limit: 5 } });
        setTopics(fetchedTopics.data.data);
        setTopicsReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);

  const handleClick = (uuid) => {
    navigate("/detailnews/" + uuid);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: 5,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Hot Topics
        </Typography>
        {topics.map((topics) => (
          <HotTopics topics={topics} handleClick={handleClick} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
