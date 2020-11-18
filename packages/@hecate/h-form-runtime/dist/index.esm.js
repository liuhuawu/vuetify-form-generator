import {
    VIcon as e,
    VTooltip as t,
    VToolbarTitle as o,
    VToolbar as r,
    VDivider as n,
    VBtn as s,
    VForm as i,
    VCol as a,
    VRow as l,
    VCard as d,
} from 'vuetify/lib';
import { ValidationObserver as c } from 'vee-validate';
import { HFormRenderer as v } from '@hecate/h-form-renderer';
function f(e, t, o, r, n, s, i, a, l, d) {
    'boolean' != typeof i && ((l = a), (a = i), (i = !1));
    const c = 'function' == typeof o ? o.options : o;
    let v;
    if (
        (e &&
            e.render &&
            ((c.render = e.render),
            (c.staticRenderFns = e.staticRenderFns),
            (c._compiled = !0),
            n && (c.functional = !0)),
        r && (c._scopeId = r),
        s
            ? ((v = function (e) {
                  (e =
                      e ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                      'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                      (e = __VUE_SSR_CONTEXT__),
                      t && t.call(this, l(e)),
                      e && e._registeredComponents && e._registeredComponents.add(s);
              }),
              (c._ssrRegister = v))
            : t &&
              (v = i
                  ? function (e) {
                        t.call(this, d(e, this.$root.$options.shadowRoot));
                    }
                  : function (e) {
                        t.call(this, a(e));
                    }),
        v)
    )
        if (c.functional) {
            const e = c.render;
            c.render = function (t, o) {
                return v.call(o), e(t, o);
            };
        } else {
            const e = c.beforeCreate;
            c.beforeCreate = e ? [].concat(e, v) : [v];
        }
    return o;
}
const m = f(
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
            ValidationObserver: c,
            HFormRenderer: v,
            VIcon: e,
            VTooltip: t,
            VToolbarTitle: o,
            VToolbar: r,
            VDivider: n,
            VBtn: s,
            VForm: i,
            VCol: a,
            VRow: l,
            VCard: d,
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
(m.install = function (e) {
    e.component(m.name, m);
}),
    null != typeof window && window.Vue && m.install(window.Vue);
export { m as HFormRuntime };
