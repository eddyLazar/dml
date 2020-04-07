import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  colors: {
    [key: string]: string;
  };
  colorModeTransition: string;
};

export default styled as CreateStyled<Theme>;
