!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports, require('vuetify/lib'), require('vee-validate'), require('@hecate/h-form-renderer'))
        : 'function' == typeof define && define.amd
        ? define(['exports', 'vuetify/lib', 'vee-validate', '@hecate/h-form-renderer'], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              e.Vuetify,
              e['vee-validate'],
              e.HFormRenderer
          );
})(this, function (e, t, o, r) {
    'use strict';
    function n(e, t, o, r, n, i, s, a, l, d) {
        'boolean' != typeof s && ((l = a), (a = s), (s = !1));
        const c = 'function' == typeof o ? o.options : o;
        let f;
        if (
            (e &&
                e.render &&
                ((c.render = e.render),
                (c.staticRenderFns = e.staticRenderFns),
                (c._compiled = !0),
                n && (c.functional = !0)),
            r && (c._scopeId = r),
            i
                ? ((f = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          t && t.call(this, l(e)),
                          e && e._registeredComponents && e._registeredComponents.add(i);
                  }),
                  (c._ssrRegister = f))
                : t &&
                  (f = s
                      ? function (e) {
                            t.call(this, d(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            t.call(this, a(e));
                        }),
            f)
        )
            if (c.functional) {
                const e = c.render;
                c.render = function (t, o) {
                    return f.call(o), e(t, o);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, f) : [f];
            }
        return o;
    }
    const i = n(
        {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o(
                    'v-card',
                    { staticClass: 'pa-2' },
                    [
                        o(
                            'v-toolbar',
                            { attrs: { flat: '' } },
                            [
                                o(
                                    'v-tooltip',
                                    {
                                        attrs: { bottom: '' },
                                        scopedSlots: e._u([
                                            {
                                                key: 'activator',
                                                fn: function (t) {
                                                    var r = t.on;
                                                    return [
                                                        o(
                                                            'v-icon',
                                                            e._g(
                                                                {
                                                                    staticClass: 'mr-2',
                                                                    attrs: { tile: '', color: 'teal', large: '' },
                                                                },
                                                                r
                                                            ),
                                                            [e._v('mdi-clipboard-edit')]
                                                        ),
                                                    ];
                                                },
                                            },
                                        ]),
                                    },
                                    [e._v(' '), o('span', [e._v('返回')])]
                                ),
                                e._v(' '),
                                o('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [e._v(e._s(e.title))]),
                            ],
                            1
                        ),
                        e._v(' '),
                        o('v-divider', { staticClass: 'mb-2' }),
                        e._v(' '),
                        o(
                            'v-row',
                            [
                                o(
                                    'v-col',
                                    [
                                        o(
                                            'ValidationObserver',
                                            { ref: 'observer' },
                                            [
                                                o(
                                                    'v-form',
                                                    { ref: 'form' },
                                                    [
                                                        o('h-form-renderer', {
                                                            attrs: { schema: e.schema },
                                                            model: {
                                                                value: e.model,
                                                                callback: function (t) {
                                                                    e.model = t;
                                                                },
                                                                expression: 'model',
                                                            },
                                                        }),
                                                        e._v(' '),
                                                        o(
                                                            'v-btn',
                                                            {
                                                                staticClass: 'mr-4',
                                                                attrs: { color: 'primary' },
                                                                on: { click: e.saveOrUpdate },
                                                            },
                                                            [e._v('保存')]
                                                        ),
                                                        e._v(' '),
                                                        o(
                                                            'v-btn',
                                                            {
                                                                staticClass: 'mr-4',
                                                                attrs: { color: 'warning' },
                                                                on: { click: e.clear },
                                                            },
                                                            [e._v('重置')]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                            ],
                            1
                        ),
                    ],
                    1
                );
            },
            staticRenderFns: [],
        },
        undefined,
        {
            name: 'HFormRuntime',
            components: {
                ValidationObserver: o.ValidationObserver,
                HFormRenderer: r.HFormRenderer,
                VIcon: t.VIcon,
                VTooltip: t.VTooltip,
                VToolbarTitle: t.VToolbarTitle,
                VToolbar: t.VToolbar,
                VDivider: t.VDivider,
                VBtn: t.VBtn,
                VForm: t.VForm,
                VCol: t.VCol,
                VRow: t.VRow,
                VCard: t.VCard,
            },
            props: { schema: { type: Object, default: () => {} }, title: { type: String, default: '动态表单' } },
            data: () => ({ model: {} }),
            methods: {
                saveOrUpdate() {
                    this.$refs.observer.validate().then((e) => {});
                },
                clear() {
                    (this.model = {}), this.$refs.form.reset(), this.$refs.observer.reset();
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
    (i.install = function (e) {
        e.component(i.name, i);
    }),
        null != typeof window && window.Vue && i.install(window.Vue),
        (e.HFormRuntime = i),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
