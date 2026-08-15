import { randomUUID } from "node:crypto"
import { sql } from "./db.js";
export class DatabasePostgres {
    #videos = new Map();

    list(search = '') {
        const videos = sql`select * from videos`;
    }
    
    create(video) {

    }

    update(id, video){

    }

    delete(id){

    }
}