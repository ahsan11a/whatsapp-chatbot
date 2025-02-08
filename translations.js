const { detect } = require("language-detect");
const translate = require("google-translate-api-next").default;

async function detectLanguage(text) {
  return detect(text) || "en"; // Default English
}

async function translateText(text, targetLang) {
  try {
    const res = await translate(text, { to: targetLang });
    return res.text;
  } catch (error) {
    return text;
  }
}

module.exports = { detectLanguage, translateText };
