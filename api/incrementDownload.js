import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    await redis.incr("download-count");
    const count = await redis.get("download-count");
    return res.status(200).json({ count });
  } else if (req.method === "GET") {
    const count = await redis.get("download-count");
    return res.status(200).json({ count });
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
