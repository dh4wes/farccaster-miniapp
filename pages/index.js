import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const res = await fetch(
          'https://client.warpcast.com/v2/feed?feed_type=following&fid=2'
        );
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-end mb-6">
        <ConnectButton />
      </div>

      <h1 className="text-2xl font-bold mb-4">Farcaster Feed</h1>

      <ul className="space-y-4">
        {casts.map((cast, idx) => (
          <li
            key={idx}
            className="bg-white shadow p-4 rounded-lg border border-gray-200"
          >
            {cast.text?.text || "(no text)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

