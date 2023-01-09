import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

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
    };
    getTrack();
  }, []);

  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/playlists/37i9dQZEVXbpkx8l8SHR7Y",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setTrackUri(response.data.uri);
    };
    getPlaylist();
  }, []);

  return (
    <Container>
      <SpotifyWebPlayer
        token={token}
        uris={trackUri}
        autoPlay="false"
        magnifySliderOnHover="true"
        name="Buzz-Music"
        showSaveIcon
        syncExternalDevice
        styles={{
          bgColor: "#1B2430",
          color: "#D6D5A8",
          trackNameColor: "#D6D5A8",
          trackArtistColor: "#D6D5A8",
          activeColor: "#CF0A0A",
          sliderColor: "#D6D5A8",
          sliderTrackColor: "#1B2430",
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1b2430;
  height: 100%;
`;
