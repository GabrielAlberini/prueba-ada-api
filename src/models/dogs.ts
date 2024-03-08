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

class DogsModel {
  static getAllDogs = async () => {
    try {
      return await jsonfile.readFile(process.cwd() + config.filePath);
    } catch (error) {
      return { message: process.cwd() + config.filePath };
    }
  };
}

export { DogsModel };
