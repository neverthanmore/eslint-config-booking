'use strict'

module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
	},
	rules: {
		/**
		 * @see http://eslint.cn/docs/rules/arrow-body-style
		 */
		"arrow-body-style": ["error", "always"],

		/**
		 * @see http://eslint.cn/docs/rules/arrow-parens
		 */
		"arrow-parens": ["error", "always"],

		/**
		 * @see http://eslint.cn/docs/rules/arrow-spacing
		 */
		"arrow-spacing": ["error", { before: true, after: true }],

		/**
		 * @see http://eslint.cn/docs/rules/constructor-super
		 */
		"constructor-super": "off",

		/**
		 * @see http://eslint.cn/docs/rules/no-class-assign
		 */
		"no-class-assign": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-confusing-arrow
		 */
		"no-confusing-arrow": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-const-assign
		 */
		"no-const-assign": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-dupe-class-members
		 */
		"no-dupe-class-members": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-new-symbol
		 */
		"no-new-symbol": "off",

		/**
		 * @see http://eslint.cn/docs/rules/no-this-before-super
		 */
		"no-this-before-super": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-useless-computed-key
		 */
		"no-useless-computed-key": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-useless-constructor
		 */
		"no-useless-constructor": "error",

		/**
		 * @see http://eslint.cn/docs/rules/no-var
		 */
		"no-var": "error",

		/**
		 * @see http://eslint.cn/docs/rules/object-shorthand
		 */
		"object-shorthand": ["error", "always", {
			"avoidQuotes": true,
			"ignoreConstructors": false,
		}],

		/**
		 * @see http://eslint.cn/docs/rules/prefer-arrow-callback
		 */
		"prefer-arrow-callback": "off",

		/**
		 * @see http://eslint.cn/docs/rules/prefer-const
		 */
		"prefer-const": ["error", {
			"destructuring": "all",
			"ignoreReadBeforeAssign": true
		}],

		/**
		 * @see http://eslint.cn/docs/rules/prefer-reflect
		 */
		"prefer-reflect": "off",

		/**
		 * @see http://eslint.cn/docs/rules/prefer-rest-params
		 */
		"prefer-rest-params": "off",

		/**
		 * @see http://eslint.cn/docs/rules/prefer-spread
		 */
		"prefer-spread": "off",

		/**
		 * @see http://eslint.cn/docs/rules/prefer-template
		 */
		"prefer-template": "off",

		/**
		 * @see http://eslint.cn/docs/rules/require-yield
		 */
		"require-yield": "off",

		/**
		 * @see http://eslint.cn/docs/rules/template-curly-spacing
		 */
		"template-curly-spacing": "off",

		/**
		 * @see http://eslint.cn/docs/rules/yield-star-spacing
		 */
		"yield-star-spacing": [ "error", { before: false, after: true }],
	}
}