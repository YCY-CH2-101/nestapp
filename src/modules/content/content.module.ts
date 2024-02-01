// src/modules/content/content.module.ts
import { Module } from '@nestjs/common';
import { PostRepository } from './repositories';
import { PostService, SanitizeService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { PostController } from './controllers/post.controller';
import { PostSubscriber } from './subscribers/post.subscriber';
import * as entities from './entities';
import * as repositories from './repositories';

@Module({
    imports: [
        // TypeOrmModule.forFeature([PostEntity]),
        // DatabaseModule.forRepository([PostRepository]),
        TypeOrmModule.forFeature(Object.values(entities)),
        DatabaseModule.forRepository(Object.values(repositories)),
    ],
    controllers: [PostController],
    providers: [PostService, PostSubscriber, SanitizeService],
    exports: [PostService, DatabaseModule.forRepository([PostRepository])],
})
export class ContentModule {}
