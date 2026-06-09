// src/index.ts
import { notify } from "callmebot-notifier";

// src/channel.ts
import { discord, email, gchat, teams, telegram, whatsapp, slack, fromEnv } from "callmebot-notifier";
var resolveChannel = (channel2) => {
  if (channel2 === "whatsapp") return whatsapp({ phone: process.env.PHONE ?? "", apikey: process.env.APIKEY ?? "" });
  if (channel2 === "telegram") return telegram({ botToken: process.env.TELEGRAM_BOT_TOKEN ?? "", chatId: process.env.TELEGRAM_CHAT_ID ?? "" });
  if (channel2 === "email") return email({
    host: process.env.SMTP_HOST ?? "",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER ?? void 0,
    pass: process.env.SMTP_PASS ?? void 0,
    from: process.env.EMAIL_FROM ?? "",
    to: process.env.EMAIL_TO ?? ""
  });
  if (channel2 === "discord") return discord({ webhookUrl: process.env.DISCORD_WEBHOOK_URL ?? "" });
  if (channel2 === "slack") return slack({ webhookUrl: process.env.SLACK_WEBHOOK_URL ?? "" });
  if (channel2 === "gchat") return gchat({ webhookUrl: process.env.GCHAT_WEBHOOK_URL ?? "" });
  if (channel2 === "teams") return teams({ webhookUrl: process.env.TEAMS_WEBHOOK_URL ?? "" });
  return fromEnv();
};

// src/index.ts
var message = process.env.INPUT_MESSAGE?.trim();
if (!message) throw new Error("INPUT_MESSAGE is required");
var channel = resolveChannel(process.env.INPUT_CHANNEL?.trim() ?? "");
await notify({
  channels: [channel],
  message
});
//# sourceMappingURL=index.js.map