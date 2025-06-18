export default function Home() {
  return (
    <main style={{ textAlign: 'center', paddingTop: 100 }}>
      <h1>Добро пожаловать в TersaaMT</h1>
      <p>Выбери стратегию:</p>

      <button style={{ margin: 10, padding: 10 }}>📊 MA 14</button>
      <button style={{ margin: 10, padding: 10 }}>📈 Трендовая линия</button>
      <button style={{ margin: 10, padding: 10 }}>📉 Трендовый канал</button>
    </main>
  );
}