import { ModelManager, ModelManagerDocument } from '@dbmodel-comparator/api-interfaces';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DMCLogger } from '../common/dmc-logger';

@Injectable()
export class DmcModelManagerService {

  constructor(
    @InjectModel(ModelManager.name)
    private modelManager: Model<ModelManagerDocument>
    ) {}

  async find(name: string) {
    return this.modelManager.find({ name: name}).exec()
      .catch(({error}) => DMCLogger.e(`An error occurred : ${error}`));
  }

  async create(model: ModelManager) {
    return new this.modelManager(model)
      .save()
      .then((model) => DMCLogger.i(`${model.name} successfully created`))
      .catch(({error}) => DMCLogger.e(`An error occurred while saving model : ${error}`));
  }
}
