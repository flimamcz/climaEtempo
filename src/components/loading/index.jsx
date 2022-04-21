import React from "react";
import { ContainerLoading, CircleElement } from "./style";

const Loading = () => {
  return (
    <ContainerLoading>
      <CircleElement></CircleElement>
      <CircleElement></CircleElement>
      <CircleElement></CircleElement>
    </ContainerLoading>
  );
};

export default Loading;
