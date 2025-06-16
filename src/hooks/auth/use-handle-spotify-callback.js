import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAccessToken } from "../../libs/auth/spotify/get-access-token";

export function useHandleSpotifyCallback() {
  const [message, setMessage] = useState("Please wait.")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    if (!code) {
      setError(true)
      setMessage("Login unsucessful.")
      return
    }

    (async () => {
      const result = await getAccessToken(code)
      if (!result.success) {
        setError(true)
        setMessage(result.message)
        return
      }

      navigate("/home")
    })()
  }, [navigate])

  return [message, error]
}
