!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('core-js/modules/es.function.name.js'),
              require('@babel/runtime-corejs3/helpers/esm/typeof'),
              require('vuetify/lib'),
              require('vee-validate'),
              require('@hecate/h-form-renderer'),
              require('vue-runtime-helpers/dist/normalize-component.mjs')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'core-js/modules/es.function.name.js',
              '@babel/runtime-corejs3/helpers/esm/typeof',
              'vuetify/lib',
              'vee-validate',
              '@hecate/h-form-renderer',
              'vue-runtime-helpers/dist/normalize-component.mjs',
          ], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              null,
              e._typeof,
              e.Vuetify,
              e['vee-validate'],
              e.HFormRenderer,
              e.__vue_normalize__
          );
})(this, function (e, t, r, s, o, i, n) {
    'use strict';
    function a(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var l = a(r),
        d = a(n),
        u = {
            name: 'HFormRuntime',
            components: {
                ValidationObserver: o.ValidationObserver,
                HFormRenderer: i.HFormRenderer,
                VIcon: s.VIcon,
                VTooltip: s.VTooltip,
                VToolbarTitle: s.VToolbarTitle,
                VToolbar: s.VToolbar,
                VDivider: s.VDivider,
                VAlert: s.VAlert,
                VBtn: s.VBtn,
                VForm: s.VForm,
                VCol: s.VCol,
                VRow: s.VRow,
                VCard: s.VCard,
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
        c = d.default(
            {
                render: function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r(
                        'v-card',
                        { staticClass: 'pa-2' },
                        [
                            r(
                                'v-toolbar',
                                { attrs: { flat: '' } },
                                [
                                    r(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var s = t.on;
                                                        return [
                                                            r(
                                                                'v-icon',
                                                                e._g(
                                                                    {
                                                                        staticClass: 'mr-2',
                                                                        attrs: { tile: '', color: 'teal', large: '' },
                                                                    },
                                                                    s
                                                                ),
                                                                [e._v('mdi-clipboard-edit')]
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [e._v(' '), r('span', [e._v('返回')])]
                                    ),
                                    e._v(' '),
                                    r('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [
                                        e._v(e._s(e.title)),
                                    ]),
                                ],
                                1
                            ),
                            e._v(' '),
                            r('v-divider', { staticClass: 'mb-2' }),
                            e._v(' '),
                            e.showMessage
                                ? r('v-alert', { attrs: { type: e.messageType } }, [e._v(' ' + e._s(e.message) + ' ')])
                                : e._e(),
                            e._v(' '),
                            r(
                                'v-row',
                                [
                                    r(
                                        'v-col',
                                        [
                                            r(
                                                'ValidationObserver',
                                                { ref: 'observer' },
                                                [
                                                    r(
                                                        'v-form',
                                                        { ref: 'form' },
                                                        [
                                                            r('h-form-renderer', {
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
                                                            r(
                                                                'v-btn',
                                                                {
                                                                    staticClass: 'mr-4',
                                                                    attrs: { color: 'primary' },
                                                                    on: { click: e.saveOrUpdate },
                                                                },
                                                                [e._v('保存')]
                                                            ),
                                                            e._v(' '),
                                                            r(
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
            u,
            undefined,
            false,
            undefined,
            !1,
            void 0,
            void 0,
            void 0
        );
    (c.install = function (e) {
        e.component(c.name, c);
    }),
        null != ('undefined' == typeof window ? 'undefined' : l.default(window)) && window.Vue && c.install(window.Vue),
        (e.HFormRuntime = c),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
