/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import Menubar from "./components/Menubar"
import Navbar from "./components/Navbar"
import moment from 'moment';
import axios from 'axios';

export default function App() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=Bitcoin&sortBy=popularity&apiKey=d1ce30a31cf7499bb0538e08b7c4e60d');  
      setNews(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }
  console.log(news);

  useEffect(() => {
    getNews()
  }, [])

  const NewsCard = ({ title, description, image, source, url }) => (
    <a href={url}>
      <div className="flex space-x-4 p-4 border-b border-gray-300">
        <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
            <span>{source}</span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Menubar />
      <div className="pt-5 pb-28">
        <h1 className="ml-28 text-3xl">Your briefing</h1>
        <h1 className="ml-28 text-gray-500 text-sm mt-2 mb-5">
          {moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </h1>
        <div className="bg-white p-4 rounded-lg mx-28">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item?.title}
            description={item.description}
            image={item?.urlToImage}
            source={item?.source.name.toUpperCase()}
            url={item?.url}
          />
        ))}
      </div>
    </div>
    </div>
  )
}