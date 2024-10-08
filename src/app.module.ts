import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NutritionModule } from './modules/nutrition.module';
import { ConfigModule } from '@nestjs/config';




@Module({
  imports: [NutritionModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
