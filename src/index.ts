import { notify } from "../vendor-callmebot-notifier.js";
import { resolveChannel, type ActionChannelName } from "./channel.js";

const message = process.env.INPUT_MESSAGE?.trim();
if (!message) throw new Error("INPUT_MESSAGE is required");

const channel = resolveChannel((process.env.INPUT_CHANNEL?.trim() ?? "") as ActionChannelName);

await notify({
  channels: [channel],
  message
});
