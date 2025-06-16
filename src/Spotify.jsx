import { useFetchArtists } from "./hooks/spotify-page/use-fetch-artists";

export default function Spotify() {
  const [
    isLoading,
    longTermData,
    mediumTermData,
    shortTermData,
    errorMessage
  ] = useFetchArtists()

  if (isLoading) return <div>Loading...</div>
  if (errorMessage) return <div>{errorMessage}</div>

  return (
    <div>
      <div><b>Long term</b></div>
      {longTermData.map((data) => (
        <div key={data.id}>
          <div>name: {data.name}</div>
          <div>image url: {data.images.at(0).url}</div>
        </div>
      ))}
      <div><b>Medium term</b></div>
      {mediumTermData.map((data) => (
        <div key={data.id}>
          <div>name: {data.name}</div>
          <div>image url: {data.images.at(0).url}</div>
        </div>
      ))}
      <div><b>Short term</b></div>
      {shortTermData.map((data) => (
        <div key={data.id}>
          <div>name: {data.name}</div>
          <div>image url: {data.images.at(0).url}</div>
        </div>
      ))}
    </div>
  )
}
