import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule, CommonModule],
})
export class AppModule {}
