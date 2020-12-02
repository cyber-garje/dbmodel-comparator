import { Module } from '@nestjs/common';

import { DmcModelManagerController } from './dmc-model-manager.controller';
import { DmcModelManagerService } from './dmc-model-manager.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelManager, ModelManagerSchema } from '@dbmodel-comparator/api-interfaces';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModelManager.name, schema: ModelManagerSchema }])],
  controllers: [DmcModelManagerController],
  providers: [DmcModelManagerService],
  exports: [DmcModelManagerService]
})
export class DmcModelManagerModule {}
