import { Pool } from "mysql2";

export default class ProductService {
  database: Pool;

  constructor(database: Pool){
    this.database = database;
  }

  getProducts(languageCode: string) {
    return this.database.query(`
      SELECT P.productId, P.categoryId, L.languageCode, L.productName, P.productActive 
      FROM product P 
        JOIN product_lang L ON L.productId = P.productId 
      WHERE L.languageCode = ? 
      ORDER BY L.productName `, [languageCode]);
  }

  getProductById(id: number, languageCode: string) {
    return this.database.query(`
      SELECT P.productId, P.categoryId, L.languageCode, L.productName, P.productActive, P.productImage 
      FROM product P 
        JOIN product_lang L ON L.productId = P.productId 
      WHERE P.productId = ? L.languageCode = ? 
      ORDER BY L.productName `, [id, languageCode]);
  }

  getProductByCategoryId(categoryId: number, languageCode: string) {
    return this.database.query(`
      SELECT P.productId, P.categoryId, L.languageCode, L.productName, P.productActive, P.productImage 
      FROM product P 
        JOIN product_lang L ON L.productId = P.productId 
      WHERE P.categoryId = ? L.languageCode = ? 
      ORDER BY L.productName `, [categoryId, languageCode]);
  }
}