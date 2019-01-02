module.exports = {
    env: {
        node: true,
        es6: true
    },
    plugins: ["prettier"],
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module"
    },
    rules: {
        "prettier/prettier": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "block-scoped-var": "off",
        "callback-return": "error",
        camelcase: "error",
        complexity: "error",
        "consistent-return": "off",
        "consistent-this": "error",
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "error",
        eqeqeq: "error",
        "func-names": ["error", "never"],
        "func-style": ["error", "declaration"],
        "generator-star-spacing": "off",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "init-declarations": "off",
        "max-depth": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "new-cap": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-continue": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "off",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "error",
        "no-sync": "error",
        "no-ternary": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-with": "error",
        "object-shorthand": "off",
        "operator-assignment": ["error", "always"],
        "operator-linebreak": "error",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "no-var": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        radix: "error",
        "require-jsdoc": "off",
        "rest-spread-spacing": "error",
        "sort-imports": "off",
        "sort-vars": "off",
        strict: "error",
        "template-curly-spacing": "error",
        "unicode-bom": ["error", "never"],
        "vars-on-top": "off",
        "wrap-iife": "error",
        "wrap-regex": "error",
        yoda: ["error", "never"]
    }
};
