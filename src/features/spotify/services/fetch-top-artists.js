export async function fetchTopArtists(accessToken, range) {
  const response = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=50&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    // Try to read the response body as text for debugging
    const errorText = await response.text();
    console.error("Spotify API error:", errorText);
    throw new Error("Failed to fetch top artists. Status: " + response.status);
  }

  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  } else {
    const text = await response.text();
    console.error("Non-JSON response from Spotify:", text);
    throw new Error("Expected JSON but received: " + text);
  }
}
