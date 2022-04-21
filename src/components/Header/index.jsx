import { Fragment, useContext } from "react";
import Logo from "../../assets/images/Logo.svg";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconNight from "../../assets/images/icons/icon-night-top.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  Header,
  ContainerHeader,
  Form,
  Prevision,
  ContainerPrevision,
} from "./style";

const index = ({ data }) => {
  const { setInput } = useContext(GlobalContext);

  function handleClick({ target }) {
    const valueInput = document.querySelector(".form input").value;
    setInput(valueInput);
  }

  return (
    <Fragment>
      <Header>
        <ContainerHeader>
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Image logo climaEtempo" />
            </a>
          </div>

          <Form className="form" onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Busque por uma cidade..."
            />
            <button onClick={handleClick}>
              <img src={iconSearch} alt="Icon it lupa and zoom" />
            </button>
          </Form>
        </ContainerHeader>
      </Header>

      <Prevision>
        <ContainerPrevision>
          <p>Clima e Previsão do tempo</p>
          <span>
            <img src={iconNight} alt="icon night moon" />
            {data ? (
              <p>
                {data && data.city} {data && data.temp + " °C"}
              </p>
            ) : (
              <p>Carregando...</p>
            )}
          </span>
        </ContainerPrevision>
      </Prevision>
    </Fragment>
  );
};

export default index;
