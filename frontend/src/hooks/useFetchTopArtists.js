import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router'
import { getTopArtists } from '../libs/spotify/getTopArtists'

export function useFetchTopArtists() {
  const [range, setRange] = useState("long_term")
  const [topArtists, setTopArtists] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const body = await getTopArtists(range)
      setTopArtists(body.data)
    })()
  }, [range, navigate])

  return [topArtists, setRange]
}
