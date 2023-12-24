import { styled } from "styled-components";
import { Box } from "@mui/material";

export const LoaderContent = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(7, 63, 80, 0.1);

  .loader {
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.1s infinite ease;
    transform: translateZ(0);
  }
  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #000000,
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.5),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7),
        1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #000000,
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #000000,
        0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.5),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #000000,
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #000000,
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.5),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #000000,
        -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
        1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
        2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
        1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
        0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
        -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5),
        -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #000000;
    }
  }
`;
