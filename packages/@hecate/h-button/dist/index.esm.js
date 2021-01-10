import 'core-js/modules/es.function.name.js';
import n from '@babel/runtime-corejs3/helpers/esm/typeof';
import { VIcon as o, VBtn as t, VTooltip as e } from 'vuetify/lib';
import i from 'vue-runtime-helpers/dist/normalize-component.mjs';
var r = i(
    {
        render: function () {
            var n = this,
                o = n.$createElement,
                t = n._self._c || o;
            return t(
                'v-tooltip',
                {
                    attrs: { bottom: '' },
                    scopedSlots: n._u([
                        {
                            key: 'activator',
                            fn: function (o) {
                                var e = o.on;
                                return [
                                    n.icon
                                        ? t(
                                              'v-btn',
                                              n._g(
                                                  {
                                                      attrs: { color: n.color, icon: n.icon },
                                                      on: {
                                                          click: function (o) {
                                                              return n.handleClick();
                                                          },
                                                      },
                                                  },
                                                  e
                                              ),
                                              [t('v-icon', [n._v(n._s(n.iconName))])],
                                              1
                                          )
                                        : t(
                                              'v-btn',
                                              n._g(
                                                  {
                                                      attrs: { color: n.color },
                                                      on: {
                                                          click: function (o) {
                                                              return n.handleClick();
                                                          },
                                                      },
                                                  },
                                                  e
                                              ),
                                              [n._v('\n            ' + n._s(n.text) + '\n        ')]
                                          ),
                                ];
                            },
                        },
                    ]),
                },
                [n._v(' '), t('span', [n._v(n._s(n.tooltip))])]
            );
        },
        staticRenderFns: [],
    },
    undefined,
    {
        components: { VIcon: o, VBtn: t, VTooltip: e },
        name: 'HButton',
        props: { btnClass: String, color: String, icon: Boolean, iconName: String, tooltip: String, text: String },
        methods: {
            handleClick: function () {
                this.$emit('click');
            },
        },
    },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(r.install = function (n) {
    n.component(r.name, r);
}),
    null != ('undefined' == typeof window ? 'undefined' : n(window)) && window.Vue && r.install(window.Vue);
export { r as HButton };
