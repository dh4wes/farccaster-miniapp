import { useEffect, useState } from 'react';

export default function Home() {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const res = await fetch('https://client.warpcast.com/v2/feed?feed_type=following&fid=2');
        const data = await res.json();
        console.log("API response:", data);
        setCasts(data.result?.casts || []);
      } catch (e) {
        console.error("Fetch error:", e);
      }
    };
    fetchCasts();
  }, []);

  return (
    <div>
      <h1>Farcaster Feed (Warpcast API)</h1>
      <ul>
        {casts.map((cast, idx) => (
          <li key={idx}>{cast.text?.text || "(no text)"}</li>
        ))}
      </ul>
    </div>
  );
}

