import { Redis } from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const RedisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export default RedisClient;