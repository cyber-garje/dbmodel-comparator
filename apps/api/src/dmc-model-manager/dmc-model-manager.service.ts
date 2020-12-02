import { ModelManager, ModelManagerDocument } from '@dbmodel-comparator/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DMCLogger } from '../common/dmc-logger';

@Injectable()
export class DmcModelManagerService {

  constructor(
    @InjectModel(ModelManager.name)
    private modelManager: Model<ModelManagerDocument>
  ) {}

  async findAll() {
    return this.modelManager.find();
  }

  async find(name: string) {
    return this.modelManager.find({ name: name});
  }

  async create(model: ModelManager) {
    return new this.modelManager(model)
      .save()
      .then((model) => DMCLogger.i(`${model.name} successfully created`));
  }

  async delete(name: string) {
    return this.modelManager.deleteMany({ name })
      .then(( { deletedCount }) => DMCLogger.i(`${deletedCount} model${deletedCount > 1 ? 's' : ''} ha${deletedCount > 1 ? 've' : 's'} been removed`));
  }
}
