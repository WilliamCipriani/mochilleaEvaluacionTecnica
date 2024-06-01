import { Test, TestingModule } from '@nestjs/testing';
import { DigitalGuideController } from './digital-guide.controller';

describe('DigitalGuideController', () => {
  let controller: DigitalGuideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalGuideController],
    }).compile();

    controller = module.get<DigitalGuideController>(DigitalGuideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
