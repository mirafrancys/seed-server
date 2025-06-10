import { Request, Response, Router } from "express";
import { expectString } from "../util/expectType";
import CategoryTypeService from "../db/CategoryType-Service";
import database from "../config/db-connection";

const categoryTypeRouter = Router();
const categoryTypeService: CategoryTypeService = new CategoryTypeService(database);

categoryTypeRouter.get('/CategoryType/:languageCode', (req: Request, res: Response) => {
  expectString(req.params.languageCode, "400: Language code is required");

  res.send(categoryTypeService.getCategoryTypes(req.params.languageCode));
});

export default categoryTypeRouter;