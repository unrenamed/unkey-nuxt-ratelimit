import { Ratelimit } from "@unkey/ratelimit";

// In case of severe network degredations or other unforseen events on Unkey side,
// let requests pass. But you can of course also reject them if you want.
const fallback = (identifier: string) => ({
  success: true,
  limit: 0,
  reset: 0,
  remaining: 0,
});

export const ratelimit = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY!,
  namespace: process.env.UNKEY_NAMESPACE!,
  limit: 10,
  duration: "30s",
  async: true,
  timeout: {
    ms: 3000, // only wait 3s at most before returning the fallback
    fallback,
  },
  onError: (err, identifier) => {
    console.error(`${identifier} - ${err.message}`);
    return fallback(identifier);
  },
});
