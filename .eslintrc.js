module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': 2,
        'no-empty': 'off',
        'key-spacing': 'error',
        'keyword-spacing': 2,
        'quotes': [1, 'single'],
        'import/no-cycle': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'declaration-block-single-line-max-declarations': 'off',
        'vue/html-indent': ['error', 4],
        'max-len': ['error', { code: 300 }],
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'indent': ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
        'vue/no-unused-components': 'off',
        'vue/no-unused-vars': 'off',
        'vue/no-v-for-template-key-on-child': 'off',
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'arrow-spacing': 'error',
        'space-infix-ops': 'error',
        'space-before-blocks': 'error',
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/no-arrow-functions-in-watch': 'off',
        'vue/no-template-key': 'off',
        'vue/no-v-html': 'off',
        'vue/comment-directive': 'off',
        'vue/no-parsing-error': 'off',
        'vue/no-deprecated-v-on-native-modifier': 'off',
        'vue/multi-word-component-names': 'off',
        'no-useless-escape': 'off',
        'no-prototype-builtins': 'off',
        'no-constant-condition': 'off',
        'no-use-before-define': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'generator-star-spacing': 'off',
        'no-multiple-template-root': 'off',
        'no-v-model-argument': 'off',
        'no-case-declarations': 'off',
        'no-var': 2, // 禁止使用var
        'no-with': 2, // 禁用with
        'no-eq-null': 2, // 禁止对null使用==或!=运算符
        'no-eval': 1, // 禁止使用eval
        'no-alert': 2, // 禁止使用alert confirm prompt
        'no-div-regex': 1, // 不能使用看起来像除法的正则表达式/=foo/
        'no-empty-function': 0, // 可以出现空函数
        'no-array-constructor': 2, // 禁止使用数组构造器
        'no-implied-eval': 2, // 禁止使用隐式eval
        'no-multiple-empty-lines': 2, // 禁止出现多行空行
        'comma-spacing': [2, { before: false, after: true }], // 逗号间距
        'no-extra-parens': [2, 'functions'], // 仅在函数表达式附近禁止不必要的括号
        'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-args': 2, // 函数参数不能重复
        'no-duplicate-case': 2, // switch中的case标签不能重复
        'eqeqeq': 0, // 必须使用全等
        'no-fallthrough': 1, // 禁止switch穿透
        'no-extra-label': 2, // 禁用不必要的标签
        'no-invalid-regexp': 2, // 禁止无效的正则表达式
        'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
        'no-irregular-whitespace': 2, // 不能有不规则的空格
        'no-iterator': 2, // 禁止使用__iterator__ 属性
        'no-label-var': 2, // label名不能与var声明的变量名相同
        'no-labels': 2, // 禁止标签声明
        'no-lone-blocks': 2, // 禁止不必要的嵌套块
        'space-in-parens': 2,
        'object-curly-spacing': [2, 'always'],
        'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
        'no-multi-spaces': 2, // 不能用多余的空格
        'no-multi-str': 2, // 字符串不能用\换行
        'no-new-func': 1, // 禁止使用new Function
        'no-new-object': 2, // 禁止使用new Object()
        'no-new-require': 2, // 禁止使用new require
        'no-redeclare': 2, // 禁止重复声明变量
        'no-unreachable': 2, // 不能有无法执行的代码
        'no-unused-expressions': 0, // 禁止无用的表达式
        'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
        'prefer-const': 0, // 首选const
        'id-match': 0, // 命名检测
        'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-useless-return': 2, // 禁止多余的 return 语句
        'no-nested-ternary': 2, // 禁止使用嵌套的三目运算
        'spaced-comment': [2, 'always', { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }], // 注释开始后，此规则将强制间距的一致性//或/*
        '@typescript-eslint/no-explicit-any': ['off'],
        'vue/valid-template-root': 1
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};