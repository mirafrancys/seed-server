import { Pool } from "mysql2";

export default class CategoryTypeService {
  database: Pool;

  constructor(database: Pool){
    this.database = database;
  }

  public getCategoryTypes(languageCode: string) {
    return this.database.query(`
      SELECT CT.categoryTypeId, L.languageCode, L.categoryTypeDesc, CT.categoryTypeActive 
      FROM category_type CT 
        JOIN category_type_lang L ON L.categoryTypeId = CT.categoryTypeId 
      WHERE L.languageCode = ? 
      ORDER BY L.categoryTypeDesc `, [languageCode]);
  }
}