import { Link } from "react-router";
import { useHandleSpotifyCallback } from "./hooks/auth/use-handle-spotify-callback";

export default function SpotifyCallback() {
  const [message, error] = useHandleSpotifyCallback()

  return error ? (
    <div>
      <div>{message}</div>
      <Link to="/">Please try to login again.</Link>
    </div>
  ) : (
    <div>{message}</div>
  )
}

