"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CommentEntity", {
    enumerable: true,
    get: function() {
        return CommentEntity;
    }
});
const _typeorm = require("typeorm");
const _postentity = require("./post.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CommentEntity = class CommentEntity extends _typeorm.BaseEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryColumn)({
        type: 'varchar',
        generated: 'uuid',
        length: 36
    }),
    _ts_metadata("design:type", String)
], CommentEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        comment: '评论内容',
        type: 'text'
    }),
    _ts_metadata("design:type", String)
], CommentEntity.prototype, "body", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        comment: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CommentEntity.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _typeorm.ManyToOne)(()=>_postentity.PostEntity, (post)=>post.comments, {
        // 文章不能为空
        nullable: false,
        // 跟随父表删除与更新
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    _ts_metadata("design:type", typeof Relation === "undefined" ? Object : Relation)
], CommentEntity.prototype, "post", void 0);
CommentEntity = _ts_decorate([
    (0, _typeorm.Entity)('content_comments')
], CommentEntity);
