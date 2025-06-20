// app/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings } from "lucide-react";

export default function HomePage() {
  const [chartType, setChartType] = useState("candles");
  const [language, setLanguage] = useState("ru");

  return (
    <main className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">TersaaMT</h1>
        <Settings className="cursor-pointer" onClick={() => alert("Тут будет окно настроек")} />
      </div>

      <Tabs defaultValue="strategies" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="strategies">Стратегии</TabsTrigger>
          <TabsTrigger value="types">Платные / Бесплатные</TabsTrigger>
          <TabsTrigger value="news">Новости</TabsTrigger>
          <TabsTrigger value="help">Поддержка</TabsTrigger>
        </TabsList>

        {/* Вкладка 1: Все стратегии */}
        <TabsContent value="strategies">
          <Card>
            <CardContent className="p-4 space-y-2">
              <p>MA 14 — «Всё гениальное — просто»</p>
              <p>Трендовая линия — «Следуй за направлением»</p>
              <p>Канал — «Границы тоже говорят»</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка 2: Платные / Бесплатные */}
        <TabsContent value="types">
          <Card>
            <CardContent className="p-4">
              <p>Тут позже будут разделения: бесплатные и платные.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка 3: Новости и коины */}
        <TabsContent value="news">
          <Card>
            <CardContent className="p-4">
              <p>Новости, новые монеты, статистика — coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Вкладка 4: Поддержка */}
        <TabsContent value="help">
          <Card>
            <CardContent className="p-4">
              <p>Скоро появятся видеоуроки и техподдержка.</p>
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



