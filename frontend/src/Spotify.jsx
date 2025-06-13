import { useFetchTopArtists } from "./hooks/useFetchTopArtists"

export default function Spotify() {
  const [topArtists, setRange] = useFetchTopArtists()

  return (
    <>
      {topArtists && topArtists.map((ta, index) => (
        <div key={ta.id}>
          <div>artist {index + 1}</div>
          <div>name: {ta.name}</div>
          <div>image link: {ta.image}</div>
        </div>
      ))}
      <button onClick={() => { setRange("short_term") }}>4 weeks or short term</button>
      <button onClick={() => { setRange("medium_term") }}>6 months or medium term</button>
      <button onClick={() => { setRange("long_term") }}>1 year or long term</button>
    </>
  )
}

