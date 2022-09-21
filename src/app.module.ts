import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ItemsModule,
    CommonModule,
    ConfigModule.forRoot({ load: [EnvConfiguration] }),
  ],
})
export class AppModule {}
