import jsonfile from "jsonfile";
import { indexDb } from "../db";
import dotenv from "dotenv";
dotenv.config();

console.log("path file", indexDb);

class DogsModel {
  static getAllDogs = async () => {
    try {
      return await jsonfile.readFile(indexDb + "/dogs.json");
    } catch (error) {
      return { ERROR_TO_READ: indexDb + "/dogs.json" };
    }
  };

  static createNewDog = async (dog: any) => {
    try {
      const db = await jsonfile.readFile(indexDb + "/dogs.json");
      db.push(dog);
      await jsonfile.writeFile(indexDb, db);
      return { message: "Created" };
    } catch (error) {
      return { ERROR_TO_ADD: indexDb + "/dogs.json" };
    }
  };
}

export { DogsModel };
