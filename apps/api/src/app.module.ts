import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoreModule } from './core/core.module';
import { DmcModelManagerModule } from './dmc-model-manager/dmc-model-manager.module'
import { MongooseModule } from '@nestjs/mongoose';
import * as config from './common/config-reader';
import { DbEnvironment } from './common/config-reader';

const conf: DbEnvironment = config.default();

@Module({
  imports: [
    ConfigModule.forRoot(),
    CoreModule,
    MongooseModule.forRoot(`mongodb+srv://${conf.development.user}:${conf.development.password}@${conf.development.host}/${conf.development.database}?retryWrites=true&w=majority`),
    DmcModelManagerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
