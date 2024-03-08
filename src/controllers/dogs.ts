import { Request, Response } from "express";
import { DogsModel } from "../models/dogs";

abstract class DogsController {
  static getAllDogs = async (req: Request, res: Response) => {
    const data = await DogsModel.getAllDogs();
    res.json(data);
  };
}

export { DogsController };
