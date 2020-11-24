const definitions = {
    TEXT_FIELD: {
        index: 'TEXT_FIELD',
        schema: {
            type: 'string',
            title: '单行文本',
            tag: 'v-text-field',
            'x-props': {
                'loader-height': 2,
                outlined: true,
                type: 'text',
            },
            'x-rules': '',
        },
    },
    TEXT_AREA: {
        index: 'TEXT_AREA',
        schema: {
            type: 'string',
            title: '多行文本',
            tag: 'v-textarea',
            'x-props': {
                'loader-height': 2,
                outlined: true,
                'row-height': 24,
                rows: 2,
                type: 'text',
            },
            'x-display': 'textarea',
            'x-rules': '',
        },
    },
    SLIDER: {
        index: 'SLIDER',
        schema: {
            type: 'integer',
            title: '滑块',
            tag: 'v-slider',
            'x-props': {
                'loader-height': 2,
                min: 0,
                max: 100,
                step: 1,
                'thumb-size': 32,
                'tick-size': 2,
            },
            'x-display': 'slider',
        },
    },
    RANGE_SLIDER: {
        index: 'RANGE_SLIDER',
        schema: {
            type: 'integer',
            title: '范围滑块',
            tag: 'v-range-slider',
            'x-props': {
                'loader-height': 2,
                min: 0,
                max: 100,
                step: 1,
                'thumb-size': 32,
                'tick-size': 2,
            },
            'x-display': 'range-slider',
        },
    },

    CHECKBOX: {
        index: 'CHECKBOX',
        schema: {
            type: 'boolean',
            title: '复选框',
            tag: 'v-checkbox',
            'x-props': {},
        },
    },
    SWITCHS: {
        index: 'SWITCHS',
        schema: {
            type: 'boolean',
            title: '开关',
            tag: 'v-switch',
            'x-display': 'switch',
            'x-props': {},
        },
    },

    DATE_PICKER: {
        index: 'DATE_PICKER',
        schema: {
            type: 'string',
            title: '日期选择',
            tag: 'v-date-picker',
            format: 'date',
            'x-props': {
                'first-day-of-week': 0,
                locale: 'zh-cn',
                type: 'date',
            },
        },
    },
    TIME_PICKER: {
        index: 'TIME_PICKER',
        schema: {
            type: 'string',
            title: '时间选择',
            tag: 'v-time-picker',
            format: 'time',
            'x-props': {},
        },
    },

    SELECT_SINGLE: {
        index: 'SELECT_SINGLE',
        schema: {
            type: 'string',
            title: '单项下拉',
            tag: 'v-select',
            'x-props': {
                'no-data-text': '没有可用选项',
                outlined: true,
            },
            enum: ['value 1', 'value 2'],
        },
    },
    COMBOBOX: {
        index: 'COMBOBOX',
        schema: {
            type: 'array',
            title: '组合框',
            tag: 'v-combobox',
            'x-props': {
                'no-data-text': '没有可用选项',
                outlined: true,
            },
            items: {
                type: 'string',
            },
        },
    },

    SELECT_MULTIPLE: {
        index: 'SELECT_MULTIPLE',
        schema: {
            type: 'array',
            title: '多项下拉',
            tag: 'v-select',
            'x-display': 'icon',
            'x-props': {},
            items: {
                type: 'string',
                oneOf: [
                    {
                        const: 'value1',
                        title: 'Value 1',
                    },
                    {
                        const: 'value2',
                        title: 'Value 2',
                    },
                ],
            },
        },
    },

    COLOR_PICKER: {
        index: 'COLOR_PICKER',
        schema: {
            type: 'string',
            title: '颜色选择',
            tag: 'v-color-picker',
            format: 'hexcolor',
            properties: {
                outlined: true,
                'hide-details': true,
            },
        },
    },

    CASCADE_SELECT: {
        index: 'CASCADE_SELECT',
        schema: {
            type: 'string',
            title: '级联下拉',
            tag: 'v-select',
            oneOf: [],
        },
    },
    AJAX_SELECT: {
        index: 'AJAX_SELECT',
        schema: {
            type: 'array',
            title: '异步选择',
            tag: 'v-select',
            'x-display': 'icon',
            properties: {},
            items: {
                type: 'string',
                oneOf: [
                    {
                        const: 'value1',
                        title: 'Value 1',
                    },
                    {
                        const: 'value2',
                        title: 'Value 2',
                    },
                ],
            },
        },
    },
    RADIO: {
        index: 'RADIO',
        schema: {
            type: 'string',
            title: '单选框组',
            tag: 'v-radio-group',
            'x-display': 'radio',
            properties: {},
            enum: ['value 1', 'value 2'],
        },
    },

    FILE_INPUT: {
        index: 'FILE_INPUT',
        schema: {
            type: 'string',
            title: '上传',
            tag: 'v-file-input',
            contentMediaType: 'image/png',
            writeOnly: true,
            properties: {},
        },
    },
};

export default definitions;
