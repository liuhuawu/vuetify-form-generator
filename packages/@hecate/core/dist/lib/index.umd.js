!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('moment'),
              require('lodash'),
              require('shortid'),
              require('sweetalert2'),
              require('@babel/runtime-corejs3/core-js/json/stringify'),
              require('@babel/runtime-corejs3/core-js/instance/keys'),
              require('@babel/runtime-corejs3/core-js/promise'),
              require('localforage'),
              require('@babel/runtime-corejs3/core-js/instance/splice'),
              require('@babel/runtime-corejs3/core-js/instance/find-index'),
              require('@babel/runtime-corejs3/core-js/instance/find'),
              require('@babel/runtime-corejs3/core-js/instance/sort'),
              require('@babel/runtime-corejs3/core-js/object/keys'),
              require('@babel/runtime-corejs3/core-js/instance/map'),
              require('@babel/runtime-corejs3/core-js/instance/for-each')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'moment',
              'lodash',
              'shortid',
              'sweetalert2',
              '@babel/runtime-corejs3/core-js/json/stringify',
              '@babel/runtime-corejs3/core-js/instance/keys',
              '@babel/runtime-corejs3/core-js/promise',
              'localforage',
              '@babel/runtime-corejs3/core-js/instance/splice',
              '@babel/runtime-corejs3/core-js/instance/find-index',
              '@babel/runtime-corejs3/core-js/instance/find',
              '@babel/runtime-corejs3/core-js/instance/sort',
              '@babel/runtime-corejs3/core-js/object/keys',
              '@babel/runtime-corejs3/core-js/instance/map',
              '@babel/runtime-corejs3/core-js/instance/for-each',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).lib = {}),
              e.moment,
              e.lodash,
              e.shortid,
              e.Swal,
              e._JSON$stringify,
              e._keysInstanceProperty,
              e._Promise,
              e.localForage,
              e._spliceInstanceProperty,
              e._findIndexInstanceProperty,
              e._findInstanceProperty,
              e._sortInstanceProperty,
              e._Object$keys,
              e._mapInstanceProperty,
              e._forEachInstanceProperty
          );
})(this, function (e, t, n, r, o, c, i, u, a, f, s, l, d, m, b, j) {
    'use strict';
    function p(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    function h(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function (n) {
                    if ('default' !== n) {
                        var r = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(
                            t,
                            n,
                            r.get
                                ? r
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return e[n];
                                      },
                                  }
                        );
                    }
                }),
            (t.default = e),
            Object.freeze(t)
        );
    }
    var y = p(t),
        g = h(n),
        I = p(r),
        q = p(o),
        v = p(c),
        w = p(i),
        O = p(u),
        _ = p(a),
        P = p(f),
        S = p(s),
        k = p(l),
        x = p(d),
        E = p(m),
        D = p(b),
        z = p(j);
    require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js');
    var A = require('@babel/runtime-corejs3/core-js/instance/slice'),
        B = require('@babel/runtime-corejs3/helpers/typeof');
    String.prototype.format = function (e) {
        var t = function (e, t) {
            return (
                (t = 'object' === B(t) ? t : A(Array.prototype).call(arguments, 1)),
                e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, n) {
                    return '{{' == e ? '{' : '}}' == e ? '}' : t[n];
                })
            );
        };
        return t(this, (e = 'object' === B(e) ? e : A(Array.prototype).call(arguments, 0)));
    };
    var J = q.default,
        M = {
            information: function (e, t) {
                return J.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 });
            },
            info: function (e) {
                this.information(e, 'info');
            },
            error: function (e) {
                this.information(e, 'error');
            },
            warning: function (e) {
                this.information(e, 'warning');
            },
            success: function (e) {
                this.information(e, 'success');
            },
            question: function (e) {
                this.information(e, 'question');
            },
        },
        N = {
            getItem: function (e) {
                return new O.default(function (t, n) {
                    _.default
                        .getItem(e)
                        .then(function (e) {
                            t(e);
                        })
                        .catch(function (e) {
                            n(e);
                        });
                });
            },
            setItem: function (e, t) {
                return new O.default(function (n, r) {
                    _.default
                        .setItem(e, t)
                        .then(function (e) {
                            n(e);
                        })
                        .catch(function (e) {
                            r(e);
                        });
                });
            },
            removeItem: function (e) {
                return new O.default(function (t, n) {
                    _.default
                        .removeItem(e)
                        .then(function () {
                            t();
                        })
                        .catch(function (e) {
                            n(e);
                        });
                });
            },
            clear: function () {
                return new O.default(function (e, t) {
                    _.default
                        .clear()
                        .then(function () {
                            e();
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            length: function () {
                return new O.default(function (e, t) {
                    _.default
                        .length()
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            key: function (e) {
                return new O.default(function (t, n) {
                    _.default
                        .key(e)
                        .then(function (e) {
                            t(e);
                        })
                        .catch(function (e) {
                            n(e);
                        });
                });
            },
            keys: function () {
                return new O.default(function (e, t) {
                    w.default(_.default)
                        .call(_.default)
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            iterate: function () {
                return new O.default(function (e, t) {
                    _.default
                        .iterate(function (t, n, r) {
                            e([t, n, r]);
                        })
                        .then(function (t) {
                            e(t);
                        })
                        .catch(function (e) {
                            t(e);
                        });
                });
            },
            setDriver: function (e) {
                return new O.default(function (t, n) {
                    t(_.default.setDriver(e));
                });
            },
            config: function (e) {
                return new O.default(function (t, n) {
                    t(_.default.config(e));
                });
            },
            createInstance: function (e) {
                return new O.default(function (t, n) {
                    t(_.default.createInstance(e));
                });
            },
        },
        T = {
            setObject: function (e, t) {
                localStorage.setItem(e, v.default(t));
            },
            getObject: function (e) {
                var t = localStorage.getItem(e);
                return t ? JSON.parse(t) : null;
            },
            setItem: function (e, t) {
                localStorage.setItem(e, t);
            },
            getItem: function (e) {
                return localStorage.getItem(e);
            },
            removeItem: function (e) {
                localStorage.removeItem(e);
            },
            clear: function () {
                localStorage.clear();
            },
            isExist: function (e) {
                return !(!e || !(e in localStorage));
            },
        },
        $ = {
            array: {
                groupBy: function (e, t) {
                    var n,
                        r = {};
                    return (
                        z.default(e).call(e, function (e) {
                            var n = t(e);
                            (r[n] = r[n] || []), r[n].push(e);
                        }),
                        D.default((n = E.default(r))).call(n, function (e) {
                            return r[e];
                        })
                    );
                },
                sort: function (e, t) {
                    return x.default(e).call(e, function (e, n) {
                        var r = e[t],
                            o = n[t];
                        return r < o ? -1 : r > o ? 1 : 0;
                    });
                },
                find: function (e, t, n) {
                    return k.default(e).call(e, function (e) {
                        return e[n] === t[n];
                    });
                },
                remove: function (e, t, n) {
                    var r = S.default(e).call(e, function (e) {
                        return e[n] === t[n];
                    });
                    return P.default(e).call(e, r, 1), e;
                },
            },
            object: {
                isEmpty: function (e) {
                    if (e) {
                        var t = E.default(e);
                        return !(t && t.length > 0);
                    }
                    return !0;
                },
            },
        };
    y.default.locale('zh-cn'),
        Object.defineProperty(e, 'moment', {
            enumerable: !0,
            get: function () {
                return y.default;
            },
        }),
        (e.lodash = g),
        Object.defineProperty(e, 'shortid', {
            enumerable: !0,
            get: function () {
                return I.default;
            },
        }),
        (e.notify = M),
        (e.storage = N),
        (e.storageSync = T),
        (e.swal = J),
        (e.tools = $),
        Object.defineProperty(e, '__esModule', { value: !0 });
});