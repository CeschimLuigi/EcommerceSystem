import { Redis } from 'ioredis'

const RedisClient = new Redis({
    host: 'localhost',
    port: 6379,
});

export default RedisClient;