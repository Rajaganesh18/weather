import './App.css';
import earthImg from '../src/images/earth.png'
import { useState } from 'react';

function App() {
  const [hover, setHover] = useState(false);
  // const [mumbaiWeather, setMumbaiWeather] = useState([]);
  const zoomEarth = () => {
    document.getElementById("zoomImg").className = "imgZoom";
  }

  const onHover = () => {
    setHover(true);
  }

  const downHover = () => {
    setHover(false);
  }
  // const fetchData = async () => {
  //   const mumbaiResponse = await fetch(
  //     "https://api.weatherapi.com/v1/current.json?key=&q=Mumbai"
  //   );
  //   if (mumbaiResponse) {
  //     return mumbaiResponse.json();
  //   }
  // };
  // useEffect(() => {
  //   fetchData()
  //     .then((res) => {
  //       setMumbaiWeather(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  //   console.log(mumbaiWeather);
  //   const mumbaiWeatherCondition = mumbaiWeather.weather;
  //   console.log(mumbaiWeatherCondition);
  //   let mumbaiHeadLine;
  //   if (mumbaiWeatherCondition.length > 0) {
  //     mumbaiWeatherCondition.map((mumbai) => {
  //       return (mumbaiHeadLine = mumbai.main);
  //     });
  //   }
  //   console.log(mumbaiHeadLine);
  return (
    <>
      <div className='main'>
        {/* header */}
        <header className='header'>
          <p>Home</p>
          <p>Cities</p>
          <p>News</p>
        </header>
        {/* weather-details */}
        <div className='row'>
          <div className='col-6'></div>
          <div className='col-6'>
            <div className='detailsCard'>
              <h2>Weather Details</h2>
              <div>
                <p>Cloudy</p>
                <p>10%</p>
              </div>
              <div>
                <p>Humidity</p>
                <p>62%</p>
              </div>
              <div>
                <p>Wind</p>
                <p>82km/h</p>
              </div>
            </div>
          </div>
        </div>
        {/* current-weather */}
        <div className='row'>
          <div className='col-6'>
            <div className='currentWeather'>
              <p>32<span className='degree'>°</span></p>
              <div className='weatherCity'>
                <h1>Mumbai</h1>
                <span>06:45 Thurdday 23/4/2023</span>
              </div>
            </div>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
      {/* cities */}
      <div className="cities-div">
        <div className="title-div">
          <h3>Cities</h3>
        </div>
        <div className="card-div">
          <div className="city-mumbai">
            <div className="mumbai-text">
              <h5>Cloudy</h5>
            </div>
            <div>
              <div className="mumbai-temperature-text">
                <div>
                  <h4>24°</h4>
                </div>
                <div className="city-name">
                  <h6>Mumbai</h6>
                </div>
                <div className="date">
                  <h6>23/03/2023</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="city-chennai">
            <div className="chennai-text">
              <h5>Sunny</h5>
            </div>
            <div className="chennai-temperature-text">
              <h4>32°</h4>
            </div>
            <div>
              <div className="city-name">
                <h6>Chennai</h6>
              </div>
              <div className="date">
                <h6>23/03/2023</h6>
              </div>
            </div>
          </div>
          <div className="city-banglore">
            <div className="banglore-text">
              <h5>Haze</h5>
            </div>
            <div className="banglore-temperature-text">
              <h4>26°</h4>
            </div>
            <div>
              <div className="city-name">
                <h6>Banglore</h6>
              </div>
              <div className="date">
                <h6>23/03/2023</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="search-div">
          <input
            className="search-box"
            placeholder="Search city"
            type="text"
          />
        </div>
      </div>
      {/* earth */}
      <div id="zoomImg">
        <img style={{ width: '100%' }} src={earthImg} onClick={zoomEarth} alt="" />
      </div>
      {/* news */}
      <h1 className='news-title'>News</h1>
      <div className='news'>
        <div className='card-1' onMouseOver={onHover} onMouseLeave={downHover}>
          <p>Thunder Strikes Delhi</p>
          {hover ? <div className='readMore'>
            <div></div>
            <button>Read More</button>
          </div> : ''}
        </div>
        <div className='card-2'>
          <p>Cloudstormm in manipur</p>
        </div>
        <div className='card-3'>
          <p>it's summer season in Mumbai</p>
        </div>
      </div>
      <div id="footer">
        <div className="footer-div">
          <div>
            <h4 className="footer-title">WEATHERAPP</h4>
          </div>
          <div className="list-div">
            <div>
              <ul>
                <li className="list-item-text">Home</li>
                <li className="list-item-text">Cities</li>
                <li className="list-item-text">News</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="list-item-text">Contact Us</li>
                <li className="list-item-text">FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
