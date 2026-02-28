import { Module } from '@nestjs/common';
import { ConfigsModule } from 'src/configs/configs.module';
import { TopicsController } from './topics.controller';

@Module({
    imports: [ConfigsModule],
    controllers: [TopicsController]
})
export class TopicsModule {}
