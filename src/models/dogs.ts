import jsonfile from "jsonfile";
import db from "../db/dogs.json";
import dotenv from "dotenv";
dotenv.config();

const config = {
  filePath: "/src/db/dogs.json",
};

// Configuración de producción
if (process.env.NODE_ENV === "production") {
  config.filePath = "/workspace/dist/db/dogs.json";
}

console.log(
  "Ruta completa antes de la lectura/escritura:",
  process.env.NODE_env
);

class DogsModel {
  static getAllDogs = async () => {
    try {
      return await jsonfile.readFile(process.cwd() + config.filePath);
    } catch (error) {
      return { ERROR_TO_READ: process.cwd() + config.filePath };
    }
  };

  static createNewDog = async (dog: any) => {
    try {
      // Mover la actualización de la ruta antes de operaciones en db
      if (process.env.NODE_ENV === "production") {
        config.filePath = "/dist/db/dogs.json";
      }

      db.push(dog);
      await jsonfile.writeFile(process.cwd() + config.filePath, db);
      return { message: "Created" };
    } catch (error) {
      return { ERROR_TO_ADD: process.cwd() + config.filePath };
    }
  };
}

export { DogsModel };
