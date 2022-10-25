import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await thenewsapi.get("news/all");
        setNews(fetchedNews.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await thenewsapi.get("news/top", { params: { limit: 1 } });
        setTopics(fetchedTopics.data.data);
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
        <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
          Hot Topics
        </Typography>
        {topics.map((topics) => (
          <HotTopics topics={topics} handleClick={handleClick} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: 5,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Latest News
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {news.map((news) => (
            <LatestNews key={news.title} news={news} handleClick={handleClick}></LatestNews>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeNews;
