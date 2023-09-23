import { Redis } from 'ioredis'

const getRedisURL = () => {
  if (process.env.REDIS_URL) return process.env.REDIS_URL
  throw new Error('Redis URL is not defined.')
}

export const redis = new Redis(getRedisURL())