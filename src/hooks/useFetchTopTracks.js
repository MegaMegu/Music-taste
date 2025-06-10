import { useEffect } from "react";
import { useRef, useState } from "react";
import { getAccessToken } from "../libs/spotify/getAccessToken";
import { getTopTracks } from "../libs/spotify/getTopTracks";

export function useFetchTopTracks() {
  const [topTracks, setTopTracks] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    // para isang fetch lang
    // 2 times kase mag fetch dev mode ng react-_-
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    (async () => {
      await getAccessToken(code)
      const response = await getTopTracks()
      setTopTracks([...topTracks, ...response])
      console.log(topTracks)
    })()
  }, [topTracks])

  return topTracks
}
