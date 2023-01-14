import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  var cors = require('cors')
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cors());
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3003, () => console.log(`Server running on port ${3003}`));
}
bootstrap();
