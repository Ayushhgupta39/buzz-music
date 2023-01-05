import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import SpotifyPlayer from "react-spotify-web-playback";
import { token } from "./Spotify";

export default function PlayerControls({ trackUri }) {
  return (
    <SpotifyWebPlayer
      token={token}
      showSaveIcon
      uris={trackUri}
    />
  );
}
