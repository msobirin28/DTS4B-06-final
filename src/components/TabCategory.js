import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import thenewsapi from "../apis/thenewsapi";
import LatestNews from "../components/LatestNews";

export default function LabTabs() {
  const categories = ["general", "science", "sports", "business", "health", "entertainment", "tech", "politics", "food", "travel"];
  const [value, setValue] = useState("general");
  const [news, setNews] = useState([]);

  const navigate = useNavigate();
  const fetchNews = async (value) => {
    try {
      const fetchedNews = await thenewsapi.get("news/all", { params: { categories: value } });
      setNews(fetchedNews.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(value);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchNews(newValue);
  };
  const handleClick = (uuid) => {
    navigate("/detailnews/" + uuid);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="scrollable auto tabs example" variant="scrollable" scrollButtons="auto">
            {categories.map((text, index) => (
              <Tab label={text} value={text} />
            ))}
          </TabList>
        </Box>
        {categories.map((text, index) => (
          <TabPanel value={text}>
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
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
