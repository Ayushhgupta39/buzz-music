import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "cfd4ec7cbad84813a3b5fb11062ae454";
    // const redirectUrl = "http://localhost:3000/";
    const redirectUrl = "https://buzz-music-ayushhgupta39.vercel.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      "user-follow-modify",
      "user-follow-read",
      "ugc-image-upload",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-library-modify",
      "user-library-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <div className="Home">
        <img src="/Buzz 2.png" alt="" />
        <button onClick={handleClick} className="button-33" role="button">
          Login
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: coloumn;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #b33030;
  gap: 5rem;
  .Home {
    text-align: center;
  }
  img {
    height: 40vh;
    display: block;
    padding: 1%;
  }

  .button-33 {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-33:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }
`;
