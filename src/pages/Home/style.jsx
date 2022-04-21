import styled from "styled-components";

export const ContainerCards = styled.div`
  width: min(95%, 1280px);
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const MainCard = styled.div`
  background: #33adf6;
  width: 70%;
  margin: 0 auto 32px auto;
  padding: 32px;
  color: #4b4949;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  animation: opacityCards 0.5s forwards;

  h1 {
    text-align: center;
    padding-bottom: 1rem;
  }

  .temp {
    font-size: 4.4rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .temp sup {
    font-size: 2rem;
    font-weight: 600;
  }

  .date-time {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-bottom: 0.5rem;
  }

  .date-time p {
    font-weight: 500;
  }

  .description {
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .humidity-wind p,
  .humidity-wind span {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .wind,
  .humidity {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    justify-content: space-between;
    padding: 1rem 0;
    align-items: center;
  }

  .humidity span,
  .wind span {
    display: flex;
    align-items: center;
  }

  .humidity span::before,
  .wind span::before {
    content: "";
    width: 6px;
    height: 20px;
    border-radius: 2px;
    display: inline-flex;
    margin-right: 10px;
  }

  .wind span::before {
    background: #c5d262;
  }

  .humidity span::before {
    background: #004983;
  }

  @keyframes opacityCards {
    from {
      opacity: 0;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate(0, 0, 0);
    }
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const SecondaryCard = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    align-items: center;
  }

  ul li {
    background-color: #fff;
    width: 40%;
    padding: 24px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    animation: opacityCards 0.5s forwards;
  }

  @keyframes opacityCards {
    from {
      opacity: 0;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate(0, 0, 0);
    }
  }

  @media screen and (max-width: 767px) {
    ul {
      width: 100%;
      display: grid;
      place-items: center;
      grid-template-columns: repeat(100%, 1fr);
      justify-content: unset;
      align-items: unset;
    }

    ul li {
      width: 90%;
    }
  }
`;

export const CardWeather = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 20px;
  p {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  p::before {
    content: "";
    width: 6px;
    height: 20px;
    border-radius: 2px;
    display: inline-flex;
    margin-right: 10px;
    background: #e75959;
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .min-max {
    display: flex;
    gap: 10px;
  }
`;

export const WeekDayCondition = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p::before {
    content: "";
    width: 6px;
    height: 20px;
    border-radius: 2px;
    display: inline-flex;
    margin-right: 10px;
    background: #33adf6;
  }
`;
