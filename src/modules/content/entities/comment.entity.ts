import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, TreeChildren, TreeParent, Tree } from "typeorm";
import { PostEntity } from "./post.entity";

import type { Relation } from 'typeorm';
import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
@Tree('materialized-path')
@Entity('content_comments')
export class CommentEntity extends BaseEntity {
    @Expose({ groups: ['comment-list'] })
    depth = 0;
     
    @Expose()
    @PrimaryColumn({ type: 'varchar', generated: 'uuid', length: 36 })
    id: string;

    @Expose()
    @Column({ comment: '评论内容', type: 'text' })
    body: string;
  
    @Expose()
    @Type(() => Date)
    @CreateDateColumn({
        comment: '创建时间',
    })
    createdAt: Date;

    @Expose({ groups: ['comment-detail', 'comment-list'] })
    @TreeParent({ onDelete: 'CASCADE' })
    parent: Relation<CommentEntity> | null;

    @Expose({ groups: ['comment-tree'] })
    @Type(() => CommentEntity)
    @TreeChildren({ cascade: true })
    children: Relation<CommentEntity>[];

    @Expose()
    @ManyToOne(() => PostEntity, (post) => post.comments, {
        // 文章不能为空
        nullable: false,
        // 跟随父表删除与更新
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    post: Relation<PostEntity>
}