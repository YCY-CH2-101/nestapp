"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryEntity", {
    enumerable: true,
    get: function() {
        return CategoryEntity;
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
let CategoryEntity = class CategoryEntity extends _typeorm.BaseEntity {
    constructor(...args){
        super(...args);
        this.depth = 0;
    }
};
_ts_decorate([
    (0, _classtransformer.Expose)({
        groups: [
            'category-list'
        ]
    })
], CategoryEntity.prototype, "depth", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.PrimaryColumn)({
        type: 'varchar',
        generated: 'uuid',
        length: 36
    }),
    _ts_metadata("design:type", String)
], CategoryEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)(),
    (0, _typeorm.Column)({
        comment: '分类名称'
    }),
    _ts_metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
_ts_decorate([
    (0, _typeorm.TreeParent)({
        onDelete: 'NO ACTION'
    }),
    _ts_metadata("design:type", Object)
], CategoryEntity.prototype, "parent", void 0);
_ts_decorate([
    (0, _typeorm.TreeChildren)({
        cascade: true
    }),
    _ts_metadata("design:type", Array)
], CategoryEntity.prototype, "children", void 0);
_ts_decorate([
    (0, _classtransformer.Expose)({
        groups: [
            'category-tree',
            'category-list',
            'category-detail'
        ]
    }),
    (0, _typeorm.Column)({
        comment: '分类排序',
        default: 0
    }),
    _ts_metadata("design:type", Number)
], CategoryEntity.prototype, "customOrder", void 0);
_ts_decorate([
    (0, _typeorm.OneToMany)(()=>_postentity.PostEntity, (post)=>post.category, {
        cascade: true
    }),
    _ts_metadata("design:type", typeof _typeorm.Relation === "undefined" ? Object : _typeorm.Relation)
], CategoryEntity.prototype, "posts", void 0);
CategoryEntity = _ts_decorate([
    (0, _classtransformer.Exclude)(),
    (0, _typeorm.Tree)('materialized-path'),
    (0, _typeorm.Entity)('content_categories')
], CategoryEntity);
