import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,
    {
        files: ["**/*.js", "**/*.mjs"],
        ignores: ["node_modules/**", ".husky/**"],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-console": "warn",
            "no-dupe-keys": "off",
            "no-var": "error",
        },
    },
];
