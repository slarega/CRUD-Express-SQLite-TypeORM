import {DataSource} from "typeorm";
import {User} from "./entity/User";
import path from "path";

const databasePath = path.join(__dirname, "..", "testdatabase.db")

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: databasePath,
    synchronize: true,
    entities: [User],
})

export const initDataSource = async () =>{
    await AppDataSource.initialize();
    console.log("Database connected and initialized")
}

initDataSource().catch((error) =>
    console.log("Database connection error", error)
);