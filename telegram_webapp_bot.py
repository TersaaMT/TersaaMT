from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

BOT_TOKEN = "7432898854:AAFUF-gDgNBrAwtcDPXQtBnMWxEUTA0GEm0"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton(
                text="🚀 Открыть WebApp",
                web_app=WebAppInfo(url="https://nextjs-boilerplate-eta-flax-pi5wkfogwq.vercel.app")
            )
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать! 👇 Нажми кнопку ниже, чтобы открыть мини-приложение:",
        reply_markup=reply_markup
    )

app = Application.builder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.run_polling()
