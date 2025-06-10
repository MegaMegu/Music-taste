import { useFetchTopTracks } from "./hooks/useFetchTopTracks"

export default function Spotify() {
  const topTracks = useFetchTopTracks()

  return (
    <div>
      {topTracks && topTracks.map((track) => (
        <div key={track.id}>
          <div>{track.name}</div>
          <div>artists:</div>
          {track.artists.map((artist) => (
            <div key={artist.id}>{artist.name}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
