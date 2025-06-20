'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function HomePage() {
  const [chartType, setChartType] = useState('candles');
  const [language, setLanguage] = useState('ru');

  return (
    <main className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">TersaaMT</h1>
        <Settings className="cursor-pointer" onClick={() => alert('Окно настроек откроется здесь')} />
      </div>

      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="lessons">🧑‍🏫 Уроки</TabsTrigger>
          <TabsTrigger value="strategies">📊 Стратегии</TabsTrigger>
          <TabsTrigger value="news">📰 Новости</TabsTrigger>
          <TabsTrigger value="support">🎧 Поддержка</TabsTrigger>
        </TabsList>

        {/* Уроки */}
        <TabsContent value="lessons">
          <Card>
            <CardContent className="p-4 space-y-2">
              <p>🟣 Тренд — «Всё гениальное — просто»</p>
              <p>🟢 Трендовая линия — «Следуй за направлением»</p>
              <p>🔵 Канал — «Границы тоже говорят»</p>
              <p className="text-sm text-gray-500">(Видеоинструкции будут добавлены)</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Стратегии */}
        <TabsContent value="strategies">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h2 className="font-semibold">🟣 Тренд</h2>
                <p>Всё гениальное — просто</p>
              </div>
              <div>
                <h2 className="font-semibold">🟢 Трендовая линия</h2>
                <p>Следуй за направлением</p>
              </div>
              <div>
                <h2 className="font-semibold">🔵 Канал</h2>
                <p>Границы тоже говорят</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Новости */}
        <TabsContent value="news">
          <Card>
            <CardContent className="p-4">
              <p>Здесь будут новости, новые монеты и статистика по стратегиям — coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Поддержка */}
        <TabsContent value="support">
          <Card>
            <CardContent className="p-4 space-y-2">
              <p>💬 Онлайн-чат с поддержкой</p>
              <p>📄 Раздел FAQ</p>
              <p>📘 Инструкции по использованию платформы</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-4 justify-between">
        <div>
          <label className="text-sm font-medium">Тип графика:</label>
          <select
            className="ml-2 border rounded p-1"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="candles">Японские свечи</option>
            <option value="bars">Бары</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Язык:</label>
          <select
            className="ml-2 border rounded p-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="uz">O'zbekcha</option>
          </select>
        </div>
      </div>
    </main>
  );
}


