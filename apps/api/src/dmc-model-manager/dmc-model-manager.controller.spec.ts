import { Test } from '@nestjs/testing';
import { DmcModelManagerService } from './dmc-model-manager.service';
import { ModelManager, ModelManagerDocument } from '@dbmodel-comparator/api-interfaces';
import { DmcModelManagerController } from './dmc-model-manager.controller';
import { getModelToken } from '@nestjs/mongoose';

describe('DmcModelManagerController', () => {
  let service : DmcModelManagerService;
  let controller : DmcModelManagerController;
  const result = [
    { name: 'test', model: 'mon super model'},
    { name: 'test ', model: 'mon super model avec espace'},
    { name: 'tes', model: 'mon super model sans le t'},
    { name: 'test 2', model: 'mon super model 2'},
    { name: 'test', model: 'mon super model dupliqué'}
  ] as ModelManagerDocument[];

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [DmcModelManagerController],
      providers: [
        DmcModelManagerService,
        { provide: getModelToken(ModelManager.name), useValue: ModelManager, }
      ],
    }).compile();

    service = await moduleRef.resolve(DmcModelManagerService);
    controller = await moduleRef.resolve(DmcModelManagerController);
  });

  describe('Component instanciation ok', () => {
    it('DmcModelManagerController', async () => {
      expect(await controller).toBeDefined();
      expect(await service).toBeDefined();
    })

    it('should return ',  async () => {
      jest.spyOn(service, 'find' ).mockResolvedValue(result);
      expect( await controller.retrieveModel('test')).toEqual(result);
    });
  });
});
