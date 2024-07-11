import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
})
