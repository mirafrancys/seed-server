import { Request, Response, Router } from "express";
//import ProductService from "../db/Product-Service.js";
//import { expectNumber, expectString } from "../util/expectType.js";
//import database from "../config/db-connection.js";

const productRouter = Router();
//const productService = new ProductService(database);

/*
productRouter.get('/Product/:languageCode', (req: Request, res: Response) => {
  expectString(req.params.languageCode, "400: Language code is required");
  res.send(productService.getProducts(req.params.languageCode));
});

productRouter.get('/Product/GetProductById/:id/:languageCode', (req: Request, res: Response) => {
  expectNumber(req.params.id, "400: Id is required");
  expectString(req.params.languageCode, "400: Language code is required");
  const id = Number(req.params.id);
  res.send(productService.getProductById(id, req.params.languageCode));
});

productRouter.get('/Product/GetProductByCategoryId/:categoryId/:languageCode', (req: Request, res: Response) => {
  expectNumber(req.params.categoryId, "400: CategoryId is required");
  expectString(req.params.languageCode, "400: Language code is required");
  const categoryId = Number(req.params.categoryId);
  res.send(productService.getProductByCategoryId(categoryId, req.params.languageCode));
});
*/

export default productRouter;  