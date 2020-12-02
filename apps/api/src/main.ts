import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DmcSwagger } from './dmc-swagger/dmc-swagger';
import { DMCLogger } from './common/dmc-logger';
import { AuthGuard } from './core/guards/AuthGuard';
import { MongooseExceptionFilter } from './core/filters/mongoose-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  });
  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;

  app.useLogger(DMCLogger);
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new MongooseExceptionFilter());
  app.useGlobalGuards(new AuthGuard());
  DmcSwagger.initSwagger(app);

  await app.listen(port, () => {
    DMCLogger.i('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
