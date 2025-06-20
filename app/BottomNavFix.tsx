// app/BottomNavFix.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center h-16 border-t border-gray-700 z-50">
      <button onClick={() => router.push('/ma14')} className="flex flex-col items-center">
        <span>📈</span>
        <span className="text-xs">Тренд</span>
      </button>
      <button onClick={() => router.push('/trend-line')} className="flex flex-col items-center">
        <span>📉</span>
        <span className="text-xs">Линия</span>
      </button>
      <button onClick={() => router.push('/channel')} className="flex flex-col items-center">
        <span>📊</span>
        <span className="text-xs">Канал</span>
      </button>
    </nav>
  );
}
