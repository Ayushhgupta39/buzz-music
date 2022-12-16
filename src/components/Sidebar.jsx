import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";

export default function Sidebar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img src="./logo-transparent-bg.png" alt="Buzz" />
        </div>
        <ul>
          <li>
          <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
          <MdSearch />
            <span>Search</span>
          </li>
          <li>
          <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
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

  .top_links{
    display: flex;
    flex-direction: column;
  }
  .logo{
    text-align: center;
    margin: 1rem 0;
    
  }
  img{
    max-inline-size: 80%;
    block-size: auto;
  }
  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    li{
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover{
      color: white;
    }
  }
  }
  
`;
