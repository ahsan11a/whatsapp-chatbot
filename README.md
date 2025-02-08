WhatsApp Chatbot using Node.js 🚀

📌 Overview

This is an AI-powered WhatsApp chatbot built with Node.js, Twilio API, OpenAI API, and Google Translate API. The bot can:

Automatically detect message language 🏳️

Translate messages to English for AI processing 🌍

Use ChatGPT (OpenAI) to generate intelligent responses 🤖

Reply in the same language as the user 💬

Work 24/7 on a cloud server 🚀

🏗️ Project Setup

1️⃣ Clone the Repository

git clone https://github.com/ahsan11a/whatsapp-chatbot.git
cd whatsapp-chatbot

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=whatsapp:+your_twilio_number
OPENAI_API_KEY=your_openai_api_key

4️⃣ Run the Chatbot Locally

node index.js

For automatic restart on code changes:

npm install -g nodemon
nodemon index.js

🌍 Deployment (24/7 Online)

You can deploy this chatbot on Railway, Render, or Heroku for 24/7 availability.

🚀 Deploy on Railway.app (Recommended)

Go to Railway.app

Connect your GitHub account

Select the whatsapp-chatbot repository

Add environment variables from .env

Click Deploy

Copy the generated URL and add it to Twilio Webhook

📲 Twilio WhatsApp Webhook Setup

Go to Twilio Console

Open WhatsApp Sandbox settings

Set the Webhook URL to:

https://your-deployed-app.com/webhook

Click Save

Now your bot is live on WhatsApp! 🎉🚀

🔥 Features

✅ AI-Powered Chatbot 🤖
✅ Auto Language Detection 🏳️
✅ Multi-Language Support 🌍
✅ 24/7 Cloud Hosting ☁️
✅ Works with Twilio WhatsApp API 📲

⚡ Need Help?

If you have any issues, feel free to open an issue on GitHub or contact me. 😊
