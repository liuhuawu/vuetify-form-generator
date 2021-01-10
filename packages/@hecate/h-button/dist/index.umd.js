!(function (e, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'vue-runtime-helpers/dist/normalize-component.mjs',
          ], n)
        : n(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e.__vue_normalize__
          );
})(this, function (e, n, t, o, i) {
    'use strict';
    function r(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var l = r(t),
        u = r(i),
        c = {
            components: { VIcon: o.VIcon, VBtn: o.VBtn, VTooltip: o.VTooltip },
            name: 'HButton',
            props: { btnClass: String, color: String, icon: Boolean, iconName: String, tooltip: String, text: String },
            methods: {
                handleClick: function () {
                    this.$emit('click');
                },
            },
        },
        s = u.default(
            {
                render: function () {
                    var e = this,
                        n = e.$createElement,
                        t = e._self._c || n;
                    return t(
                        'v-tooltip',
                        {
                            attrs: { bottom: '' },
                            scopedSlots: e._u([
                                {
                                    key: 'activator',
                                    fn: function (n) {
                                        var o = n.on;
                                        return [
                                            e.icon
                                                ? t(
                                                      'v-btn',
                                                      e._g(
                                                          {
                                                              attrs: { color: e.color, icon: e.icon },
                                                              on: {
                                                                  click: function (n) {
                                                                      return e.handleClick();
                                                                  },
                                                              },
                                                          },
                                                          o
                                                      ),
                                                      [t('v-icon', [e._v(e._s(e.iconName))])],
                                                      1
                                                  )
                                                : t(
                                                      'v-btn',
                                                      e._g(
                                                          {
                                                              attrs: { color: e.color },
                                                              on: {
                                                                  click: function (n) {
                                                                      return e.handleClick();
                                                                  },
                                                              },
                                                          },
                                                          o
                                                      ),
                                                      [e._v('\n            ' + e._s(e.text) + '\n        ')]
                                                  ),
                                        ];
                                    },
                                },
                            ]),
                        },
                        [e._v(' '), t('span', [e._v(e._s(e.tooltip))])]
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
    (s.install = function (e) {
        e.component(s.name, s);
    }),
        null != ('undefined' == typeof window ? 'undefined' : l.default(window)) && window.Vue && s.install(window.Vue),
        (e.HButton = s),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
