// src/modules/content/content.module.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ContentModule", {
    enumerable: true,
    get: function() {
        return ContentModule;
    }
});
const _common = require("@nestjs/common");
const _repositories = /*#__PURE__*/ _interop_require_wildcard(require("./repositories"));
const _services = require("./services");
const _typeorm = require("@nestjs/typeorm");
const _databasemodule = require("../database/database.module");
const _postcontroller = require("./controllers/post.controller");
const _postsubscriber = require("./subscribers/post.subscriber");
const _entities = /*#__PURE__*/ _interop_require_wildcard(require("./entities"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ContentModule = class ContentModule {
};
ContentModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            // TypeOrmModule.forFeature([PostEntity]),
            // DatabaseModule.forRepository([PostRepository]),
            _typeorm.TypeOrmModule.forFeature(Object.values(_entities)),
            _databasemodule.DatabaseModule.forRepository(Object.values(_repositories))
        ],
        controllers: [
            _postcontroller.PostController
        ],
        providers: [
            _services.PostService,
            _postsubscriber.PostSubscriber,
            _services.SanitizeService
        ],
        exports: [
            _services.PostService,
            _databasemodule.DatabaseModule.forRepository([
                _repositories.PostRepository
            ])
        ]
    })
], ContentModule);
