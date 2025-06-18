'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white px-4 pb-24 pt-12">
      <h1 className="text-2xl font-bold mb-2">
        Добро пожаловать в <span className="text-purple-400">TersaaMT</span>
      </h1>
      <p className="mb-6 text-gray-400">Выбери стратегию 👇</p>

      <div className="grid gap-4 w-full max-w-xs">
        <button
          className="bg-purple-600 hover:bg-purple-700 rounded-xl p-4 text-lg font-medium shadow"
          onClick={() => router.push('/ma14')}
        >
          🧮 Стратегия MA 14
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 rounded-xl p-4 text-lg font-medium shadow"
          onClick={() => router.push('/trend-line')}
        >
          📈 Трендовая линия
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 text-lg font-medium shadow"
          onClick={() => router.push('/channel')}
        >
          🧭 Трендовый канал
        </button>
      </div>
    </main>
  );
}
