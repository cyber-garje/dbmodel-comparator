/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DmcSwagger } from './dmc-swagger';
import { DMCLogger } from './common/dmc-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  });
  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;

  app.useLogger(DMCLogger);
  app.setGlobalPrefix(globalPrefix);
  DmcSwagger.initSwagger(app);

  await app.listen(port, () => {
    DMCLogger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
