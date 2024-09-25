import { Body, Controller, Post } from "@nestjs/common";
import { CreateNutritionService } from '../services/CreateNutrition.service';

export interface DataProps {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
  }

@Controller('nutrition')
export class CreateNutritionController{
    constructor(private readonly createNutritionService: CreateNutritionService) {}

    @Post()
  async handle(@Body() data: DataProps) {
    const { name, weight, height, age, gender, objective, level } = data;

    const nutrition = await this.createNutritionService.execute({
      name,
      weight,
      height,
      age,
      objective,
      gender,
      level,
    });

    return nutrition;
  }

}