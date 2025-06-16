import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "js-cookie"

export function useFetchArtists() {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const [longTermData, setLongTermData] = useState([])
  const [mediumTermData, setMediumTermData] = useState([])
  const [shortTermData, setShortTermData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get("music_taste_spotify_access_token")

    if (!token) {
      return navigate("/")
    }

    (async () => {
      function appendTimeRange(range) {
        return `https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=24&offset=0`
      }

      const ranges = ["long_term", "medium_term", "short_term"]
      const header = { Authorization: `Bearer ${token}` }

      try {
        const responses = await Promise.all(
          ranges.map(async (range) => {
            const url = appendTimeRange(range)

            const response = await fetch(url, { headers: header })
            const data = await response.json()

            if (data.error) return navigate("/")
            return { range, data: data.items }
          })
        )

        setLongTermData(responses.find((response) => response.range === "long_term").data)
        setMediumTermData(responses.find((response) => response.range === "medium_term").data)
        setShortTermData(responses.find((response) => response.range === "short_term").data)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
        setErrorMessage("Unexpected error")
        setIsLoading(false)
      }
    })()
  }, [navigate])

  return [isLoading, longTermData, mediumTermData, shortTermData, errorMessage]
}
