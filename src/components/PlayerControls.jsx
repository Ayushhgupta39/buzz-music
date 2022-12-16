import React from "react";
import styled from "styled-components";
import { CiShuffle, CiRepeat } from "react-icons/ci";
import { IoMdPlay, IoMdRepeat } from "react-icons/io";
import {
  ImNext,
  
  ImPause2,
  
 
  ImPlay3,
  ImPrevious,
  
} from "react-icons/im";
import { BiShuffle } from "react-icons/bi"
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function PlayerControls() {
  const [{ token, playerState }, dispatch] = useStateProvider();
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data !== "") {
      const { item } = response.data;
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artists) => artists.name),
        image: item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
    }
  };
  
  const changeState = async() => {
    const state = playerState ? "pause" : "play";
    await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,{},
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState });
  };
  
  return (
    <Container>
      <div className="shuffle">
        <BiShuffle />
      </div>
      <div className="previous">
        <ImPrevious onClick={() => changeTrack("previous")} />
      </div>
      <div className="sate">{playerState ? <ImPause2 onClick={changeState} /> : <IoMdPlay onClick={changeState} />}</div>
      <div className="next">
        <ImNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <IoMdRepeat />
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
  path {
    stroke: #b3b3b3;
    &:hover {
      cursor: pointer;
      stroke: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }

  .next,
  .previous {
    svg polyline {
      stroke: #b3b3b3;
      &:hover {
        cursor: pointer;
        stroke: white;
      }
    }
  }
`;
