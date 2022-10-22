import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const [newsReady, setNewsReady] = useState(false);
  const [topics, setTopics] = useState([]);
  const [topicsReady, setTopicsReady] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedMovies = await thenewsapi.get("news/all");
        setNews(fetchedMovies.data.data);
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
        const fetchedTopics = await thenewsapi.get("news/top");
        setTopics(fetchedTopics.data.data);
        setTopicsReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <HotTopics /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {news.map((news) => (
          <LatestNews key={news.title} news={news}></LatestNews>
        ))}
      </Box>
    </Box>
  );
};

export default HomeNews;
