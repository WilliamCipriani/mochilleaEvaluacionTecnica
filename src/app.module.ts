import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigitalGuideModule } from './digital-guide/digital-guide.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mochillea:Welcome2024@typsa.lnco923.mongodb.net/'),
    DigitalGuideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
