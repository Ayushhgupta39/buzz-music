import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import CurrentTrack from "./CurrentTrack";
import Player from "./Player";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";

export default function Footer({ code }) {
  const [{ token, playerState }, dispatch] = useStateProvider();
  const [trackUri, setTrackUri] = useState([]);
  
  useEffect(() => {
    const getTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
    }
    getTrack();
  },[])
  
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  );
}

const Container = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
