import * as rules from 'vee-validate/dist/rules.umd.min';
import { extend, ValidationObserver, ValidationProvider, setInteractionMode, localize } from 'vee-validate';
import { lib } from '@hecate/core';

const CN = {
    code: 'zh_CN',
    messages: {
        alpha: '{_field_} 只能包含字母',
        alpha_dash: '{_field_} 只能包含字母数字字符、破折号和下划线',
        alpha_num: '{_field_}只能包含字母数字字符',
        alpha_spaces: '{_field_}只能包含字母字符和空格',
        between: '{_field_}必须在{min}与{max}之间',
        confirmed: '{_field_}不能和{target}匹配',
        digits: '{_field_}必须是数字，且精确到{length}位数',
        dimensions: '{_field_}必须在{width}像素与{height}像素之间',
        email: '{_field_} 不是一个有效的邮箱地址',
        excluded: '{_field_}不是一个有效值',
        ext: '{_field_}不是一个有效的文件',
        image: '{_field_}不是一张有效的图片',
        oneOf: '{_field_}不是一个有效值',
        integer: '{_field_}必须是整数',
        length: '{_field_}长度必须为{length}',
        max: '{_field_}不能超过{length}个字符',
        max_value: '{_field_}必须小于或等于{max}',
        mimes: '{_field_}不是一个有效的文件类型',
        min: '{_field_}必须至少有{length}个字符',
        min_value: '{_field_}必须大于或等于{min}',
        numeric: '{_field_}只能包含数字字符',
        regex: '{_field_}格式无效',
        required: '{_field_} 不能为空',
        required_if: '{_field_} 是必须的',
        size: '{_field_}必须小于{size}KB',
        double: '{_field_}字段必须为有效的小数'
    }
};

const excludeExtends = ['dimensions', 'oneOf', 'required_if'];

setInteractionMode('eager');

const ruleItems = [];

Object.keys(rules).forEach((rule) => {
    if (!excludeExtends.includes(rule)) {
        let message = CN.messages[rule];
        extend(rule, {
            ...rules[rule],
            message
        });
        ruleItems.push({
            name: lib.lodash.startCase(rule),
            type: rule,
            message
        });
    }
});

localize('zh_CN', CN);

const VeeValidate = {
    install(Vue, options) {
        Vue.prototype.$lib = lib;
        Vue.prototype.$rules = ruleItems;
        Vue.component('ValidationProvider', ValidationProvider);
        Vue.component('ValidationObserver', ValidationObserver);
    }
};

export default VeeValidate;
