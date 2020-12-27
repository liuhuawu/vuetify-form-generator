import 'core-js/modules/es.function.name.js';
import e from '@babel/runtime-corejs3/helpers/esm/typeof';
import {
    VIcon as t,
    VTextField as n,
    VListItemIcon as i,
    VListItemTitle as s,
    VListItemContent as o,
    VBtn as r,
    VListItem as c,
    VVirtualScroll as l,
    VList as a,
    VMenu as d,
} from 'vuetify/lib';
import * as u from '@mdi/js';
import { lib as m } from '@hecate/core';
import h from 'vue-runtime-helpers/dist/normalize-component.mjs';
var f = h(
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
                                                                                  [e._v(' mdi-' + e._s(e.search) + ' ')]
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
            VIcon: t,
            VTextField: n,
            VListItemIcon: i,
            VListItemTitle: s,
            VListItemContent: o,
            VBtn: r,
            VListItem: c,
            VVirtualScroll: l,
            VList: a,
            VMenu: d,
        },
        name: 'HIconList',
        props: {
            value: String,
            dense: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            itemHeight: { type: Number, default: 40 },
        },
        data: function () {
            return { isSelected: !1, icons: [], menu: !1, search: '' };
        },
        computed: {
            filteredIcons: function () {
                var e = this;
                return this.icons.length && this.search
                    ? this.search
                        ? this.isSelected
                            ? []
                            : this.icons.filter(function (t) {
                                  return t.toLowerCase().match(e.search.toLowerCase());
                              })
                        : this.icons
                    : [];
            },
        },
        watch: {
            value: {
                handler: function (e, t) {
                    e && m.lodash.startsWith(e, 'mdi-') ? (this.search = e.substring(4)) : (this.search = e);
                },
                immediate: !0,
            },
            search: {
                handler: function (e, t) {
                    this.filteredIcons.length > 0 && !this.menu
                        ? (this.menu = !0)
                        : this.filteredIcons.length || (this.menu = !1),
                        e && !m.lodash.startsWith(e, 'mdi-') ? this.$emit('input', 'mdi-' + e) : this.$emit('input', e);
                },
            },
        },
        mounted: function () {
            this.icons = Object.keys(u).map(function (e) {
                return m.lodash.kebabCase(e);
            });
        },
        methods: {
            select: function (e) {
                (this.search = e.substring(4)), (this.isSelected = !0);
            },
            reset: function () {
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
(f.install = function (e) {
    e.component(f.name, f);
}),
    null != ('undefined' == typeof window ? 'undefined' : e(window)) && window.Vue && f.install(window.Vue);
export { f as HIconList };