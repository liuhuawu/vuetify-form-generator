!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('@hecate/h-button'),
              require('@hecate/h-code-mirror'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              '@hecate/h-button',
              '@hecate/h-code-mirror',
              'vue-runtime-helpers/dist/normalize-component.mjs',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e.HButton,
              e.HCodeMirror,
              e.__vue_normalize__
          );
})(this, function (e, t, o, r, n, i, a) {
    'use strict';
    function d(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var l = d(o),
        s = d(a),
        c = {
            name: 'HCodeEditor',
            components: {
                HButton: n.HButton,
                HCodeMirror: i.HCodeMirror,
                VIcon: r.VIcon,
                VBtn: r.VBtn,
                VToolbarTitle: r.VToolbarTitle,
                VSpacer: r.VSpacer,
                VSwitch: r.VSwitch,
                VSelect: r.VSelect,
                VToolbar: r.VToolbar,
                VCard: r.VCard,
            },
            data: function () {
                return {
                    modeOptions: [
                        'default',
                        'json',
                        'dockerfile',
                        'html',
                        'http',
                        'javascript',
                        'jsx',
                        'markdown',
                        'powershell',
                        'properties',
                        'python',
                        'sass',
                        'shell',
                        'sql',
                        'css',
                        'xml',
                        'yaml',
                        'vue',
                    ],
                    themeOptions: [
                        'default',
                        '3024-day',
                        '3024-night',
                        'abcdef',
                        'ambiance',
                        'ayu-dark',
                        'ayu-mirage',
                        'base16-dark',
                        'base16-light',
                        'bespin',
                        'blackboard',
                        'cobalt',
                        'colorforth',
                        'darcula',
                        'dracula',
                        'duotone-dark',
                        'duotone-light',
                        'eclipse',
                        'elegant',
                        'erlang-dark',
                        'gruvbox-dark',
                        'hopscotch',
                        'icecoder',
                        'idea',
                        'isotope',
                        'lesser-dark',
                        'liquibyte',
                        'lucario',
                        'material',
                        'material-darker',
                        'material-palenight',
                        'material-ocean',
                        'mbo',
                        'mdn-like',
                        'midnight',
                        'monokai',
                        'moxer',
                        'neat',
                        'neo',
                        'night',
                        'nord',
                        'oceanic-next',
                        'panda-syntax',
                        'paraiso-dark',
                        'paraiso-light',
                        'pastel-on-dark',
                        'railscasts',
                        'rubyblue',
                        'seti',
                        'shadowfox',
                        'solarized dark',
                        'solarized light',
                        'the-matrix',
                        'tomorrow-night-bright',
                        'tomorrow-night-eighties',
                        'ttcn',
                        'twilight',
                        'vibrant-ink',
                        'xq-dark',
                        'xq-light',
                        'yeti',
                        'yonce',
                        'zenburn',
                    ],
                    codeMirrorMode: 'default',
                    codeMirrorTheme: 'default',
                    sourceCode: '',
                    readOnly: !1,
                };
            },
            computed: {
                readOnlyLabel: function () {
                    return this.readOnly ? '只读' : '编辑';
                },
            },
            methods: {
                switchCodeMirrorMode: function (e) {
                    switch (e) {
                        case 'json':
                            return 'application/json';
                        case 'html':
                            return 'htmlmixed';
                        default:
                            return e;
                    }
                },
                onModeChange: function (e) {
                    this.codeMirrorMode = this.switchCodeMirrorMode(e);
                },
                onThemeChange: function (e) {
                    this.codeMirrorTheme = e;
                },
            },
        },
        u = s.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o(
                        'v-card',
                        [
                            o(
                                'v-toolbar',
                                { attrs: { dense: '', color: 'blue darken-3', dark: '' } },
                                [
                                    o(
                                        'v-btn',
                                        { attrs: { large: '', icon: '' } },
                                        [o('v-icon', [e._v('mdi-volleyball')])],
                                        1
                                    ),
                                    e._v(' '),
                                    o('v-toolbar-title', [e._v('Hecate Code Editor')]),
                                    e._v(' '),
                                    o('v-spacer'),
                                    e._v(' '),
                                    o('h-button', {
                                        attrs: { icon: '', 'icon-name': 'mdi-lock-reset', tooltip: '重置' },
                                    }),
                                    e._v(' '),
                                    o('v-switch', {
                                        staticClass: 'ml-3',
                                        attrs: {
                                            label: e.readOnlyLabel,
                                            'true-value': !1,
                                            'false-value': !0,
                                            inset: '',
                                            'hide-details': '',
                                        },
                                        model: {
                                            value: e.readOnly,
                                            callback: function (t) {
                                                e.readOnly = t;
                                            },
                                            expression: 'readOnly',
                                        },
                                    }),
                                    e._v(' '),
                                    o('v-select', {
                                        staticClass: 'ml-3',
                                        attrs: {
                                            items: e.themeOptions,
                                            flat: '',
                                            'solo-inverted': '',
                                            'hide-details': '',
                                            dense: '',
                                            label: '请选择主题',
                                            'prepend-inner-icon': 'mdi-theme-light-dark',
                                            'no-data-text': '没有数据',
                                        },
                                        on: { change: e.onThemeChange },
                                    }),
                                    e._v(' '),
                                    o('v-select', {
                                        staticClass: 'ml-3',
                                        attrs: {
                                            items: e.modeOptions,
                                            flat: '',
                                            'solo-inverted': '',
                                            'hide-details': '',
                                            dense: '',
                                            label: '请选择编辑模式',
                                            'prepend-inner-icon': 'mdi-codepen',
                                            'no-data-text': '没有数据',
                                        },
                                        on: { change: e.onModeChange },
                                    }),
                                    e._v(' '),
                                    o('v-btn', { attrs: { icon: '' } }, [o('v-icon', [e._v('mdi-apps')])], 1),
                                ],
                                1
                            ),
                            e._v(' '),
                            o('h-code-mirror', {
                                attrs: { mode: e.codeMirrorMode, theme: e.codeMirrorTheme, 'read-only': e.readOnly },
                                model: {
                                    value: e.sourceCode,
                                    callback: function (t) {
                                        e.sourceCode = t;
                                    },
                                    expression: 'sourceCode',
                                },
                            }),
                        ],
                        1
                    );
                },
                staticRenderFns: [],
            },
            undefined,
            c,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (u.install = function (e) {
        e.component(u.name, u);
    }),
        null != ('undefined' == typeof window ? 'undefined' : l.default(window)) && window.Vue && u.install(window.Vue),
        (e.HCodeEditor = u),
        Object.defineProperty(e, '__esModule', { value: !0 });
});