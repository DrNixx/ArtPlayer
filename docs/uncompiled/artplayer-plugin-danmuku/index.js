// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gEVO5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _danmuku = require("./danmuku");
var _danmukuDefault = parcelHelpers.interopDefault(_danmuku);
function artplayerPluginDanmuku(option) {
    return (art)=>{
        const danmuku = new _danmukuDefault.default(art, option);
        return {
            name: 'artplayerPluginDanmuku',
            emit: danmuku.emit.bind(danmuku),
            config: danmuku.config.bind(danmuku),
            hide: danmuku.hide.bind(danmuku),
            show: danmuku.show.bind(danmuku),
            get isHide () {
                return danmuku.isHide;
            }
        };
    };
}
exports.default = artplayerPluginDanmuku;
window['artplayerPluginDanmuku'] = artplayerPluginDanmuku;

},{"./danmuku":"igPca","@parcel/transformer-js/src/esmodule-helpers.js":"6SDkN"}],"igPca":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _i18N = require("./i18n");
var _i18NDefault = parcelHelpers.interopDefault(_i18N);
var _bilibili = require("./bilibili");
var _getDanmuTop = require("./getDanmuTop");
var _getDanmuTopDefault = parcelHelpers.interopDefault(_getDanmuTop);
class Danmuku {
    constructor(art, option){
        art.i18n.update(_i18NDefault.default);
        this.art = art;
        this.utils = art.constructor.utils;
        this.validator = art.constructor.validator;
        this.queue = [];
        this.option = {};
        this.config(option);
        this.isStop = false;
        this.isHide = false;
        this.animationFrameTimer = null;
        this.$danmuku = art.template.$danmuku;
        art.on('video:play', this.start.bind(this));
        art.on('video:playing', this.start.bind(this));
        art.on('video:pause', this.stop.bind(this));
        art.on('video:waiting', this.stop.bind(this));
        art.on('resize', this.resize.bind(this));
        art.on('destroy', this.stop.bind(this));
        art.on('fullscreen', this.reset.bind(this));
        art.on('fullscreenWeb', this.reset.bind(this));
        this.load();
    }
    static get option() {
        return {
            danmuku: [],
            speed: 5,
            margin: [
                10,
                100
            ],
            opacity: 1,
            fontSize: 25,
            filter: ()=>true
            ,
            synchronousPlayback: false
        };
    }
    static get scheme() {
        return {
            danmuku: 'array|function|string',
            speed: 'number',
            margin: 'array',
            opacity: 'number',
            fontSize: 'number',
            filter: 'function',
            synchronousPlayback: 'boolean'
        };
    }
    get isRotate() {
        return this.art.plugins.autoOrientation && this.art.plugins.autoOrientation.state;
    }
    get marginTop() {
        const { clamp  } = this.utils;
        const { $player  } = this.art.template;
        const value = this.option.margin[0];
        if (typeof value === 'number') return clamp(value, 0, $player.clientHeight);
        if (typeof value === 'string' && value.endsWith('%')) {
            const ratio = parseFloat(value) / 100;
            return clamp($player.clientHeight * ratio, 0, $player.clientHeight);
        }
        return Danmuku.option.margin[0];
    }
    get marginBottom() {
        const { clamp  } = this.utils;
        const { $player  } = this.art.template;
        const value = this.option.margin[1];
        if (typeof value === 'number') return clamp(value, 0, $player.clientHeight);
        if (typeof value === 'string' && value.endsWith('%')) {
            const ratio = parseFloat(value) / 100;
            return clamp($player.clientHeight * ratio, 0, $player.clientHeight);
        }
        return Danmuku.option.margin[1];
    }
    filter(state, callback) {
        return this.queue.filter((danmu)=>danmu.$state === state
        ).map(callback);
    }
    getRect(ref, key) {
        const rect = ref.getBoundingClientRect();
        const bottom = rect.bottom;
        const height = rect.height;
        const left = rect.left;
        const right = rect.right;
        const top = rect.top;
        const width = rect.width;
        const x = rect.x;
        const y = rect.y;
        const result = {
            bottom,
            height,
            left,
            right,
            top,
            width,
            x,
            y
        };
        if (this.isRotate) {
            result.bottom = left;
            result.left = top;
            result.top = right;
            result.right = bottom;
            result.height = width;
            result.width = height;
            result.x = y;
            result.y = x;
        }
        return key ? result[key] : result;
    }
    getDanmuRef() {
        const result = this.queue.find((danmu)=>{
            return danmu.$ref && danmu.$state === 'wait';
        });
        if (result) {
            const { $ref  } = result;
            result.$ref = null;
            return $ref;
        }
        const $ref = document.createElement('div');
        $ref.style.cssText = `
            user-select: none;
            position: absolute;
            white-space: pre;
            pointer-events: none;
            perspective: 500px;
            display: inline-block;
            will-change: transform;
            font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;
            font-weight: normal;
            line-height: 1.125;
            text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;
        `;
        return $ref;
    }
    async load() {
        this.queue = [];
        this.$danmuku.innerText = '';
        let danmus = [];
        try {
            if (typeof this.option.danmuku === 'function') danmus = await this.option.danmuku();
            else if (typeof this.option.danmuku.then === 'function') danmus = await this.option.danmuku;
            else if (typeof this.option.danmuku === 'string') danmus = await _bilibili.bilibiliDanmuParseFromUrl(this.option.danmuku);
            else danmus = this.option.danmuku;
            this.utils.errorHandle(Array.isArray(danmus), 'Danmuku need return an array as result');
            this.art.emit('artplayerPluginDanmuku:loaded', danmus);
            danmus.forEach(this.emit.bind(this));
        } catch (error) {
            this.art.emit('artplayerPluginDanmuku:error', error);
            throw error;
        }
        return this;
    }
    config(option) {
        const { clamp  } = this.utils;
        this.option = Object.assign({}, Danmuku.option, this.option, option);
        this.validator(this.option, Danmuku.scheme);
        this.option.speed = clamp(this.option.speed, 1, 10);
        this.option.opacity = clamp(this.option.opacity, 0, 1);
        this.option.fontSize = clamp(this.option.fontSize, 0, 100);
        this.art.emit('artplayerPluginDanmuku:config', this.option);
        return this;
    }
    continue() {
        const { $player  } = this.art.template;
        const playerWidth = this.getRect($player, 'width');
        this.filter('stop', (danmu)=>{
            danmu.$state = 'emit';
            danmu.$ref.dataset.state = 'emit';
            danmu.$lastStartTime = Date.now();
            switch(danmu.mode){
                case 0:
                    {
                        const danmuWidth = this.getRect(danmu.$ref, 'width');
                        const translateX = playerWidth + danmuWidth;
                        danmu.$ref.style.transform = `translateX(${-translateX}px) translateY(0px) translateZ(0px)`;
                        danmu.$ref.style.transition = `transform ${danmu.$restTime}s linear 0s`;
                        break;
                    }
                default:
                    break;
            }
        });
        return this;
    }
    suspend() {
        const { $player  } = this.art.template;
        this.filter('emit', (danmu)=>{
            danmu.$state = 'stop';
            danmu.$ref.dataset.state = 'stop';
            switch(danmu.mode){
                case 0:
                    {
                        const { left: playerLeft , width: playerWidth  } = this.getRect($player);
                        const { left: danmuLeft  } = this.getRect(danmu.$ref);
                        const translateX = playerWidth - (danmuLeft - playerLeft);
                        danmu.$ref.style.transform = `translateX(${-translateX}px) translateY(0px) translateZ(0px)`;
                        danmu.$ref.style.transition = 'transform 0s linear 0s';
                        break;
                    }
                default:
                    break;
            }
        });
        return this;
    }
    resize() {
        const { $player  } = this.art.template;
        const { width: playerWidth  } = this.getRect($player);
        this.filter('wait', (danmu)=>{
            if (danmu.$ref) {
                danmu.$ref.style.border = 'none';
                danmu.$ref.style.left = `${playerWidth}px`;
                danmu.$ref.style.marginLeft = '0px';
                danmu.$ref.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                danmu.$ref.style.transition = 'transform 0s linear 0s';
            }
        });
        return this;
    }
    reset() {
        const { $player  } = this.art.template;
        const { width: playerWidth  } = this.getRect($player);
        this.filter('emit', (danmu)=>{
            if (danmu.$ref) {
                danmu.$state = 'wait';
                danmu.$ref.dataset.state = 'wait';
                danmu.$ref.style.border = 'none';
                danmu.$ref.style.visibility = 'hidden';
                danmu.$ref.style.left = `${playerWidth}px`;
                danmu.$ref.style.marginLeft = '0px';
                danmu.$ref.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                danmu.$ref.style.transition = 'transform 0s linear 0s';
            }
        });
    }
    update() {
        const { $player  } = this.art.template;
        this.animationFrameTimer = window.requestAnimationFrame(()=>{
            if (this.art.playing && !this.isHide) {
                const playerWidth = this.getRect($player, 'width');
                this.filter('emit', (danmu)=>{
                    const time = (Date.now() - danmu.$lastStartTime) / 1000;
                    danmu.$emitTime += time;
                    danmu.$restTime -= time;
                    danmu.$lastStartTime = Date.now();
                    if (danmu.$restTime <= 0) {
                        danmu.$state = 'wait';
                        danmu.$ref.dataset.state = 'wait';
                        danmu.$ref.style.border = 'none';
                        danmu.$ref.style.visibility = 'hidden';
                        danmu.$ref.style.left = `${playerWidth}px`;
                        danmu.$ref.style.marginLeft = '0px';
                        danmu.$ref.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                        danmu.$ref.style.transition = 'transform 0s linear 0s';
                    }
                });
                this.queue.filter((danmu)=>this.art.currentTime + 0.1 >= danmu.time && danmu.time >= this.art.currentTime - 0.1 && danmu.$state === 'wait'
                ).forEach((danmu)=>{
                    danmu.$ref = this.getDanmuRef(this.queue);
                    this.$danmuku.appendChild(danmu.$ref);
                    danmu.$ref.style.visibility = 'visible';
                    danmu.$ref.style.opacity = this.option.opacity;
                    danmu.$ref.style.fontSize = `${this.option.fontSize || danmu.fontSize}px`;
                    danmu.$ref.innerText = danmu.text;
                    danmu.$ref.style.color = danmu.color || '#fff';
                    danmu.$ref.style.border = danmu.border ? `1px solid ${danmu.color || '#fff'}` : 'none';
                    danmu.$restTime = this.option.synchronousPlayback && this.art.playbackRate ? this.option.speed / Number(this.art.playbackRate) : this.option.speed;
                    const danmuWidth = this.getRect(danmu.$ref, 'width');
                    const danmuTop = _getDanmuTopDefault.default(this, danmu);
                    danmu.$state = 'emit';
                    danmu.$ref.dataset.state = 'emit';
                    danmu.$lastStartTime = Date.now();
                    switch(danmu.mode){
                        case 0:
                            {
                                danmu.$ref.style.left = `${playerWidth}px`;
                                danmu.$ref.style.top = `${danmuTop}px`;
                                const translateX = playerWidth + danmuWidth;
                                danmu.$ref.style.transform = `translateX(${-translateX}px) translateY(0px) translateZ(0px)`;
                                danmu.$ref.style.transition = `transform ${danmu.$restTime}s linear 0s`;
                                break;
                            }
                        case 1:
                            danmu.$ref.style.top = `${danmuTop}px`;
                            danmu.$ref.style.left = '50%';
                            danmu.$ref.style.marginLeft = `-${danmuWidth / 2}px`;
                            break;
                        default:
                            break;
                    }
                });
            }
            if (!this.isStop) this.update();
        });
        return this;
    }
    stop() {
        this.isStop = true;
        this.suspend();
        window.cancelAnimationFrame(this.animationFrameTimer);
        this.art.emit('artplayerPluginDanmuku:stop');
        return this;
    }
    start() {
        this.isStop = false;
        this.continue();
        this.update();
        this.art.emit('artplayerPluginDanmuku:start');
        return this;
    }
    show() {
        this.isHide = false;
        this.$danmuku.style.display = 'block';
        this.art.emit('artplayerPluginDanmuku:show');
        return this;
    }
    hide() {
        this.isHide = true;
        this.$danmuku.style.display = 'none';
        this.art.emit('artplayerPluginDanmuku:hide');
        return this;
    }
    emit(danmu) {
        this.validator(danmu, {
            text: 'string',
            mode: 'number|undefined',
            color: 'string|undefined',
            time: 'number|undefined',
            border: 'boolean|undefined'
        });
        if (!this.option.filter(danmu)) return this;
        if (!danmu.text.trim()) return this;
        if (danmu.time) danmu.time = this.utils.clamp(danmu.time, 0, Infinity);
        else danmu.time = this.art.currentTime + 0.5;
        this.queue.push({
            mode: 0,
            ...danmu,
            $state: 'wait',
            $ref: null,
            $emitTime: 0,
            $restTime: 0,
            $lastStartTime: 0
        });
        return this;
    }
}
exports.default = Danmuku;

},{"./i18n":"cJKlZ","./bilibili":"6a8GK","./getDanmuTop":"eLxSm","@parcel/transformer-js/src/esmodule-helpers.js":"6SDkN"}],"cJKlZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    'zh-cn': {
        'Danmu opacity': '弹幕透明度',
        'Danmu speed': '弹幕速度',
        'Danmu size': '弹幕大小',
        'Danmu text cannot be empty': '弹幕文本不能为空',
        'The length of the danmu does not exceed': '弹幕文本字数不能超过',
        'Danmu speed synchronous playback multiple': '弹幕速度同步播放倍数'
    },
    'zh-tw': {
        'Danmu opacity': '彈幕透明度',
        'Danmu speed': '彈幕速度',
        'Danmu size': '弹幕大小',
        'Danmu text cannot be empty': '彈幕文本不能為空',
        'The length of the danmu does not exceed': '彈幕文本字數不能超過',
        'Danmu speed synchronous playback multiple': '彈幕速度同步播放倍數'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6SDkN"}],"6SDkN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6a8GK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMode", ()=>getMode
);
parcelHelpers.export(exports, "bilibiliDanmuParseFromXml", ()=>bilibiliDanmuParseFromXml
);
parcelHelpers.export(exports, "bilibiliDanmuParseFromUrl", ()=>bilibiliDanmuParseFromUrl
);
function getMode(key) {
    switch(key){
        case 1:
        case 2:
        case 3:
            return 0;
        case 4:
        case 5:
            return 1;
        default:
            return 0;
    }
}
function bilibiliDanmuParseFromXml(xmlString) {
    if (typeof xmlString !== 'string') return [];
    const srtList = xmlString.match(/<d([\S ]*?>[\S ]*?)<\/d>/gi);
    return srtList && srtList.length ? srtList.map((item)=>{
        const [, attrStr, text] = item.match(/<d p="(.+)">(.+)<\/d>/);
        const attr = attrStr.split(',');
        return attr.length === 8 && text.trim() ? {
            text,
            time: Number(attr[0]),
            mode: getMode(Number(attr[1])),
            fontSize: Number(attr[2]),
            color: `#${Number(attr[3]).toString(16)}`,
            timestamp: Number(attr[4]),
            pool: Number(attr[5]),
            userID: attr[6],
            rowID: Number(attr[7])
        } : null;
    }) : [];
}
function bilibiliDanmuParseFromUrl(url) {
    return fetch(url).then((res)=>res.text()
    ).then((xmlString)=>bilibiliDanmuParseFromXml(xmlString)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6SDkN"}],"eLxSm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function calculatedTop(danmus, danmu) {
    // 方法1：两两对比，只要找到间隔能塞进一条弹幕的高度的，则马上插入
    for(let index = 1; index < danmus.length; index += 1){
        const item = danmus[index];
        const prev = danmus[index - 1];
        const prevBottom = prev.top + prev.height;
        const diff = item.top - prevBottom;
        if (diff >= danmu.$ref.clientHeight) return prevBottom;
    }
    // 方法2：找出所有弹幕的右侧最多空白的的位置插入
    const topMap = [];
    for(let index1 = 1; index1 < danmus.length - 1; index1 += 1){
        const item = danmus[index1];
        if (topMap.length) {
            const last = topMap[topMap.length - 1];
            if (last[0].top === item.top) last.push(item);
            else topMap.push([
                item
            ]);
        } else topMap.push([
            item
        ]);
    }
    switch(danmu.mode){
        case 0:
            topMap.sort((prev, next)=>{
                const nextMinRight = Math.min(...next.map((item)=>item.right
                ));
                const prevMinRight = Math.min(...prev.map((item)=>item.right
                ));
                return nextMinRight * next.length - prevMinRight * prev.length;
            });
            break;
        case 1:
            topMap.sort((prev, next)=>{
                const nextMaxWidth = Math.max(...next.map((item)=>item.width
                ));
                const prevMaxWidth = Math.max(...prev.map((item)=>item.width
                ));
                return prevMaxWidth * prev.length - nextMaxWidth * next.length;
            });
            break;
        default:
            break;
    }
    return topMap[0][0].top;
}
function getDanmuTop(ins, danmu) {
    const { $player  } = ins.art.template;
    const danmus = ins.queue.filter((item)=>{
        return item.$ref && item.$state === 'emit' && item.mode === danmu.mode && item.$ref.offsetTop <= $player.clientHeight - ins.marginBottom;
    }).map((item)=>{
        return {
            top: item.$ref.offsetTop,
            left: item.$ref.offsetLeft,
            height: item.$ref.clientHeight,
            width: item.$ref.clientWidth,
            right: $player.clientWidth - item.$ref.offsetLeft - item.$ref.clientWidth
        };
    }).sort((prev, next)=>prev.top - next.top
    );
    if (danmus.length === 0) return ins.marginTop;
    danmus.unshift({
        top: 0,
        left: 0,
        right: 0,
        height: ins.marginTop,
        width: $player.clientWidth
    });
    danmus.push({
        top: $player.clientHeight - ins.marginBottom,
        left: 0,
        right: 0,
        height: ins.marginBottom,
        width: $player.clientWidth
    });
    return calculatedTop(danmus, danmu);
}
exports.default = getDanmuTop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6SDkN"}]},["gEVO5"], "gEVO5", "parcelRequire93cf")

//# sourceMappingURL=index.js.map