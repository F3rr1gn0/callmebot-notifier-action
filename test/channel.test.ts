import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock("callmebot-notifier", () => ({
  whatsapp: vi.fn((config) => ({ name: "whatsapp", config })),
  telegram: vi.fn((config) => ({ name: "telegram", config })),
  email: vi.fn((config) => ({ name: "email", config })),
  discord: vi.fn((config) => ({ name: "discord", config })),
  slack: vi.fn((config) => ({ name: "slack", config })),
  gchat: vi.fn((config) => ({ name: "gchat", config })),
  teams: vi.fn((config) => ({ name: "teams", config })),
  fromEnv: vi.fn(() => ({ name: "fallback" }))
}));

import { resolveChannel } from "../src/channel.js";
import * as nb from "callmebot-notifier";

describe("resolveChannel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("maps whatsapp", () => {
    const ch = resolveChannel("whatsapp");
    expect(ch.name).toBe("whatsapp");
    expect(nb.whatsapp).toHaveBeenCalled();
  });

  it("maps telegram", () => {
    const ch = resolveChannel("telegram");
    expect(ch.name).toBe("telegram");
    expect(nb.telegram).toHaveBeenCalled();
  });

  it("maps email", () => {
    const ch = resolveChannel("email");
    expect(ch.name).toBe("email");
    expect(nb.email).toHaveBeenCalled();
  });

  it("maps discord", () => {
    const ch = resolveChannel("discord");
    expect(ch.name).toBe("discord");
  });

  it("maps slack", () => {
    const ch = resolveChannel("slack");
    expect(ch.name).toBe("slack");
  });

  it("maps gchat", () => {
    const ch = resolveChannel("gchat");
    expect(ch.name).toBe("gchat");
  });

  it("maps teams", () => {
    const ch = resolveChannel("teams");
    expect(ch.name).toBe("teams");
  });

  it("falls back to fromEnv", () => {
    const ch = resolveChannel("");
    expect(ch.name).toBe("fallback");
    expect(nb.fromEnv).toHaveBeenCalled();
  });
});
