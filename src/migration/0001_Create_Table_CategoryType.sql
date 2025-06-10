CREATE TABLE IF NOT EXISTS category_type
(
  categoryTypeId     integer AUTO_INCREMENT CONSTRAINT PK_CategoryType PRIMARY KEY,
  categoryTypeActive BOOLEAN NOT NULL DEFAULT TRUE,
  created            TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS category_type_lang
(
  categoryTypeId    integer NOT NULL CONSTRAINT FK_CategroyTypeLang_CategoryType REFERENCES category_type,
  languageCode      VARCHAR(3) NOT NULL,
  categoryTypeDesc  VARCHAR(64) NOT NULL,

  CONSTRAINT PK_CategoryTypeLang PRIMARY KEY(categoryTypeId, languageCode)
);

CREATE TABLE IF NOT EXISTS category
(
  categoryId     integer AUTO_INCREMENT CONSTRAINT PK_Category PRIMARY KEY,
  categoryTypeId integer NOT NULL CONSTRAINT FK_Category_CategoryType REFERENCES category_type,
  categoryActive BOOLEAN NOT NULL DEFAULT TRUE,
  created        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS category_lang
(
  categoryId     integer NOT NULL CONSTRAINT FK_CategroyLang_Category REFERENCES category,
  languageCode   VARCHAR(3) NOT NULL,
  categoryName   VARCHAR(64) NOT NULL,
  categoryDesc   VARCHAR(500),

  CONSTRAINT PK_CategoryLang PRIMARY KEY(categoryId, languageCode)
);

CREATE TABLE IF NOT EXISTS product
(
  productId      integer AUTO_INCREMENT CONSTRAINT PK_product PRIMARY KEY,
  categoryId     integer NOT NULL CONSTRAINT FK_Product_Category REFERENCES category,
  productCode    VARCHAR(8),
  productQuantity INTEGER,
  seedQuantity   INTEGER,
  germinationRate INTEGER,
  numberDays     INTEGER,
  productPrice   decimal,
  inStock        BOOLEAN NOT NULL DEFAULT TRUE,
  productImage   BLOB,
  productActive  BOOLEAN NOT NULL DEFAULT TRUE,
  created        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_lang
(
  productId      integer NOT NULL CONSTRAINT FK_ProductLang_Product REFERENCES product,
  languageCode   VARCHAR(3) NOT NULL,
  productName    VARCHAR(64) NOT NULL,
  productDesc    VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS cart
(
  cartId         integer AUTO_INCREMENT CONSTRAINT PK_cart PRIMARY KEY,
  productId      integer NOT NULL CONSTRAINT FK_Cart_Product REFEFERENCES product,

  created        TIMESTAMP NOT NULL DEFAULT NOW()
);
