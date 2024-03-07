import { Request, Response } from "express";
import { DogsModel } from "../models/dogs";

abstract class DogsController {
  static getAllDogs = (req: Request, res: Response) => {
    const data = DogsModel.getAllDogs();
    res.json(data);
  };
}

export { DogsController };
