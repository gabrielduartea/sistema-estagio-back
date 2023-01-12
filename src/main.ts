import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

import cors = require('cors');
const corsOptions = {
  origin: 'https://sistema-estagio-back-production.up.railway.app',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  app.use(cors(corsOptions));
  await app.listen(5000);
}
bootstrap();
