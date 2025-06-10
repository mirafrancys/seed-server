import { Request, Response, Router } from "express";
import CategoryService from "../db/Category-Service";
import { expectNumber, expectString } from "../util/expectType.js";
import database from "../config/db-connection";

const categoryRouter = Router();
const categoryService: CategoryService = new CategoryService(database);

categoryRouter.get('/Category/:languageCode', (req: Request, res: Response) => {
  expectString(req.params.languageCode, "400: Language code is required");
  res.send(categoryService.getCategories(req.params.languageCode));
});

categoryRouter.get('/Category/CategoryById/:id/:languageCode', (req: Request, res: Response) => {
  expectNumber(req.params.id, "400: Id is required");
  expectString(req.params.languageCode, "400: Language code is required");
  const categoryId = Number(req.params.id);
  res.send(categoryService.getCategoryById(categoryId, req.params.languageCode));
});

export default categoryRouter;  