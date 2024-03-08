import { Router } from "express";
import { DogsController } from "../controllers/dogs";

const routesDogs = Router();

routesDogs.get("/dogs", DogsController.getAllDogs);
routesDogs.post("/dogs", DogsController.createNewDog);

export { routesDogs };
