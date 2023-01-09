import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

export default function Sidebar() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  const releaseRadar = "37i9dQZEVXbpkx8l8SHR7Y";
  const renderHome = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img src="./logo-transparent-bg.png" alt="Buzz" />
        </div>
        <div className="home_heading" onClick={() => renderHome(releaseRadar)}>
          <div className="home-icon">
            <MdHomeFilled />
          </div>
          <span>Home</span>
        </div>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  .home_heading {
    display: flex;
    justify-content: center;
    transition: 0.3s ease-in-out;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
  .home_heading span {
    font-size: larger;
    font-weight: bolder;
    margin-left: 5px;
  }
  .home-icon {
    font-size: larger;
  }
  .top_links {
    display: flex;
    flex-direction: column;
  }
  .logo {
    text-align: center;
    margin: 1rem 0;
  }
  img {
    max-inline-size: 80%;
    block-size: auto;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;
