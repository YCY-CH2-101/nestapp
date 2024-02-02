import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany, Relation, Tree, TreeParent, TreeChildren  } from "typeorm";
import { PostEntity } from "./post.entity";
import { Exclude, Expose } from "class-transformer";

@Exclude()
@Tree('materialized-path')
@Entity('content_categories')
export class CategoryEntity extends BaseEntity {
    @Expose({ groups: ['category-list'] })
    depth = 0;

    @Expose()
    @PrimaryColumn({ type: 'varchar', generated: 'uuid', length: 36 })
    id: string;

    @Expose()
    @Column({ comment: '分类名称' })
    name: string;

    @TreeParent({ onDelete: 'NO ACTION' })
    parent: Relation<CategoryEntity> | null;

    @TreeChildren({ cascade: true })
    children: Relation<CategoryEntity>[];

    @Expose({ groups: ['category-tree', 'category-list', 'category-detail'] })
    @Column({ comment: '分类排序', default: 0 })
    customOrder: number;

    @OneToMany(() => PostEntity, (post) => post.category, {
        cascade: true,
    })
    posts: Relation<PostEntity[]>;
}