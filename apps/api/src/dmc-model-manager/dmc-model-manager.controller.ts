import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DmcModelManagerService } from './dmc-model-manager.service';
import { ModelManager } from '@dbmodel-comparator/api-interfaces';

@Controller('dmc-model-manager')
export class DmcModelManagerController {

  constructor(
    private dmcModelMangerService: DmcModelManagerService
  ) {}

  @Get('/:name')
  retrieveModel(@Param('name') name: string) {
    return this.dmcModelMangerService.find(name);
  }

  @Post()
  async createModel(@Body() model: ModelManager) {
    return this.dmcModelMangerService.create(model);
  }
}
