// app/channel.tsx

export default function ChannelStrategy() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Стратегия Канал</h1>
      <p className="text-base text-gray-700 mb-6">
        Здесь будет отображаться логика и график стратегии "Канал". Вы можете реализовать отображение уровней high/low, пробой канала и визуализацию.
      </p>
      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-2xl shadow">BUY</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-2xl shadow">SELL</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-2xl shadow">Назад</button>
      </div>
    </div>
  );
}
