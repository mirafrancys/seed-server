import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { createSecretKey, KeyObject } from "crypto";

dotenv.config();

const generateToken: any = function generate(user: any){
  let secretKey: KeyObject;
  const tokenSecret: string = 'my-token-secret';
  secretKey = createSecretKey(tokenSecret, "utf-8");
  let expire: number = 20;
  if (process.env.EXPIRESIN)
    expire = +process.env.EXPIRESIN;
  return jwt.sign({ data: user }, secretKey, {expiresIn: expire});
};

export default generateToken;