# callmebot-notifier GitHub Action

GitHub Action wrapper for `callmebot-notifier`.

## Use

```yaml
- uses: F3rr1gn0/callmebot-notifier-action@v1
  with:
    message: "Build done"
    channel: "telegram"
  env:
    TELEGRAM_BOT_TOKEN: ${{ secrets.TELEGRAM_BOT_TOKEN }}
    TELEGRAM_CHAT_ID: ${{ secrets.TELEGRAM_CHAT_ID }}
```

Smoke flow:

```yaml
name: smoke-action

on:
  workflow_dispatch:

jobs:
  smoke:
    runs-on: ubuntu-latest
    steps:
      - uses: F3rr1gn0/callmebot-notifier-action@v1
        with:
          message: "Smoke from GitHub Action"
          channel: "telegram"
        env:
          TELEGRAM_BOT_TOKEN: ${{ secrets.TELEGRAM_BOT_TOKEN }}
          TELEGRAM_CHAT_ID: ${{ secrets.TELEGRAM_CHAT_ID }}
```
