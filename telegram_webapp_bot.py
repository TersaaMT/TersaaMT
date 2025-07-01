from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes
import asyncio

BOT_TOKEN = "7432898854:AAEJ0QuBw1xfSQqk6LJ2vIjw9qrJKFR7y8Y"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton(
            text="🚀 Открыть WebApp",
      web_app=WebAppInfo(url="https://v0-new-project-btunvgms0pv.vercel.app")
        )]
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать! 👇 Нажми кнопку ниже, чтобы открыть мини-приложение:",
        reply_markup=reply_markup
    )

app = Application.builder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))

# Запуск асинхронно
if __name__ == "__main__":
    asyncio.run(app.run_polling())

 