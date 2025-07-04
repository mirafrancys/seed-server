import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import routes from "./routes/route";

let port = 3100;
if (process.env.PORT){
  port = +process.env.PORT || 3200;
} 

const app = express()
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(cors<Request>());
app.use('/api', routes);

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
const server = app.listen(port, '0.0.0.0', (error) => {
  if (error){
    throw error
  }
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Listening on ${JSON.stringify(server.address())}`);
});
