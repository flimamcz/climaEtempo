import styled from "styled-components";

// HEADER

export const Header = styled.header`
  width: 100vw;
  background: #0080cd;
  padding: 32px 0;
`;

// CONTAINER

export const ContainerHeader = styled.div`
  width: min(90%, 1220px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .logo {
    min-width: 150px;
  }
`;

// FORM

export const Form = styled.form`
  width: 550px;
  display: flex;
  box-shadow: 2px 4px 6px rgba(36, 27, 27, 0.15);

  /* Elementos incluso no Form */

  input {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    width: 100%;
    color: #f2f2f2;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  button {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    cursor: pointer;
    background: #fff;
  }

  input,
  button {
    background: rgba(0, 73, 131, 0.7);
    border: none;
    outline: none;
    padding: 12px;
  }
`;

export const Prevision = styled.div`
  background: #004983;
  padding: 12px;
  color: #f2f2f2;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const ContainerPrevision = styled.div`
  width: min(90%, 1220px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
