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

  return (
    <>
      <Navbar />
      <Menubar />
      <div className="bg-gray-100 w-screen h-screen pt-5">
        <h1 className="ml-28 text-3xl">Your briefing</h1>
        <h1 className="ml-28 text-gray-500 text-sm mt-2">
          {moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </h1>
        <div className="flex bg-gray-100 pl-28 mt-5 w-screen">
          <div className="grid grid-cols-2 p-5 rounded-md bg-white w-8/12">
            <a href={news[1]?.url}>
              <div className="w-72">
                <h1 className="text-blue-600 text-2xl">Top Stories</h1>
                <hr className="mt-5 mb-3"/>
                <img src={news[1]?.urlToImage} className="w-72 h-44 rounded-md" />
                <h1 className="font-bold text-sm">{news[1]?.source.name.toUpperCase()}</h1>
                <h1 className="text-xl w-72 hover:underline">{news[1]?.title}</h1>
              </div>
            </a>
          </div>
        </div>
    </div>
    </>
  )
}