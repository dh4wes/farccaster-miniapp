import Link from 'next/link';

export default function ChatSelector() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Choose a Chat Room</h1>
      <div className="space-x-4">
        <Link href="/chat/a">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Enter Chat A
          </button>
        </Link>
        <Link href="/chat/b">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Enter Chat B
          </button>
        </Link>
      </div>
    </div>
  );
}
