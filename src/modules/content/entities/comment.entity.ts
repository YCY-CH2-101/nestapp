import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { PostEntity } from "./post.entity";

import type { Relation } from 'typeorm';

@Entity('content_comments')
export class CommentEntity extends BaseEntity {
    @PrimaryColumn({ type: 'varchar', generated: 'uuid', length: 36 })
    id: string;

    @Column({ comment: '评论内容', type: 'text' })
    body: string;
  
    @CreateDateColumn({
        comment: '创建时间',
    })
    createdAt: Date;

    @ManyToOne(() => PostEntity, (post) => post.comments, {
        // 文章不能为空
        nullable: false,
        // 跟随父表删除与更新
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    post: Relation<PostEntity>;
}