(window.webpackJsonp = window.webpackJsonp || []).push([
    ['htmlhint'],
    {
        '04ac': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.HTMLParser = t.Reporter = t.HTMLRules = t.HTMLHint = void 0);
            var r = a('3a54');
            t.HTMLParser = r.default;
            var n = a('0633');
            t.Reporter = n.default;
            var i = a('1b80');
            t.HTMLRules = i;
            var s = (function () {
                function e() {
                    (this.rules = {}),
                        (this.defaultRuleset = {
                            'tagname-lowercase': !0,
                            'attr-lowercase': !0,
                            'attr-value-double-quotes': !0,
                            'doctype-first': !0,
                            'tag-pair': !0,
                            'spec-char-escape': !0,
                            'id-unique': !0,
                            'src-not-empty': !0,
                            'attr-no-duplication': !0,
                            'title-require': !0,
                        });
                }
                return (
                    (e.prototype.addRule = function (e) {
                        this.rules[e.id] = e;
                    }),
                    (e.prototype.verify = function (e, t) {
                        void 0 === t && (t = this.defaultRuleset),
                            0 === Object.keys(t).length && (t = this.defaultRuleset),
                            (e = e.replace(/^\s*<!--\s*htmlhint\s+([^\r\n]+?)\s*-->/i, function (e, a) {
                                return (
                                    a.replace(/(?:^|,)\s*([^:,]+)\s*(?:\:\s*([^,\s]+))?/g, function (e, a, r) {
                                        return (t[a] = !(void 0 !== r && r.length > 0) || JSON.parse(r)), '';
                                    }),
                                    ''
                                );
                            }));
                        var a,
                            i = new r.default(),
                            s = new n.default(e, t),
                            o = this.rules;
                        for (var u in t) void 0 !== (a = o[u]) && !1 !== t[u] && a.init(i, s, t[u]);
                        return i.parse(e), s.messages;
                    }),
                    (e.prototype.format = function (e, t) {
                        void 0 === t && (t = {});
                        var a = [],
                            r = { white: '', grey: '', red: '', reset: '' };
                        t.colors && ((r.white = '[37m'), (r.grey = '[90m'), (r.red = '[31m'), (r.reset = '[39m'));
                        var n = t.indent || 0;
                        return (
                            e.forEach(function (e) {
                                var t = e.evidence,
                                    i = e.line,
                                    s = e.col,
                                    u = t.length,
                                    l = s > 41 ? s - 40 : 1,
                                    c = t.length > s + 60 ? s + 60 : u;
                                s < 41 && (c += 40 - s + 1),
                                    (t = t.replace(/\t/g, ' ').substring(l - 1, c)),
                                    l > 1 && ((t = '...' + t), (l -= 3)),
                                    c < u && (t += '...'),
                                    a.push(r.white + o(n) + 'L' + i + ' |' + r.grey + t + r.reset);
                                var d = s - l,
                                    f = t.substring(0, d).match(/[^\u0000-\u00ff]/g);
                                null !== f && (d += f.length),
                                    a.push(
                                        r.white +
                                            o(n) +
                                            o(String(i).length + 3 + d) +
                                            '^ ' +
                                            r.red +
                                            e.message +
                                            ' (' +
                                            e.rule.id +
                                            ')' +
                                            r.reset
                                    );
                            }),
                            a
                        );
                    }),
                    e
                );
            })();
            function o(e, t) {
                return new Array(e + 1).join(t || ' ');
            }
            (t.HTMLHint = new s()),
                Object.keys(i).forEach(function (e) {
                    t.HTMLHint.addRule(i[e]);
                });
        },
        '05f4': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-whitespace',
                    description:
                        'All attributes should be separated by only one space and not have leading/trailing whitespace.',
                    init: function (e, t, a) {
                        var r = this,
                            n = Array.isArray(a) ? a : [];
                        e.addListener('tagstart', function (e) {
                            var a,
                                i = e.attrs,
                                s = e.col + e.tagName.length + 1;
                            i.forEach(function (i) {
                                a = i;
                                var o = i.name;
                                -1 === n.indexOf(o) &&
                                    (i.value.trim() !== i.value &&
                                        t.error(
                                            'The attributes of [ ' + o + ' ] must not have trailing whitespace.',
                                            e.line,
                                            s + a.index,
                                            r,
                                            a.raw
                                        ),
                                    i.value.replace(/ +(?= )/g, '') !== i.value &&
                                        t.error(
                                            'The attributes of [ ' + o + ' ] must be separated by only one space.',
                                            e.line,
                                            s + a.index,
                                            r,
                                            a.raw
                                        ));
                            });
                        });
                    },
                });
        },
        '0633': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = (function () {
                function e(e, t) {
                    (this.html = e), (this.lines = e.split(/\r?\n/));
                    var a = /\r?\n/.exec(e);
                    (this.brLen = null !== a ? a[0].length : 0), (this.ruleset = t), (this.messages = []);
                }
                return (
                    (e.prototype.info = function (e, t, a, r, n) {
                        this.report('info', e, t, a, r, n);
                    }),
                    (e.prototype.warn = function (e, t, a, r, n) {
                        this.report('warning', e, t, a, r, n);
                    }),
                    (e.prototype.error = function (e, t, a, r, n) {
                        this.report('error', e, t, a, r, n);
                    }),
                    (e.prototype.report = function (e, t, a, r, n, i) {
                        for (
                            var s = this.lines, o = this.brLen, u = '', l = 0, c = a - 1, d = s.length;
                            c < d && r > (l = (u = s[c]).length) && a < d;
                            c++
                        )
                            a++, 1 !== (r -= l) && (r -= o);
                        this.messages.push({
                            type: e,
                            message: t,
                            raw: i,
                            evidence: u,
                            line: a,
                            col: r,
                            rule: {
                                id: n.id,
                                description: n.description,
                                link: 'https://github.com/thedaviddias/HTMLHint/wiki/' + n.id,
                            },
                        });
                    }),
                    e
                );
            })();
            t.default = r;
        },
        '07e9': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'doctype-first',
                    description: 'Doctype must be declared first.',
                    init: function (e, t) {
                        var a = this,
                            r = function (n) {
                                'start' === n.type ||
                                    ('text' === n.type && /^\s*$/.test(n.raw)) ||
                                    ((('comment' !== n.type && !1 === n.long) ||
                                        !1 === /^DOCTYPE\s+/i.test(n.content)) &&
                                        t.error('Doctype must be declared first.', n.line, n.col, a, n.raw),
                                    e.removeListener('all', r));
                            };
                        e.addListener('all', r);
                    },
                });
        },
        '10ca': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'tagname-lowercase',
                    description: 'All html element names must be in lowercase.',
                    init: function (e, t, a) {
                        var r = this,
                            n = Array.isArray(a) ? a : [];
                        e.addListener('tagstart,tagend', function (e) {
                            var a = e.tagName;
                            -1 === n.indexOf(a) &&
                                a !== a.toLowerCase() &&
                                t.error(
                                    'The html element name of [ ' + a + ' ] must be in lowercase.',
                                    e.line,
                                    e.col,
                                    r,
                                    e.raw
                                );
                        });
                    },
                });
        },
        '11a3': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'style-disabled',
                    description: '<style> tags cannot be used.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            'style' === e.tagName.toLowerCase() &&
                                t.warn('The <style> tag cannot be used.', e.line, e.col, a, e.raw);
                        });
                    },
                });
        },
        '19b9': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'src-not-empty',
                    description: 'The src attribute of an img(script,link) must have a value.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (
                                var r, n = e.tagName, i = e.attrs, s = e.col + n.length + 1, o = 0, u = i.length;
                                o < u;
                                o++
                            )
                                (r = i[o]),
                                    ((!0 === /^(img|script|embed|bgsound|iframe)$/.test(n) && 'src' === r.name) ||
                                        ('link' === n && 'href' === r.name) ||
                                        ('object' === n && 'data' === r.name)) &&
                                        '' === r.value &&
                                        t.error(
                                            'The attribute [ ' +
                                                r.name +
                                                ' ] of the tag [ ' +
                                                n +
                                                ' ] must have a value.',
                                            e.line,
                                            s + r.index,
                                            a,
                                            r.raw
                                        );
                        });
                    },
                });
        },
        '1b80': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = a('573b');
            Object.defineProperty(t, 'altRequire', {
                enumerable: !0,
                get: function () {
                    return r.default;
                },
            });
            var n = a('ad1f');
            Object.defineProperty(t, 'attrLowercase', {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
            var i = a('2cf9');
            Object.defineProperty(t, 'attrSort', {
                enumerable: !0,
                get: function () {
                    return i.default;
                },
            });
            var s = a('1ce8');
            Object.defineProperty(t, 'attrNoDuplication', {
                enumerable: !0,
                get: function () {
                    return s.default;
                },
            });
            var o = a('662f');
            Object.defineProperty(t, 'attrUnsafeChars', {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
            var u = a('3799');
            Object.defineProperty(t, 'attrValueDoubleQuotes', {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
            var l = a('6bc6');
            Object.defineProperty(t, 'attrValueNotEmpty', {
                enumerable: !0,
                get: function () {
                    return l.default;
                },
            });
            var c = a('55957');
            Object.defineProperty(t, 'attrValueSingleQuotes', {
                enumerable: !0,
                get: function () {
                    return c.default;
                },
            });
            var d = a('05f4');
            Object.defineProperty(t, 'attrWhitespace', {
                enumerable: !0,
                get: function () {
                    return d.default;
                },
            });
            var f = a('07e9');
            Object.defineProperty(t, 'doctypeFirst', {
                enumerable: !0,
                get: function () {
                    return f.default;
                },
            });
            var p = a('6dc8');
            Object.defineProperty(t, 'doctypeHTML5', {
                enumerable: !0,
                get: function () {
                    return p.default;
                },
            });
            var g = a('db2d');
            Object.defineProperty(t, 'headScriptDisabled', {
                enumerable: !0,
                get: function () {
                    return g.default;
                },
            });
            var h = a('c4d3');
            Object.defineProperty(t, 'hrefAbsOrRel', {
                enumerable: !0,
                get: function () {
                    return h.default;
                },
            });
            var v = a('a23a');
            Object.defineProperty(t, 'idClsasAdDisabled', {
                enumerable: !0,
                get: function () {
                    return v.default;
                },
            });
            var m = a('84ce');
            Object.defineProperty(t, 'idClassValue', {
                enumerable: !0,
                get: function () {
                    return m.default;
                },
            });
            var b = a('9abd');
            Object.defineProperty(t, 'idUnique', {
                enumerable: !0,
                get: function () {
                    return b.default;
                },
            });
            var y = a('1d21');
            Object.defineProperty(t, 'inlineScriptDisabled', {
                enumerable: !0,
                get: function () {
                    return y.default;
                },
            });
            var w = a('e324');
            Object.defineProperty(t, 'inlineStyleDisabled', {
                enumerable: !0,
                get: function () {
                    return w.default;
                },
            });
            var O = a('b37f');
            Object.defineProperty(t, 'inputRequiresLabel', {
                enumerable: !0,
                get: function () {
                    return O.default;
                },
            });
            var _ = a('3f02');
            Object.defineProperty(t, 'scriptDisabled', {
                enumerable: !0,
                get: function () {
                    return _.default;
                },
            });
            var j = a('f68b');
            Object.defineProperty(t, 'spaceTabMixedDisabled', {
                enumerable: !0,
                get: function () {
                    return j.default;
                },
            });
            var L = a('884a');
            Object.defineProperty(t, 'specCharEscape', {
                enumerable: !0,
                get: function () {
                    return L.default;
                },
            });
            var P = a('19b9');
            Object.defineProperty(t, 'srcNotEmpty', {
                enumerable: !0,
                get: function () {
                    return P.default;
                },
            });
            var x = a('11a3');
            Object.defineProperty(t, 'styleDisabled', {
                enumerable: !0,
                get: function () {
                    return x.default;
                },
            });
            var T = a('d4ce');
            Object.defineProperty(t, 'tagPair', {
                enumerable: !0,
                get: function () {
                    return T.default;
                },
            });
            var M = a('bd4f');
            Object.defineProperty(t, 'tagSelfClose', {
                enumerable: !0,
                get: function () {
                    return M.default;
                },
            });
            var N = a('10ca');
            Object.defineProperty(t, 'tagnameLowercase', {
                enumerable: !0,
                get: function () {
                    return N.default;
                },
            });
            var A = a('6f5d');
            Object.defineProperty(t, 'tagnameSpecialChars', {
                enumerable: !0,
                get: function () {
                    return A.default;
                },
            });
            var k = a('44eb');
            Object.defineProperty(t, 'titleRequire', {
                enumerable: !0,
                get: function () {
                    return k.default;
                },
            });
            var C = a('1b83');
            Object.defineProperty(t, 'tagsCheck', {
                enumerable: !0,
                get: function () {
                    return C.default;
                },
            });
            var q = a('5da0');
            Object.defineProperty(t, 'attrNoUnnecessaryWhitespace', {
                enumerable: !0,
                get: function () {
                    return q.default;
                },
            });
        },
        '1b83': function (e, t, a) {
            'use strict';
            var r =
                (this && this.__assign) ||
                function () {
                    return (r =
                        Object.assign ||
                        function (e) {
                            for (var t, a = 1, r = arguments.length; a < r; a++)
                                for (var n in (t = arguments[a]))
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e;
                        }).apply(this, arguments);
                };
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = {
                a: { selfclosing: !1, attrsRequired: ['href', 'title'], redundantAttrs: ['alt'] },
                div: { selfclosing: !1 },
                main: { selfclosing: !1, redundantAttrs: ['role'] },
                nav: { selfclosing: !1, redundantAttrs: ['role'] },
                script: {
                    attrsOptional: [
                        ['async', 'async'],
                        ['defer', 'defer'],
                    ],
                },
                img: { selfclosing: !0, attrsRequired: ['src', 'alt', 'title'] },
            };
            t.default = {
                id: 'tags-check',
                description: 'Checks html tags.',
                init: function (e, t, a) {
                    var i = this;
                    (n = r(r({}, n), a)),
                        e.addListener('tagstart', function (e) {
                            var a = e.attrs,
                                r = e.col + e.tagName.length + 1,
                                s = e.tagName.toLowerCase();
                            if (n[s]) {
                                var o = n[s];
                                if (
                                    (!0 !== o.selfclosing || e.close
                                        ? !1 === o.selfclosing &&
                                          e.close &&
                                          t.warn(
                                              'The <' + s + '> tag must not be selfclosing.',
                                              e.line,
                                              e.col,
                                              i,
                                              e.raw
                                          )
                                        : t.warn('The <' + s + '> tag must be selfclosing.', e.line, e.col, i, e.raw),
                                    Array.isArray(o.attrsRequired))
                                )
                                    o.attrsRequired.forEach(function (n) {
                                        if (Array.isArray(n)) {
                                            var o = n.map(function (e) {
                                                    return e;
                                                }),
                                                u = o.shift(),
                                                l = o;
                                            a.some(function (e) {
                                                return e.name === u;
                                            })
                                                ? a.forEach(function (a) {
                                                      a.name === u &&
                                                          -1 === l.indexOf(a.value) &&
                                                          t.error(
                                                              'The <' +
                                                                  s +
                                                                  "> tag must have attr '" +
                                                                  u +
                                                                  "' with one value of '" +
                                                                  l.join("' or '") +
                                                                  "'.",
                                                              e.line,
                                                              r,
                                                              i,
                                                              e.raw
                                                          );
                                                  })
                                                : t.error(
                                                      'The <' + s + "> tag must have attr '" + u + "'.",
                                                      e.line,
                                                      r,
                                                      i,
                                                      e.raw
                                                  );
                                        } else
                                            a.some(function (e) {
                                                return -1 !== n.split('|').indexOf(e.name);
                                            }) ||
                                                t.error(
                                                    'The <' + s + "> tag must have attr '" + n + "'.",
                                                    e.line,
                                                    r,
                                                    i,
                                                    e.raw
                                                );
                                    });
                                if (Array.isArray(o.attrsOptional))
                                    o.attrsOptional.forEach(function (n) {
                                        if (Array.isArray(n)) {
                                            var o = n.map(function (e) {
                                                    return e;
                                                }),
                                                u = o.shift(),
                                                l = o;
                                            a.some(function (e) {
                                                return e.name === u;
                                            }) &&
                                                a.forEach(function (a) {
                                                    a.name === u &&
                                                        -1 === l.indexOf(a.value) &&
                                                        t.error(
                                                            'The <' +
                                                                s +
                                                                "> tag must have optional attr '" +
                                                                u +
                                                                "' with one value of '" +
                                                                l.join("' or '") +
                                                                "'.",
                                                            e.line,
                                                            r,
                                                            i,
                                                            e.raw
                                                        );
                                                });
                                        }
                                    });
                                if (Array.isArray(o.redundantAttrs))
                                    o.redundantAttrs.forEach(function (n) {
                                        a.some(function (e) {
                                            return e.name === n;
                                        }) &&
                                            t.error(
                                                "The attr '" +
                                                    n +
                                                    "' is redundant for <" +
                                                    s +
                                                    '> and should be ommited.',
                                                e.line,
                                                r,
                                                i,
                                                e.raw
                                            );
                                    });
                            }
                        });
                },
            };
        },
        '1ce8': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-no-duplication',
                    description: 'Elements cannot have duplicate attributes.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (
                                var r, n, i = e.attrs, s = e.col + e.tagName.length + 1, o = {}, u = 0, l = i.length;
                                u < l;
                                u++
                            )
                                !0 === o[(n = (r = i[u]).name)] &&
                                    t.error(
                                        'Duplicate of attribute name [ ' + r.name + ' ] was found.',
                                        e.line,
                                        s + r.index,
                                        a,
                                        r.raw
                                    ),
                                    (o[n] = !0);
                        });
                    },
                });
        },
        '1d21': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'inline-script-disabled',
                    description: 'Inline script cannot be used.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (
                                var r,
                                    n,
                                    i = e.attrs,
                                    s = e.col + e.tagName.length + 1,
                                    o = /^on(unload|message|submit|select|scroll|resize|mouseover|mouseout|mousemove|mouseleave|mouseenter|mousedown|load|keyup|keypress|keydown|focus|dblclick|click|change|blur|error)$/i,
                                    u = 0,
                                    l = i.length;
                                u < l;
                                u++
                            )
                                (n = (r = i[u]).name.toLowerCase()),
                                    !0 === o.test(n)
                                        ? t.warn(
                                              'Inline script [ ' + r.raw + ' ] cannot be used.',
                                              e.line,
                                              s + r.index,
                                              a,
                                              r.raw
                                          )
                                        : ('src' !== n && 'href' !== n) ||
                                          (/^\s*javascript:/i.test(r.value) &&
                                              t.warn(
                                                  'Inline script [ ' + r.raw + ' ] cannot be used.',
                                                  e.line,
                                                  s + r.index,
                                                  a,
                                                  r.raw
                                              ));
                        });
                    },
                });
        },
        '2cf9': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-sorted',
                    description: 'Attribute tags must be in proper order.',
                    init: function (e, t) {
                        for (
                            var a = this,
                                r = {},
                                n = [
                                    'class',
                                    'id',
                                    'name',
                                    'src',
                                    'for',
                                    'type',
                                    'href',
                                    'value',
                                    'title',
                                    'alt',
                                    'role',
                                ],
                                i = 0;
                            i < n.length;
                            i++
                        )
                            r[n[i]] = i;
                        e.addListener('tagstart', function (e) {
                            for (var n = e.attrs, i = [], s = 0; s < n.length; s++) i.push(n[s].name);
                            var o = JSON.stringify(i);
                            i.sort(function (e, t) {
                                return null == r[e] && null == r[t]
                                    ? 0
                                    : null == r[e]
                                    ? 1
                                    : null == r[t]
                                    ? -1
                                    : r[e] - r[t] || e.localeCompare(t);
                            }),
                                o !== JSON.stringify(i) &&
                                    t.error(
                                        'Inaccurate order ' + o + ' should be in hierarchy ' + JSON.stringify(i) + ' ',
                                        e.line,
                                        e.col,
                                        a,
                                        e.raw
                                    );
                        });
                    },
                });
        },
        3799: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-value-double-quotes',
                    description: 'Attribute values must be in double quotes.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (var r, n = e.attrs, i = e.col + e.tagName.length + 1, s = 0, o = n.length; s < o; s++)
                                (('' !== (r = n[s]).value && '"' !== r.quote) || ('' === r.value && "'" === r.quote)) &&
                                    t.error(
                                        'The value of attribute [ ' + r.name + ' ] must be in double quotes.',
                                        e.line,
                                        i + r.index,
                                        a,
                                        r.raw
                                    );
                        });
                    },
                });
        },
        '3a54': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = (function () {
                function e() {
                    (this._listeners = {}),
                        (this._mapCdataTags = this.makeMap('script,style')),
                        (this._arrBlocks = []),
                        (this.lastEvent = null);
                }
                return (
                    (e.prototype.makeMap = function (e) {
                        for (var t = {}, a = e.split(','), r = 0; r < a.length; r++) t[a[r]] = !0;
                        return t;
                    }),
                    (e.prototype.parse = function (e) {
                        var t,
                            a,
                            r,
                            n,
                            i,
                            s,
                            o = this,
                            u = this._mapCdataTags,
                            l = /<(?:\/([^\s>]+)\s*|!--([\s\S]*?)--|!([^>]*?)|([\w\-:]+)((?:\s+[^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]*))?)*?)\s*(\/?))>/g,
                            c = /\s*([^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+)(?:\s*=\s*(?:(")([^"]*)"|(')([^']*)'|([^\s"'>]*)))?/g,
                            d = /\r?\n/g,
                            f = 0,
                            p = null,
                            g = [],
                            h = 0,
                            v = 0,
                            m = 1,
                            b = this._arrBlocks;
                        this.fire('start', { pos: 0, line: 1, col: 1 });
                        for (
                            var y = function (e, t, a, r) {
                                var n = a - v + 1;
                                for (
                                    void 0 === r && (r = {}),
                                        r.raw = t,
                                        r.pos = a,
                                        r.line = m,
                                        r.col = n,
                                        b.push(r),
                                        o.fire(e, r);
                                    d.exec(t);

                                )
                                    m++, (v = a + d.lastIndex);
                            };
                            (t = l.exec(e));

                        )
                            if (
                                ((a = t.index) > f && ((s = e.substring(f, a)), p ? g.push(s) : y('text', s, f)),
                                (f = l.lastIndex),
                                !(r = t[1]) ||
                                    (p &&
                                        r === p &&
                                        (y('cdata', (s = g.join('')), h, { tagName: p, attrs: i }),
                                        (p = null),
                                        (i = void 0),
                                        (g = [])),
                                    p))
                            )
                                if (p) g.push(t[0]);
                                else if ((r = t[4])) {
                                    n = [];
                                    for (var w = t[5], O = void 0, _ = 0; (O = c.exec(w)); ) {
                                        var j = O[1],
                                            L = O[2] ? O[2] : O[4] ? O[4] : '',
                                            P = O[3] ? O[3] : O[5] ? O[5] : O[6] ? O[6] : '';
                                        n.push({ name: j, value: P, quote: L, index: O.index, raw: O[0] }),
                                            (_ += O[0].length);
                                    }
                                    _ === w.length
                                        ? (y('tagstart', t[0], a, { tagName: r, attrs: n, close: t[6] }),
                                          u[r] && ((p = r), (i = n.concat()), (g = []), (h = f)))
                                        : y('text', t[0], a);
                                } else (t[2] || t[3]) && y('comment', t[0], a, { content: t[2] || t[3], long: !!t[2] });
                            else y('tagend', t[0], a, { tagName: r });
                        e.length > f && y('text', (s = e.substring(f, e.length)), f),
                            this.fire('end', { pos: f, line: m, col: e.length - v + 1 });
                    }),
                    (e.prototype.addListener = function (e, t) {
                        for (var a, r = this._listeners, n = e.split(/[,\s]/), i = 0, s = n.length; i < s; i++)
                            void 0 === r[(a = n[i])] && (r[a] = []), r[a].push(t);
                    }),
                    (e.prototype.fire = function (e, t) {
                        void 0 === t && (t = {}), (t.type = e);
                        var a = [],
                            r = this._listeners[e],
                            n = this._listeners.all;
                        void 0 !== r && (a = a.concat(r)), void 0 !== n && (a = a.concat(n));
                        var i = this.lastEvent;
                        null !== i && (delete i.lastEvent, (t.lastEvent = i)), (this.lastEvent = t);
                        for (var s = 0, o = a.length; s < o; s++) a[s].call(this, t);
                    }),
                    (e.prototype.removeListener = function (e, t) {
                        var a = this._listeners[e];
                        if (void 0 !== a)
                            for (var r = 0, n = a.length; r < n; r++)
                                if (a[r] === t) {
                                    a.splice(r, 1);
                                    break;
                                }
                    }),
                    (e.prototype.fixPos = function (e, t) {
                        var a,
                            r = e.raw.substr(0, t).split(/\r?\n/),
                            n = r.length - 1,
                            i = e.line;
                        return n > 0 ? ((i += n), (a = r[n].length + 1)) : (a = e.col + t), { line: i, col: a };
                    }),
                    (e.prototype.getMapAttrs = function (e) {
                        for (var t, a = {}, r = 0, n = e.length; r < n; r++) a[(t = e[r]).name] = t.value;
                        return a;
                    }),
                    e
                );
            })();
            t.default = r;
        },
        '3f02': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'script-disabled',
                    description: 'The <script> tag cannot be used.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            'script' === e.tagName.toLowerCase() &&
                                t.error('The <script> tag cannot be used.', e.line, e.col, a, e.raw);
                        });
                    },
                });
        },
        '44eb': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'title-require',
                    description: '<title> must be present in <head> tag.',
                    init: function (e, t) {
                        var a = this,
                            r = !1,
                            n = !1,
                            i = function (e) {
                                var t = e.tagName.toLowerCase();
                                'head' === t ? (r = !0) : 'title' === t && r && (n = !0);
                            },
                            s = function (r) {
                                var o = r.tagName.toLowerCase();
                                if (n && 'title' === o) {
                                    var u = r.lastEvent;
                                    ('text' !== u.type || ('text' === u.type && !0 === /^\s*$/.test(u.raw))) &&
                                        t.error('<title></title> must not be empty.', r.line, r.col, a, r.raw);
                                } else
                                    'head' === o &&
                                        (!1 === n &&
                                            t.error('<title> must be present in <head> tag.', r.line, r.col, a, r.raw),
                                        e.removeListener('tagstart', i),
                                        e.removeListener('tagend', s));
                            };
                        e.addListener('tagstart', i), e.addListener('tagend', s);
                    },
                });
        },
        55957: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-value-single-quotes',
                    description: 'Attribute values must be in single quotes.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (var r, n = e.attrs, i = e.col + e.tagName.length + 1, s = 0, o = n.length; s < o; s++)
                                (('' !== (r = n[s]).value && "'" !== r.quote) || ('' === r.value && '"' === r.quote)) &&
                                    t.error(
                                        'The value of attribute [ ' + r.name + ' ] must be in single quotes.',
                                        e.line,
                                        i + r.index,
                                        a,
                                        r.raw
                                    );
                        });
                    },
                });
        },
        '573b': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'alt-require',
                    description:
                        'The alt attribute of an <img> element must be present and alt attribute of area[href] and input[type=image] must have a value.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (r) {
                            var n,
                                i = r.tagName.toLowerCase(),
                                s = e.getMapAttrs(r.attrs),
                                o = r.col + i.length + 1;
                            'img' !== i || 'alt' in s
                                ? (('area' === i && 'href' in s) || ('input' === i && 'image' === s.type)) &&
                                  (('alt' in s && '' !== s.alt) ||
                                      ((n = 'area' === i ? 'area[href]' : 'input[type=image]'),
                                      t.warn('The alt attribute of ' + n + ' must have a value.', r.line, o, a, r.raw)))
                                : t.warn('An alt attribute must be present on <img> elements.', r.line, o, a, r.raw);
                        });
                    },
                });
        },
        '5da0': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-no-unnecessary-whitespace',
                    description: 'No spaces between attribute names and values.',
                    init: function (e, t, a) {
                        var r = this,
                            n = Array.isArray(a) ? a : [];
                        e.addListener('tagstart', function (e) {
                            for (var a = e.attrs, i = e.col + e.tagName.length + 1, s = 0; s < a.length; s++)
                                if (-1 === n.indexOf(a[s].name)) {
                                    var o = /(\s*)=(\s*)/.exec(a[s].raw.trim());
                                    !o ||
                                        (0 === o[1].length && 0 === o[2].length) ||
                                        t.error(
                                            "The attribute '" +
                                                a[s].name +
                                                "' must not have spaces between the name and value.",
                                            e.line,
                                            i + a[s].index,
                                            r,
                                            a[s].raw
                                        );
                                }
                        });
                    },
                });
        },
        '662f': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-unsafe-chars',
                    description: 'Attribute values cannot contain unsafe chars.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (
                                var r,
                                    n,
                                    i = e.attrs,
                                    s = e.col + e.tagName.length + 1,
                                    o = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,
                                    u = 0,
                                    l = i.length;
                                u < l;
                                u++
                            )
                                if (((r = i[u]), null !== (n = o.exec(r.value)))) {
                                    var c = escape(n[0]).replace(/%u/, '\\u').replace(/%/, '\\x');
                                    t.warn(
                                        'The value of attribute [ ' +
                                            r.name +
                                            ' ] cannot contain an unsafe char [ ' +
                                            c +
                                            ' ].',
                                        e.line,
                                        s + r.index,
                                        a,
                                        r.raw
                                    );
                                }
                        });
                    },
                });
        },
        '6bc6': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-value-not-empty',
                    description: 'All attributes must have values.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (var r, n = e.attrs, i = e.col + e.tagName.length + 1, s = 0, o = n.length; s < o; s++)
                                '' === (r = n[s]).quote &&
                                    '' === r.value &&
                                    t.warn(
                                        'The attribute [ ' + r.name + ' ] must have a value.',
                                        e.line,
                                        i + r.index,
                                        a,
                                        r.raw
                                    );
                        });
                    },
                });
        },
        '6dc8': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'doctype-html5',
                    description: 'Invalid doctype. Use: "<!DOCTYPE html>"',
                    init: function (e, t) {
                        var a = this,
                            r = function (e) {
                                !1 === e.long &&
                                    'doctype html' !== e.content.toLowerCase() &&
                                    t.warn('Invalid doctype. Use: "<!DOCTYPE html>"', e.line, e.col, a, e.raw);
                            },
                            n = function () {
                                e.removeListener('comment', r), e.removeListener('tagstart', n);
                            };
                        e.addListener('all', r), e.addListener('tagstart', n);
                    },
                });
        },
        '6f5d': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'tagname-specialchars',
                    description: 'All html element names must be in lowercase.',
                    init: function (e, t) {
                        var a = this,
                            r = /[^a-zA-Z0-9\-:_]/;
                        e.addListener('tagstart,tagend', function (e) {
                            var n = e.tagName;
                            r.test(n) &&
                                t.error(
                                    'The html element name of [ ' + n + ' ] contains special character.',
                                    e.line,
                                    e.col,
                                    a,
                                    e.raw
                                );
                        });
                    },
                });
        },
        '84ce': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'id-class-value',
                    description: 'The id and class attribute values must meet the specified rules.',
                    init: function (e, t, a) {
                        var r,
                            n = this;
                        if (
                            'object' ==
                                typeof (r =
                                    'string' == typeof a
                                        ? {
                                              underline: {
                                                  regId: /^[a-z\d]+(_[a-z\d]+)*$/,
                                                  message:
                                                      'The id and class attribute values must be in lowercase and split by an underscore.',
                                              },
                                              dash: {
                                                  regId: /^[a-z\d]+(-[a-z\d]+)*$/,
                                                  message:
                                                      'The id and class attribute values must be in lowercase and split by a dash.',
                                              },
                                              hump: {
                                                  regId: /^[a-z][a-zA-Z\d]*([A-Z][a-zA-Z\d]*)*$/,
                                                  message:
                                                      'The id and class attribute values must meet the camelCase style.',
                                              },
                                          }[a]
                                        : a) &&
                            r.regId
                        ) {
                            var i = r.regId,
                                s = r.message;
                            i instanceof RegExp || (i = new RegExp(i)),
                                e.addListener('tagstart', function (e) {
                                    for (
                                        var a, r = e.attrs, o = e.col + e.tagName.length + 1, u = 0, l = r.length;
                                        u < l;
                                        u++
                                    )
                                        if (
                                            ('id' === (a = r[u]).name.toLowerCase() &&
                                                !1 === i.test(a.value) &&
                                                t.warn(s, e.line, o + a.index, n, a.raw),
                                            'class' === a.name.toLowerCase())
                                        )
                                            for (
                                                var c = a.value.split(/\s+/g), d = void 0, f = 0, p = c.length;
                                                f < p;
                                                f++
                                            )
                                                (d = c[f]) && !1 === i.test(d) && t.warn(s, e.line, o + a.index, n, d);
                                });
                        }
                    },
                });
        },
        '884a': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'spec-char-escape',
                    description: 'Special characters must be escaped.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('text', function (r) {
                            for (var n, i = r.raw, s = /([<>])|( \& )/g; (n = s.exec(i)); ) {
                                var o = e.fixPos(r, n.index);
                                t.error(
                                    'Special characters must be escaped : [ ' + n[0] + ' ].',
                                    o.line,
                                    o.col,
                                    a,
                                    r.raw
                                );
                            }
                        });
                    },
                });
        },
        '9abd': function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'id-unique',
                    description: 'The value of id attributes must be unique.',
                    init: function (e, t) {
                        var a = this,
                            r = {};
                        e.addListener('tagstart', function (e) {
                            for (
                                var n, i, s = e.attrs, o = e.col + e.tagName.length + 1, u = 0, l = s.length;
                                u < l;
                                u++
                            )
                                if ('id' === (n = s[u]).name.toLowerCase()) {
                                    (i = n.value) &&
                                        (void 0 === r[i] ? (r[i] = 1) : r[i]++,
                                        r[i] > 1 &&
                                            t.error(
                                                'The id value [ ' + i + ' ] must be unique.',
                                                e.line,
                                                o + n.index,
                                                a,
                                                n.raw
                                            ));
                                    break;
                                }
                        });
                    },
                });
        },
        a23a: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'id-class-ad-disabled',
                    description:
                        'The id and class attributes cannot use the ad keyword, it will be blocked by adblock software.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (
                                var r, n, i = e.attrs, s = e.col + e.tagName.length + 1, o = 0, u = i.length;
                                o < u;
                                o++
                            )
                                (n = (r = i[o]).name),
                                    /^(id|class)$/i.test(n) &&
                                        /(^|[-_])ad([-_]|$)/i.test(r.value) &&
                                        t.warn(
                                            'The value of attribute ' + n + ' cannot use the ad keyword.',
                                            e.line,
                                            s + r.index,
                                            a,
                                            r.raw
                                        );
                        });
                    },
                });
        },
        ad1f: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'attr-lowercase',
                    description: 'All attribute names must be in lowercase.',
                    init: function (e, t, a) {
                        var r = this,
                            n = Array.isArray(a) ? a : [];
                        e.addListener('tagstart', function (e) {
                            for (
                                var a,
                                    i = e.attrs,
                                    s = e.col + e.tagName.length + 1,
                                    o = function (o, u) {
                                        var l = (a = i[o]).name;
                                        n.find(function (e) {
                                            return (function (e, t) {
                                                if (t instanceof RegExp) return !!t.test(e) && { match: e, pattern: t };
                                                var a = t[0],
                                                    r = t[t.length - 1],
                                                    n = t[t.length - 2],
                                                    i = '/' === a && ('/' === r || ('/' === n && 'i' === r));
                                                return i
                                                    ? i && 'i' === r
                                                        ? new RegExp(t.slice(1, -2), 'i').test(e)
                                                        : new RegExp(t.slice(1, -1)).test(e)
                                                    : e === t;
                                            })(l, e);
                                        }) ||
                                            l === l.toLowerCase() ||
                                            t.error(
                                                'The attribute name of [ ' + l + ' ] must be in lowercase.',
                                                e.line,
                                                s + a.index,
                                                r,
                                                a.raw
                                            );
                                    },
                                    u = 0,
                                    l = i.length;
                                u < l;
                                u++
                            )
                                o(u);
                        });
                    },
                });
        },
        b37f: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'input-requires-label',
                    description: 'All [ input ] tags must have a corresponding [ label ] tag. ',
                    init: function (e, t) {
                        var a = this,
                            r = [],
                            n = [];
                        e.addListener('tagstart', function (t) {
                            var a = t.tagName.toLowerCase(),
                                i = e.getMapAttrs(t.attrs),
                                s = t.col + a.length + 1;
                            'input' === a && n.push({ event: t, col: s, id: i.id }),
                                'label' === a &&
                                    'for' in i &&
                                    '' !== i.for &&
                                    r.push({ event: t, col: s, forValue: i.for });
                        }),
                            e.addListener('end', function () {
                                n.forEach(function (e) {
                                    (function (e) {
                                        var t = !1;
                                        return (
                                            r.forEach(function (a) {
                                                e.id && e.id === a.forValue && (t = !0);
                                            }),
                                            t
                                        );
                                    })(e) ||
                                        t.warn('No matching [ label ] tag found.', e.event.line, e.col, a, e.event.raw);
                                });
                            });
                    },
                });
        },
        bd4f: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'tag-self-close',
                    description: 'Empty tags must be self closed.',
                    init: function (e, t) {
                        var a = this,
                            r = e.makeMap(
                                'area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr'
                            );
                        e.addListener('tagstart', function (e) {
                            var n = e.tagName.toLowerCase();
                            void 0 !== r[n] &&
                                (e.close ||
                                    t.warn(
                                        'The empty tag : [ ' + n + ' ] must be self closed.',
                                        e.line,
                                        e.col,
                                        a,
                                        e.raw
                                    ));
                        });
                    },
                });
        },
        c4d3: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'href-abs-or-rel',
                    description: 'An href attribute must be either absolute or relative.',
                    init: function (e, t, a) {
                        var r = this,
                            n = 'abs' === a ? 'absolute' : 'relative';
                        e.addListener('tagstart', function (e) {
                            for (var a, i = e.attrs, s = e.col + e.tagName.length + 1, o = 0, u = i.length; o < u; o++)
                                if ('href' === (a = i[o]).name) {
                                    (('absolute' === n && !1 === /^\w+?:/.test(a.value)) ||
                                        ('relative' === n && !0 === /^https?:\/\//.test(a.value))) &&
                                        t.warn(
                                            'The value of the href attribute [ ' + a.value + ' ] must be ' + n + '.',
                                            e.line,
                                            s + a.index,
                                            r,
                                            a.raw
                                        );
                                    break;
                                }
                        });
                    },
                });
        },
        d4ce: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'tag-pair',
                    description: 'Tag must be paired.',
                    init: function (e, t) {
                        var a = this,
                            r = [],
                            n = e.makeMap(
                                'area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr'
                            );
                        e.addListener('tagstart', function (e) {
                            var t = e.tagName.toLowerCase();
                            void 0 !== n[t] || e.close || r.push({ tagName: t, line: e.line, raw: e.raw });
                        }),
                            e.addListener('tagend', function (e) {
                                var n,
                                    i = e.tagName.toLowerCase();
                                for (n = r.length - 1; n >= 0 && r[n].tagName !== i; n--);
                                if (n >= 0) {
                                    for (var s = [], o = r.length - 1; o > n; o--) s.push('</' + r[o].tagName + '>');
                                    if (s.length > 0) {
                                        var u = r[r.length - 1];
                                        t.error(
                                            'Tag must be paired, missing: [ ' +
                                                s.join('') +
                                                ' ], start tag match failed [ ' +
                                                u.raw +
                                                ' ] on line ' +
                                                u.line +
                                                '.',
                                            e.line,
                                            e.col,
                                            a,
                                            e.raw
                                        );
                                    }
                                    r.length = n;
                                } else t.error('Tag must be paired, no start tag: [ ' + e.raw + ' ]', e.line, e.col, a, e.raw);
                            }),
                            e.addListener('end', function (e) {
                                for (var n = [], i = r.length - 1; i >= 0; i--) n.push('</' + r[i].tagName + '>');
                                if (n.length > 0) {
                                    var s = r[r.length - 1];
                                    t.error(
                                        'Tag must be paired, missing: [ ' +
                                            n.join('') +
                                            ' ], open tag match failed [ ' +
                                            s.raw +
                                            ' ] on line ' +
                                            s.line +
                                            '.',
                                        e.line,
                                        e.col,
                                        a,
                                        ''
                                    );
                                }
                            });
                    },
                });
        },
        db2d: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'head-script-disabled',
                    description: 'The <script> tag cannot be used in a <head> tag.',
                    init: function (e, t) {
                        var a = this,
                            r = /^(text\/javascript|application\/javascript)$/i,
                            n = !1,
                            i = function (i) {
                                var s = e.getMapAttrs(i.attrs).type,
                                    o = i.tagName.toLowerCase();
                                'head' === o && (n = !0),
                                    !0 !== n ||
                                        'script' !== o ||
                                        (s && !0 !== r.test(s)) ||
                                        t.warn(
                                            'The <script> tag cannot be used in a <head> tag.',
                                            i.line,
                                            i.col,
                                            a,
                                            i.raw
                                        );
                            },
                            s = function (t) {
                                'head' === t.tagName.toLowerCase() &&
                                    (e.removeListener('tagstart', i), e.removeListener('tagend', s));
                            };
                        e.addListener('tagstart', i), e.addListener('tagend', s);
                    },
                });
        },
        e324: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'inline-style-disabled',
                    description: 'Inline style cannot be used.',
                    init: function (e, t) {
                        var a = this;
                        e.addListener('tagstart', function (e) {
                            for (var r, n = e.attrs, i = e.col + e.tagName.length + 1, s = 0, o = n.length; s < o; s++)
                                'style' === (r = n[s]).name.toLowerCase() &&
                                    t.warn(
                                        'Inline style [ ' + r.raw + ' ] cannot be used.',
                                        e.line,
                                        i + r.index,
                                        a,
                                        r.raw
                                    );
                        });
                    },
                });
        },
        f68b: function (e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                    id: 'space-tab-mixed-disabled',
                    description: 'Do not mix tabs and spaces for indentation.',
                    init: function (e, t, a) {
                        var r = this,
                            n = 'nomix',
                            i = null;
                        if ('string' == typeof a) {
                            var s = /^([a-z]+)(\d+)?/.exec(a);
                            s && ((n = s[1]), (i = s[2] && parseInt(s[2], 10)));
                        }
                        e.addListener('text', function (a) {
                            for (var s, o = a.raw, u = /(^|\r?\n)([ \t]+)/g; (s = u.exec(o)); ) {
                                var l = e.fixPos(a, s.index + s[1].length);
                                if (1 === l.col) {
                                    var c = s[2];
                                    'space' === n
                                        ? i
                                            ? (!1 !== /^ +$/.test(c) && c.length % i == 0) ||
                                              t.warn(
                                                  'Please use space for indentation and keep ' + i + ' length.',
                                                  l.line,
                                                  1,
                                                  r,
                                                  a.raw
                                              )
                                            : !1 === /^ +$/.test(c) &&
                                              t.warn('Please use space for indentation.', l.line, 1, r, a.raw)
                                        : 'tab' === n && !1 === /^\t+$/.test(c)
                                        ? t.warn('Please use tab for indentation.', l.line, 1, r, a.raw)
                                        : !0 === / +\t|\t+ /.test(c) &&
                                          t.warn('Do not mix tabs and spaces for indentation.', l.line, 1, r, a.raw);
                                }
                            }
                        });
                    },
                });
        },
    },
]);