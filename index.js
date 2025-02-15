"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var md5 = require("js-md5");
var js_sha256_1 = require("js-sha256");
var js_sha512_1 = require("js-sha512");
var AxiosDigest = (function () {
    function AxiosDigest(username, passwd, customAxios) {
        this.axios = customAxios !== undefined ? customAxios : axios_1.default;
        this.username = username;
        this.passwd = passwd;
    }
    Object.defineProperty(AxiosDigest.prototype, "info", {
        get: function () {
            return { username: this.username, passwd: '***' };
        },
        set: function (d) {
            this.username = d.username;
            this.passwd = d.passwd;
        },
        enumerable: false,
        configurable: true
    });
    AxiosDigest.prototype.get = function (path, config) {
        return __awaiter(this, void 0, void 0, function () {
            var v_1, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.axios.get(path, config)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        v_1 = _a.sent();
                        c = this.getAuthHeader(this.getWwwAuth(v_1), 'GET', path, config);
                        return [2, this.axios.get(path, c)];
                    case 3: return [2];
                }
            });
        });
    };
    AxiosDigest.prototype.post = function (path, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var v_2, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.axios.post(path, data, config)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        v_2 = _a.sent();
                        c = this.getAuthHeader(this.getWwwAuth(v_2), 'POST', path, config);
                        return [2, this.axios.post(path, data, c)];
                    case 3: return [2];
                }
            });
        });
    };
    AxiosDigest.prototype.put = function (path, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var v_3, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.axios.put(path, data, config)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        v_3 = _a.sent();
                        c = this.getAuthHeader(this.getWwwAuth(v_3), 'PUT', path, config);
                        return [2, this.axios.put(path, data, c)];
                    case 3: return [2];
                }
            });
        });
    };
    AxiosDigest.prototype.delete = function (path, config) {
        return __awaiter(this, void 0, void 0, function () {
            var v_4, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.axios.delete(path, config)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        v_4 = _a.sent();
                        c = this.getAuthHeader(this.getWwwAuth(v_4), 'DELETE', path, config);
                        return [2, this.axios.delete(path, c)];
                    case 3: return [2];
                }
            });
        });
    };
    AxiosDigest.prototype.head = function (path, config) {
        var _this = this;
        return this.axios.head(path, config).catch(this.getWwwAuth).then(function (wwwAuth) {
            var c = _this.getAuthHeader(wwwAuth, 'HEAD', path, config);
            return _this.axios.head(path, c);
        });
    };
    AxiosDigest.prototype.patch = function (path, data, config) {
        var _this = this;
        return this.axios.patch(path, data, config).catch(this.getWwwAuth).then(function (wwwAuth) {
            var c = _this.getAuthHeader(wwwAuth, 'PATCH', path, config);
            return _this.axios.patch(path, data, c);
        });
    };
    AxiosDigest.prototype.getWwwAuth = function (r) {
        var status = (r.response || {}).status;
        if (status === 401) {
            return r.response.headers['www-authenticate'];
        }
        throw r;
    };
    AxiosDigest.prototype.getAuthHeader = function (authHeader, method, url, config) {
        var paramsString = authHeader.split(/\s*,?\s*Digest\s*/).filter(function (v) { return v !== ''; });
        var paramsArray = paramsString.map(function (v) { return v.split(/\s*,(?=(?:[^"]*"[^"]*")*)\s*/); });
        var paramsKvArray = paramsArray.map(function (v) { return v.map(function (value) {
            var ret = value.split(/\s*=(?:(?=[^"]*"[^"]*")|(?!"))\s*/, 2).map(function (v2) { return v2.replace(/^"/, '').replace(/"$/, ''); });
            return [ret[0], ret[1]];
        }); });
        var paramsMapArray = paramsKvArray.map(function (v) {
            var t = {};
            v.forEach(function (w) {
                t[w[0]] = w[1];
            });
            return t;
        });
        var calams = ['realm', 'nonce', 'qop', 'opaque'];
        var paramsCalamsOk = paramsMapArray.map(function (v) {
            if (!('algorithm' in v)) {
                v.algorithm = 'MD5';
            }
            return v;
        }).filter(function (v) { return ['MD5', 'SHA-256', 'SHA-512-256', 'SHA-512'].findIndex(function (i) { return i === v.algorithm; }) >= 0; })
            .filter(function (v) { return calams.filter(function (value) { return !(value in v); }).length === 0; })
            .filter(function (v) { return v.qop.split(/\s*,\s*/).filter(function (v2) { return v2 === 'auth'; }).length !== 0; });
        if (paramsCalamsOk.length === 0) {
            throw new Error('Auth params error.');
        }
        paramsCalamsOk.sort(function (a, b) {
            var _a = [a.algorithm, b.algorithm].map(function (v) {
                if (v === 'MD5')
                    return 0;
                if (v === 'SHA-256')
                    return 1;
                if (v === 'SHA-512-256')
                    return 2;
                return 3;
            }), aEval = _a[0], bEval = _a[1];
            return bEval - aEval;
        });
        var params = paramsCalamsOk[0];
        var username = this.username;
        var passwd = this.passwd;
        var realm = params.realm, nonce = params.nonce, opaque = params.opaque, algorithm = params.algorithm;
        var uri = url.split(/^https?:\/\/[^/]+/).filter(function (v) { return v !== ''; })[0];
        var cnonce = Math.random().toString(36).substring(2, 10);
        var nc = '00000001';
        var qop = 'auth';
        var hashHex = (function () {
            if (algorithm === 'MD5')
                return md5;
            if (algorithm === 'SHA-256')
                return js_sha256_1.sha256;
            if (algorithm === 'SHA-512-256')
                return js_sha512_1.sha512_256;
            return js_sha512_1.sha512;
        })();
        var hashHexArray = function (data) { return hashHex(data.join(':')); };
        var a1 = [username, realm, passwd];
        var a1hash = hashHexArray(a1);
        var a2 = [method, uri];
        var a2hash = hashHexArray(a2);
        var a3 = [a1hash, nonce, nc, cnonce, qop, a2hash];
        var response = hashHexArray(a3);
        var dh = {
            realm: realm,
            nonce: nonce,
            uri: uri,
            username: username,
            cnonce: cnonce,
            nc: nc,
            qop: qop,
            algorithm: algorithm,
            response: response,
            opaque: opaque,
        };
        var auth = "Digest ".concat(Object.keys(dh).map(function (v) { return "".concat(v, "=\"").concat(dh[v], "\""); }).join(', '));
        if (config === undefined) {
            return { headers: { Authorization: auth } };
        }
        if (config.headers === undefined) {
            config.headers = {};
        }
        config.headers.Authorization = auth;
        return config;
    };
    return AxiosDigest;
}());
exports.default = AxiosDigest;
//# sourceMappingURL=index.js.map