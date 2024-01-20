// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: 'eslint:recommended',
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   rules: {
//     // Indentation
//     'indent': ['error', 2],

//     // Semi-colons
//     'semi': ['error', 'always'],

//     // Quotes
//     'quotes': ['error', 'single'],

//     // Variable declarations
//     'init-declarations': 'error',
//     'no-var': 'error',

//     // Unused variables
//     'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],

//     // Function parameters spacing
//     'space-before-function-paren': ['error', 'always'],

//     // Arrow function spacing
//     'arrow-spacing': ['error', { 'before': true, 'after': true }],

//     // Avoid console.log in production
//     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

//     // Enforce consistent line breaks
//     'linebreak-style': ['error', 'unix'],

//     // Enforce consistent brace style for blocks
//     'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],

//     // Enforce consistent spacing before blocks
//     'space-before-blocks': ['error', 'always'],

//     // Enforce consistent spacing inside braces
//     'object-curly-spacing': ['error', 'always'],

//     // Enforce consistent spacing before or after unary operators
//     'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],

//     // Enforce consistent spacing after the // or /* in a comment
//     'spaced-comment': ['error', 'always', { 'markers': ['*'] }],
//   },
// };
