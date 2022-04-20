import { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/Header/";
import { API_KEY } from "../../config/API_KEY";
import Loading from "../../components/loading/";
import { GlobalContext } from "../../contexts/GlobalContext";
import IconMax from "../../assets/images/icons/icon-max.png";
import IconMin from "../../assets/images/icons/icon-min.svg";

import "./style.css";

const Home = () => {
  const {input} = useContext(GlobalContext)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${input}`;

  useEffect(() => {
    async function fetchCity() {
      let response;
      let json;
      try {
        setLoading(true);
        response = await fetch(BASE_URL);
        json = await response.json();
      } catch (error) {
        json = null;
      } finally {
        const {
          city,
          description,
          temp,
          humidity,
          currently,
          forecast,
          date,
          time,
          wind_speedy,
        } = json.results;

        const dataCity = {
          date,
          time,
          wind_speedy,
          city,
          description,
          temp,
          humidity,
          currently,
          forecast,
        };
        setData(dataCity);
        setLoading(false);
      }
    }
    fetchCity();
  }, [BASE_URL]);

  if (loading)
    return (
      <Fragment>
        <Header />
        <Loading />
      </Fragment>
    );

  return (
    <Fragment>
      {data && (
        <div>
          <Header data={data} />
          <div className="container-cards">
            <div className="cards-sup">
              <div className="card-principal">
                <h1>Tempo agora em: {data.city}</h1>
                <p className="temp">
                  {data.temp}
                  <sup>°C</sup>
                </p>

                <div className="date-time">
                  <p>{data.date}</p>
                  <p>{data.time}</p>
                </div>

                <p className="description">{data.description}</p>

                <div className="humidity-wind">
                  <div className="wind">
                    <span>Vento</span>
                    <p>{data.wind_speedy}</p>
                  </div>

                  <div className="humidity">
                    <span>Umidade</span>
                    <p>{data.humidity}%</p>
                  </div>
                </div>
              </div>

              <div className="cards-secundario">
                <ul>
                  {data &&
                    data.forecast.map(
                      ({ description, max, min, weekday, date }) => (
                        <li key={date}>
                          <div className="card-temperatura">
                            <p>Temperatura</p>
                            <div className="min-max">
                              <span>
                                <img
                                  src={IconMin}
                                  alt="icon temperatura minima"
                                />
                                {min} <sup>°C</sup>
                              </span>

                              <span>
                                {" "}
                                <img
                                  src={IconMax}
                                  alt="icon temperatura maxima"
                                />
                                {max} <sup>°C</sup>
                              </span>
                            </div>
                          </div>

                          <div className="weekday-condition">
                            <div>
                              <p>
                                {date} - {weekday}
                              </p>
                            </div>
                            <span>{description}</span>
                          </div>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
