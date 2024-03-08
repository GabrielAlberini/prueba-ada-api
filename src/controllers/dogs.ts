import { Request, Response } from "express";
import { DogsModel } from "../models/dogs";
import { validateDog } from "../validators/dogs";

abstract class DogsController {
  static getAllDogs = async (req: Request, res: Response) => {
    const data = await DogsModel.getAllDogs();
    res.json(data);
  };

  static createNewDog = async (req: Request, res: Response) => {
    const dataValidated = validateDog(req.body);
    if (!dataValidated.success) {
      res.status(400).json(dataValidated.error);
    }
    const data = await DogsModel.createNewDog(req.body);
    res.json(data);
  };
}

export { DogsController };
