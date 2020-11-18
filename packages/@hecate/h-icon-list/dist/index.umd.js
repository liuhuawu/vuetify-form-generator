!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports, require('vuetify/lib'), require('@mdi/js'), require('@hecate/core'))
        : 'function' == typeof define && define.amd
        ? define(['exports', 'vuetify/lib', '@mdi/js', '@hecate/core'], t)
        : t(
              ((e = 'undefined' != typeof globalThis ? globalThis : e || self).main = {}),
              e.Vuetify,
              e['mdi-js'],
              e.core
          );
})(this, function (e, t, n, i) {
    'use strict';
    function s(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function (n) {
                    if ('default' !== n) {
                        var i = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(
                            t,
                            n,
                            i.get
                                ? i
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
    var o = s(n);
    function r(e, t, n, i, s, o, r, c, l, a) {
        'boolean' != typeof r && ((l = c), (c = r), (r = !1));
        const d = 'function' == typeof n ? n.options : n;
        let u;
        if (
            (e &&
                e.render &&
                ((d.render = e.render),
                (d.staticRenderFns = e.staticRenderFns),
                (d._compiled = !0),
                s && (d.functional = !0)),
            i && (d._scopeId = i),
            o
                ? ((u = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          t && t.call(this, l(e)),
                          e && e._registeredComponents && e._registeredComponents.add(o);
                  }),
                  (d._ssrRegister = u))
                : t &&
                  (u = r
                      ? function (e) {
                            t.call(this, a(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            t.call(this, c(e));
                        }),
            u)
        )
            if (d.functional) {
                const e = d.render;
                d.render = function (t, n) {
                    return u.call(n), e(t, n);
                };
            } else {
                const e = d.beforeCreate;
                d.beforeCreate = e ? [].concat(e, u) : [u];
            }
        return n;
    }
    const c = r(
        {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    'v-menu',
                    {
                        attrs: {
                            bottom: '',
                            'close-on-content-click': '',
                            'open-on-click': e.filteredIcons.length > 0,
                            'offset-y': '',
                            rounded: 'b-xl',
                        },
                        scopedSlots: e._u([
                            {
                                key: 'activator',
                                fn: function (t) {
                                    var i = t.on,
                                        s = t.attrs;
                                    return [
                                        n(
                                            'v-text-field',
                                            e._g(
                                                e._b(
                                                    {
                                                        attrs: {
                                                            dense: e.dense,
                                                            loading: !e.icons,
                                                            disabled: e.disabled,
                                                            'hide-details': '',
                                                            clearable: '',
                                                            outlined: '',
                                                            placeholder: '搜索图标 (e.g. account)',
                                                        },
                                                        on: { 'click:clear': e.reset },
                                                        scopedSlots: e._u(
                                                            [
                                                                {
                                                                    key: 'prepend-inner',
                                                                    fn: function () {
                                                                        return [
                                                                            e.isSelected
                                                                                ? n(
                                                                                      'v-icon',
                                                                                      { attrs: { color: 'primary' } },
                                                                                      [
                                                                                          e._v(
                                                                                              ' mdi-' +
                                                                                                  e._s(e.search) +
                                                                                                  ' '
                                                                                          ),
                                                                                      ]
                                                                                  )
                                                                                : e._e(),
                                                                            e._v(' '),
                                                                            n('code', { staticClass: 'mx-1 py-1' }, [
                                                                                e._v('mdi-'),
                                                                            ]),
                                                                        ];
                                                                    },
                                                                    proxy: !0,
                                                                },
                                                            ],
                                                            null,
                                                            !0
                                                        ),
                                                        model: {
                                                            value: e.search,
                                                            callback: function (t) {
                                                                e.search = t;
                                                            },
                                                            expression: 'search',
                                                        },
                                                    },
                                                    'v-text-field',
                                                    s,
                                                    !1
                                                ),
                                                i
                                            )
                                        ),
                                    ];
                                },
                            },
                        ]),
                        model: {
                            value: e.menu,
                            callback: function (t) {
                                e.menu = t;
                            },
                            expression: 'menu',
                        },
                    },
                    [
                        e._v(' '),
                        n(
                            'v-list',
                            {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.filteredIcons.length > 0,
                                        expression: 'filteredIcons.length > 0',
                                    },
                                ],
                            },
                            [
                                n('v-virtual-scroll', {
                                    attrs: {
                                        items: e.filteredIcons,
                                        'item-height': e.itemHeight,
                                        height: Math.min(e.filteredIcons.length * e.itemHeight, 300),
                                    },
                                    scopedSlots: e._u([
                                        {
                                            key: 'default',
                                            fn: function (t) {
                                                var i = t.item;
                                                return [
                                                    n(
                                                        'v-list-item',
                                                        {
                                                            key: i,
                                                            attrs: { dense: e.dense },
                                                            on: {
                                                                click: function (t) {
                                                                    return t.stopPropagation(), e.select(i);
                                                                },
                                                            },
                                                        },
                                                        [
                                                            n(
                                                                'v-list-item-icon',
                                                                [
                                                                    n('v-icon', {
                                                                        staticClass: 'mr-2',
                                                                        attrs: { color: 'primary' },
                                                                        domProps: { textContent: e._s(i) },
                                                                    }),
                                                                ],
                                                                1
                                                            ),
                                                            e._v(' '),
                                                            n(
                                                                'v-list-item-content',
                                                                [
                                                                    n('v-list-item-title', {
                                                                        domProps: { textContent: e._s(i.substring(4)) },
                                                                    }),
                                                                ],
                                                                1
                                                            ),
                                                            e._v(' '),
                                                            n(
                                                                'v-btn',
                                                                {
                                                                    attrs: { icon: '' },
                                                                    on: {
                                                                        click: function (t) {
                                                                            return t.stopPropagation(), e.select(i);
                                                                        },
                                                                    },
                                                                },
                                                                [
                                                                    n('v-icon', { attrs: { size: '20' } }, [
                                                                        e._v(' mdi-content-copy '),
                                                                    ]),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ];
                                            },
                                        },
                                    ]),
                                }),
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
            components: {
                VIcon: t.VIcon,
                VTextField: t.VTextField,
                VListItemIcon: t.VListItemIcon,
                VListItemTitle: t.VListItemTitle,
                VListItemContent: t.VListItemContent,
                VBtn: t.VBtn,
                VListItem: t.VListItem,
                VVirtualScroll: t.VVirtualScroll,
                VList: t.VList,
                VMenu: t.VMenu,
            },
            name: 'HIconList',
            props: {
                value: String,
                dense: { type: Boolean, default: !1 },
                disabled: { type: Boolean, default: !1 },
                itemHeight: { type: Number, default: 40 },
            },
            data: () => ({ isSelected: !1, icons: [], menu: !1, search: '' }),
            computed: {
                filteredIcons() {
                    return this.icons.length && this.search
                        ? this.search
                            ? this.isSelected
                                ? []
                                : this.icons.filter((e) => e.toLowerCase().match(this.search.toLowerCase()))
                            : this.icons
                        : [];
                },
            },
            watch: {
                value: {
                    handler(e, t) {
                        e && i.lib.lodash.startsWith(e, 'mdi-') ? (this.search = e.substring(4)) : (this.search = e);
                    },
                    immediate: !0,
                },
                search: {
                    handler(e, t) {
                        this.filteredIcons.length > 0 && !this.menu
                            ? (this.menu = !0)
                            : this.filteredIcons.length || (this.menu = !1),
                            e && !i.lib.lodash.startsWith(e, 'mdi-')
                                ? this.$emit('input', 'mdi-' + e)
                                : this.$emit('input', e);
                    },
                },
            },
            mounted() {
                this.icons = Object.keys(o).map((e) => i.lib.lodash.kebabCase(e));
            },
            methods: {
                select(e) {
                    (this.search = e.substring(4)), (this.isSelected = !0);
                },
                reset() {
                    (this.menu = !1), (this.isSelected = !1), (this.search = '');
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
    (c.install = function (e) {
        e.component(c.name, c);
    }),
        null != typeof window && window.Vue && c.install(window.Vue),
        (e.HIconList = c),
        Object.defineProperty(e, '__esModule', { value: !0 });
});
