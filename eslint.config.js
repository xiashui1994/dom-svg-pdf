import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'sort-imports': 'off',
      'import/order': 'off',
    },
  },
})
