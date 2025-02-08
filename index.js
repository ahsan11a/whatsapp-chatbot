const express = require("express");
const twilio = require("twilio");
const openai = require("openai");
const { detectLanguage, translateText } = require("./translations");
const config = require("./config");

const app = express();
app.use(express.urlencoded({ extended: true }));

// OpenAI Configuration
const openaiClient = new openai.OpenAI({ apiKey: config.openaiApiKey });

app.post("/webhook", async (req, res) => {
  const incomingMsg = req.body.Body;
  const senderNumber = req.body.From;

  const userLang = await detectLanguage(incomingMsg);
  const translatedMsg = await translateText(incomingMsg, "en");

  const aiResponse = await openaiClient.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: translatedMsg }],
  });

  const finalResponse = await translateText(aiResponse.choices[0].message.content, userLang);

  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message(finalResponse);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
