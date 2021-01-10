import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import {
    VIcon as t,
    VTooltip as s,
    VToolbarTitle as r,
    VToolbar as o,
    VDivider as a,
    VAlert as i,
    VBtn as n,
    VForm as m,
    VCol as l,
    VRow as c,
    VCard as d,
} from 'vuetify/lib';
import { ValidationObserver as u } from 'vee-validate';
import { HFormRenderer as f } from '@hecate/h-form-renderer';
import v from 'vue-runtime-helpers/dist/normalize-component.mjs';
var h = v(
    {
        render: function () {
            var e = this,
                t = e.$createElement,
                s = e._self._c || t;
            return s(
                'v-card',
                { staticClass: 'pa-2' },
                [
                    s(
                        'v-toolbar',
                        { attrs: { flat: '' } },
                        [
                            s(
                                'v-tooltip',
                                {
                                    attrs: { bottom: '' },
                                    scopedSlots: e._u([
                                        {
                                            key: 'activator',
                                            fn: function (t) {
                                                var r = t.on;
                                                return [
                                                    s(
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
                                [e._v(' '), s('span', [e._v('返回')])]
                            ),
                            e._v(' '),
                            s('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [e._v(e._s(e.title))]),
                        ],
                        1
                    ),
                    e._v(' '),
                    s('v-divider', { staticClass: 'mb-2' }),
                    e._v(' '),
                    e.showMessage
                        ? s('v-alert', { attrs: { type: e.messageType } }, [e._v(' ' + e._s(e.message) + ' ')])
                        : e._e(),
                    e._v(' '),
                    s(
                        'v-row',
                        [
                            s(
                                'v-col',
                                [
                                    s(
                                        'ValidationObserver',
                                        { ref: 'observer' },
                                        [
                                            s(
                                                'v-form',
                                                { ref: 'form' },
                                                [
                                                    s('h-form-renderer', {
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
                                                    s(
                                                        'v-btn',
                                                        {
                                                            staticClass: 'mr-4',
                                                            attrs: { color: 'primary' },
                                                            on: { click: e.saveOrUpdate },
                                                        },
                                                        [e._v('保存')]
                                                    ),
                                                    e._v(' '),
                                                    s(
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
            ValidationObserver: u,
            HFormRenderer: f,
            VIcon: t,
            VTooltip: s,
            VToolbarTitle: r,
            VToolbar: o,
            VDivider: a,
            VAlert: i,
            VBtn: n,
            VForm: m,
            VCol: l,
            VRow: c,
            VCard: d,
        },
        props: {
            schema: { type: Object, default: function () {} },
            title: { type: String, default: '动态表单' },
            formSchema: { type: Object, default: function () {} },
        },
        data: function () {
            return { model: {}, showMessage: !1, messageType: 'success', message: '' };
        },
        computed: {
            httpLibrary: function () {
                return this.axios || this.$http;
            },
        },
        mounted: function () {},
        methods: {
            saveOrUpdate: function () {
                var e = this;
                this.$refs.observer.validate().then(function (t) {
                    t &&
                        (e.httpLibrary
                            ? e.httpLibrary(e.createRequestObject()).then(function (e) {
                                  e && '200' === e.status
                                      ? ((this.showMessage = !0),
                                        (this.messageType = 'success'),
                                        (this.message = '保存成功！'))
                                      : ((this.showMessage = !0),
                                        (this.messageType = 'error'),
                                        (this.message = '保存失败！'));
                              })
                            : ((e.showMessage = !0),
                              (e.messageType = 'warning'),
                              (e.message = '无法找到请求发送组件！')));
                });
            },
            clear: function () {
                (this.model = {}), this.$refs.form.reset(), this.$refs.observer.reset();
            },
            createRequestObject: function () {
                var e = {};
                return (
                    (e.methods = this.formSchema.requestMethods),
                    (e.url = this.formSchema.requestUrl),
                    (e.headers = { 'Content-type': this.formSchema.requestContentType }),
                    (e.data = this.model),
                    e
                );
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
(h.install = function (e) {
    e.component(h.name, h);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && h.install(window.Vue);
export { h as HFormRuntime };
