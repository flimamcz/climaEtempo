import { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";
import ModalErro from "../../components/ModalErro/";
import { API_KEY } from "../../config/API_KEY/index";
import Loading from "../../components/loading/";
import { GlobalContext } from "../../contexts/GlobalContext";
import IconMax from "../../assets/images/icons/icon-max.png";
import IconMin from "../../assets/images/icons/icon-min.svg";

import {
  ContainerCards,
  MainCard,
  SecondaryCard,
  CardWeather,
  WeekDayCondition,
} from "./style";


const Home = () => {
  const { input } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${input}`;

  useEffect(() => {
    async function fetchCity() {
      let response;
      let json;
      try {
        setError(null)
        setLoading(true);
        response = await fetch(BASE_URL);
        json = await response.json();
      } catch (error) {
        setError(true)
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
          img_id,
        } = json.results;

        const dataCity = {
          img_id,
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

  if(error) return (
    <ModalErro />
  )
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
        <div className="container">
          <Header data={data} />
          <ContainerCards>
            <div className="cards-sup">
              <MainCard>
                <h1>Tempo agora em: {data.city}</h1>
                <p className="temp">
                  <span>
                    {data.temp}
                    <sup>°C</sup>
                  </span>
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
              </MainCard>

              <SecondaryCard>
                <ul>
                  {data &&
                    data.forecast.map(
                      ({ description, max, min, weekday, date }) => (
                        <li key={date}>
                          <CardWeather>
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
                          </CardWeather>

                          <WeekDayCondition className="weekday-condition">
                            <div>
                              <p>
                                {date} - {weekday}
                              </p>
                            </div>
                            <span>{description}</span>
                          </WeekDayCondition>
                        </li>
                      )
                    )}
                </ul>
              </SecondaryCard>
            </div>
          </ContainerCards>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default Home;
