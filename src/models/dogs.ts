import db from "../db/dogs.json";

abstract class DogsModel {
  static getAllDogs = () => {
    try {
      return db;
    } catch (error) {
      return { message: error };
    }
  };
}

export { DogsModel };
