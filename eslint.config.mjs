import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt({
    ...eslintConfigPrettier,
    ...eslintPluginPrettierRecommended,
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'error',
    },
})
