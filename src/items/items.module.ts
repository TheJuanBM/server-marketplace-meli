import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  providers: [ItemsService],
  controllers: [ItemsController],
  imports: [CommonModule],
})
export class ItemsModule {}
