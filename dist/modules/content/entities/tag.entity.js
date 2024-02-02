"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TagEntity", {
    enumerable: true,
    get: function() {
        return TagEntity;
    }
});
const _typeorm = require("typeorm");
const _postentity = require("./post.entity");
const _classtransformer = require("class-transformer");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let TagEntity = class TagEntity {
};
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.PrimaryColumn)({
        type: 'varchar',
        generated: 'uuid',
        length: 36
    }),
    _ts_metadata("design:type", String)
], TagEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '标签名称'
    }),
    _ts_metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '标签描述',
        nullable: true
    }),
    _ts_metadata("design:type", String)
], TagEntity.prototype, "description", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    _ts_metadata("design:type", Number)
], TagEntity.prototype, "postCount", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_postentity.PostEntity, (post)=>post.tags),
    _ts_metadata("design:type", typeof _typeorm.Relation === "undefined" ? Object : _typeorm.Relation)
], TagEntity.prototype, "posts", void 0);
TagEntity = _ts_decorate([
    (0, _classtransformer.Exclude)(),
    (0, _typeorm.Entity)('content_tags')
], TagEntity);
