import { MikroORM } from "mikro-orm/core"

const orm = await MikroORM.init();

console.log("Hello World");