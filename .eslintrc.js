module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error", 2,
      {
        "VariableDeclarator": 1,
        "CallExpression": { "arguments": "first" },
        "ArrayExpression": "first",
        "ObjectExpression": "first",
        "ImportDeclaration": "first",
        "MemberExpression": 1,
        "SwitchCase": 1
      }
    ],
    "max-len": [
      "error", {
        "code": 120 //限制最大列数
      }
    ],
    "max-lines": ["error", 500],//限制最大行数
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [//强制使用一致的双引号
      "error",
      "double"
    ],
    "semi": [//不使用自动分号插入 (ASI)，强制使用一致的分号
      "error",
      "always"
    ],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "no-useless-escape": 0,
    "no-unused-vars": 0,
    "no-undef": [//检测变量未定义
      "error",
      {
        "typeof": true
      }
    ],
    "no-undef-init": "error",
    "no-console": [//阻止出现console调用
      "error",
      {
        "allow": ["warn", "error"]//排除warn 和error
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always", //匿名函数需要前置空格
        "named": "never",//命名函数不需要前置空格
        "asyncArrow": "always"
      }],
    "unicode-bom": "error",//禁止BOM头
    "no-tabs": "error",//禁用tab
    "no-new-wrappers": "error",//禁用包装实例
    "no-control-regex": "error",//检测regex中出现控制符
    "no-new": "error",//禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量来保持一致性和约定
    "no-var": "error",//阻止 var 的使用，推荐使用 const 或 let
    "no-eval": ["error", { "allowIndirect": true }],//禁止直接调用eval
    "no-extend-native": "error",//禁止扩展原生类型
    "jsx-quotes": ["error"],//强制在 JSX 属性中使用一致的单引号或双引号 (默认是双引号)
    "require-await": "error",//对不包含 await 表达式的 async 函数发出警告
    "no-return-await": "error",//不在return中出现await
    "no-lone-blocks": "error",//消除脚本顶部或其它块中不必要的和潜在的令人困惑的代码块
    "sort-vars": 0,
    "valid-jsdoc": [
      "error",
      {
        "requireReturn": false,
        "prefer": {//别名对应表
          "augments": "extends",
          "var": "member",
          "arg": "param",
          "argument": "param",
          "prop": "property",
          "func": "function",
          "method": "function",
          "description": "desc",
          "defaultvalue": "default"
        }
      }
    ],
    "react/jsx-indent-props": [2, 2], //验证JSX中的props缩进
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
    "react/jsx-uses-react": 1, //防止react被错误地标记为未使用
    "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    "react/no-deprecated": 1 //不使用弃用的方法
  }
};