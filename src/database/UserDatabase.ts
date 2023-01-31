import { BaseDatabase } from "./BaseDatabase";
import { TUserDB, TAccountDB } from "../types";

export class UserDataBase extends BaseDatabase{
    public static TABLE_USERS = "users"
    public  async findUsers(q: string | undefined){
        let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDatabase.connection(UserDataBase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDatabase.connection(UserDataBase.TABLE_USERS)
            usersDB = result
        }
        return usersDB

    }
    public async findUserById(id: string ){
        const [ userDB ]: TAccountDB[]  | undefined[] = await BaseDatabase.connection(UserDataBase.TABLE_USERS).where({ id })
    
        return userDB
    }
    public async insertUser(newUserDB: TUserDB){
        await BaseDatabase
        .connection(UserDataBase.TABLE_USERS)
        .insert(newUserDB)
    }
   

}

UserDataBase.TABLE_USERS

