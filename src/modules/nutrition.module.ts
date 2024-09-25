import { Module } from '@nestjs/common';
import { CreateNutritionController } from '../controllers/CreateNutrition.controller';
import { CreateNutritionService } from '../services/CreateNutrition.service';

@Module({
  controllers: [CreateNutritionController],
  providers: [CreateNutritionService],
})
export class NutritionModule {}