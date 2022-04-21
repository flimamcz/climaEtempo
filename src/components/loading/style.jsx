import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  gap: 0.875rem;
  justify-content: center;
  min-height: 70vh;
  align-items: center;
  margin: 0;
`;

export const CircleElement = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #0080cd;
  animation: jump 0.6s ease-in alternate infinite;

  :nth-last-of-type(2) {
    animation-delay: 0.1s;
    background-color: #004983;
  }

  :nth-last-of-type(3) {
    animation-delay: 0.2s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`;
