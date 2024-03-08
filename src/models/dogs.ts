import jsonfile from "jsonfile";
import dotenv from "dotenv";
dotenv.config();

const config = {
  filePath: "/src/db/dogs.json",
};

// Configuración de producción
if (process.env.NODE_ENV === "production") {
  config.filePath = "/dist/db/dogs.json";
}

console.log(config.filePath);
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
      await jsonfile.writeFile(process.cwd() + config.filePath, dog);
      return { message: "Created" };
    } catch (error) {
      return { ERROR_TO_ADD: process.cwd() + config.filePath };
    }
  };
}

export { DogsModel };
