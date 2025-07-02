import redis from "../config/redis.js";

async function getCache(key) {

    const data = await redis.get(key);

    return data ? JSON.parse(data) : null;


}

async function setCache(key,value ) {
    await redis.setex(key, 300 ,JSON.stringify(value));

}

export default {
    getCache,
    setCache,
}