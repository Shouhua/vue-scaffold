module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'comma-dangle': 'off', //结尾使用额外的逗号
        'quote-props': 'off', //只对非法标识符的属性使用引号
        // 'no-trailing-spaces': 'off' //禁止行尾空格
        'vue/html-self-closing': 'off', 
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': 'off',
        'import/no-dynamic-require': 'off',
        'linebreak-style': 'off', //强制统一的换行符
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'global-require': 'off', //全局的require
        'no-debugger': process.env.NODE_ENV === 'production'? 2 : 0,
        'no-alert': process.env.NODE_ENV === 'production'? 2 : 0,
        'no-console': 'off', //暂时先关掉，因为prod也有可能需要输入
        'no-param-reassign': 'off',
        "prefer-promise-reject-errors": 'off',
        "no-mixed-operators": 'off',
        "vue/max-attributes-per-line": [2, {
        "singleline": 1,
        "multiline": {
            "max": 1,
            "allowFirstLine": false
        }
        }], //每一行attributes的个数限制
        "vue/attribute-hyphenation": 'off', //template内attribute的风格'user-info' 还是'userInfo'
        "func-names": 'off',
        "vue/attributes-order": "off", //vue组件template属性的顺序
        // "vue/require-prop-types": "off"
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
        "ignores": []
        }],
        "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
        }]
    }
};