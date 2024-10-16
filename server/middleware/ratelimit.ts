import { timeUntilDate } from "~/utils/datetime";
import { ratelimit } from "~/utils/ratelimit";

export default defineEventHandler(async (event) => {
  const { req } = event.node;
  const forwarded = req.headers["x-forwarded-for"];

  // Safely extract IP address
  const ip =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0]) ||
    req.connection.remoteAddress;

  // If no IP, terminate early
  if (!ip) return;

  // Apply rate limit check
  const result = await ratelimit.limit(ip);

  console.log(result);

  // If rate limit exceeded, return 429 response
  if (!result.success) {
    const message = `Rate limit exceeded!
Your IP: ${ip}
Retry in ${timeUntilDate(new Date(result.reset))}.
${result.remaining} requests left until reset.`;

    return new Response(message, { status: 429 });
  }
});
