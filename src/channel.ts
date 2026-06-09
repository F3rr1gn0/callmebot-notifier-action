import { discord, email, gchat, teams, telegram, whatsapp, slack, fromEnv } from "../vendor-callmebot-notifier.js";

export type ActionChannelName = "whatsapp" | "telegram" | "email" | "discord" | "slack" | "gchat" | "teams" | "";

export const resolveChannel = (channel: ActionChannelName) => {
  if (channel === "whatsapp") return whatsapp({ phone: process.env.PHONE ?? "", apikey: process.env.APIKEY ?? "" });
  if (channel === "telegram") return telegram({ botToken: process.env.TELEGRAM_BOT_TOKEN ?? "", chatId: process.env.TELEGRAM_CHAT_ID ?? "" });
  if (channel === "email") return email({
    host: process.env.SMTP_HOST ?? "",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER ?? undefined,
    pass: process.env.SMTP_PASS ?? undefined,
    from: process.env.EMAIL_FROM ?? "",
    to: process.env.EMAIL_TO ?? ""
  });
  if (channel === "discord") return discord({ webhookUrl: process.env.DISCORD_WEBHOOK_URL ?? "" });
  if (channel === "slack") return slack({ webhookUrl: process.env.SLACK_WEBHOOK_URL ?? "" });
  if (channel === "gchat") return gchat({ webhookUrl: process.env.GCHAT_WEBHOOK_URL ?? "" });
  if (channel === "teams") return teams({ webhookUrl: process.env.TEAMS_WEBHOOK_URL ?? "" });
  return fromEnv();
};
