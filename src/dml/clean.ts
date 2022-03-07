import { Pool } from "pg";

const pool = new Pool({ ssl: true });
pool.query("delete from zhutian.web_content");
