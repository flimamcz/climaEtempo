import styled from "styled-components";

export const Modal = styled.div`
  width: min(80%, 1260px);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  gap: 44px;
  flex-wrap: wrap;

  p {
    max-width: 50%;
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 700px) {
      .modal {
        gap: 10px;
        flex-wrap: wrap;
      }

      .modal p {
        max-width: 70%;
      }
    }
  }
`;
