import { Pool } from "mysql2";

export default class CategoryService {
  database: Pool;
  constructor(database: Pool){
    this.database = database;
  }

  getCategories(languageCode: string){
    return this.database.query(`
      SELECT C.categoryId, C.categoryTypeId, L.languageCode, L.categoryName, C.categoryActive 
      FROM category C 
        JOIN category_lang L ON L.categoryId = C.categoryId 
      WHERE L.languageCode = ? 
      ORDER BY L.categoryName `, [languageCode]);
  }

  getCategoryById(id: number, languageCode: string){
    return this.database.query(`
      SELECT C.categoryId, C.categoryTypeId, L.languageCode, L.categoryName, C.categoryActive 
      FROM category C 
        JOIN category_lang L ON L.categoryId = C.categoryId 
      WHERE C.categoryId = ? AND L.languageCode = ? 
      ORDER BY L.categoryName `, [id, languageCode]);
  }
}