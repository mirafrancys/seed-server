import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
//import routes from './routes/index';

const port = 3100;

const app = express()
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(cors<Request>());
//app.use(routes);

/*
for(const filename of fs.readdirSync(pathToApi)) {
  const pathFilename = path.join(pathToApi, filename);
  console.log('PathFilename: ', pathFilename);
  const module = await import(pathToFileURL(pathFilename).href);
  module.default(app, database);
}
*/

/*
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);
  if (res.headersSent){
    return next(error);
  }
  const [statusCode, message] = error.message.split(":");
  const status = parseInt(statusCode);
  res.status(status || 500).send({error: message});
});
*/
app.listen(port, () => {
  console.log('Server is running on port ', port);
});