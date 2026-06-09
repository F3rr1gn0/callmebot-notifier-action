import { describe, expect, it, vi, beforeEach } from "vitest";

const notify = vi.fn().mockResolvedValue(undefined);

vi.mock("../vendor-callmebot-notifier.js", () => ({
  notify,
  fromEnv: vi.fn(() => ({ name: "fallback" }))
}));

describe("action entrypoint", () => {
  beforeEach(() => {
    vi.resetModules();
    notify.mockClear();
  });

  it("calls notify with message and resolved channel", async () => {
    process.env.INPUT_MESSAGE = "hello";
    process.env.INPUT_CHANNEL = "";
    process.env.PHONE = "123";
    process.env.APIKEY = "key";

    await import("../src/index.js");

    expect(notify).toHaveBeenCalledWith(expect.objectContaining({
      message: "hello"
    }));
  });
});
