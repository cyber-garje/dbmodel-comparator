import { Test } from '@nestjs/testing';
import { DmcModelManagerService } from './dmc-model-manager.service';
import { ModelManager, ModelManagerDocument, ModelManagerSchema } from '@dbmodel-comparator/api-interfaces';
import { DmcModelManagerController } from './dmc-model-manager.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { DocumentQuery, Model } from 'mongoose';
import { inject } from '@angular/core/testing';
import { providerDef } from '@angular/compiler/src/view_compiler/provider_compiler';

describe('DmcModelManagerService', () => {
  let service : DmcModelManagerService;
  let modelManager: Model<ModelManagerDocument>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [
        DmcModelManagerService,
        { provide: getModelToken(ModelManager.name), useValue: {}}
      ],
    }).compile();

    service = module.get(DmcModelManagerService);
    modelManager = module.get(getModelToken(ModelManager.name));
    modelManager.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockReturnValueOnce( {
        catch: jest.fn().mockImplementation()
      }),
    });
  });

  describe('Pre tests', () => {
    it('Should be instanciated', async () => {
      expect(await modelManager).toBeDefined();
      expect(await service).toBeDefined();
    })
  });

  describe('Test find method', () => {
    it('should return result for "test"',  async () => {
      const resultExpected = [
        { name: 'test', model: 'mon super model'},
        { name: 'test', model: 'mon super model dupliqué'}
      ];
      jest.spyOn(modelManager, 'find').mockReturnValue({
        exec: jest.fn().mockReturnValue( {
          catch: jest.fn().mockResolvedValue(resultExpected as ModelManagerDocument[])
        }),
      } as any);
      expect( await service.find('test')).toEqual(resultExpected);
    });
  });
});
