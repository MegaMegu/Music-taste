import { Redis } from "@upstash/redis";

const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
  password: process.env.UPSTASH_REDIS_REST_TOKEN,
  tls: {},
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    await redis.incr("download-count");
    const count = await redis.get("download-count");
    res.status(200).json({ count });
  } else if (req.method === "GET") {
    const count = await redis.get("download-count");
    res.status(200).json({ count });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
