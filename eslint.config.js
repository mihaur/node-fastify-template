import neostandard from 'neostandard'

// TODO: does not work in current setup
// export default neostandard({ languageOptions: { ecmaVersion: 2025 } })

const ns = neostandard({})
for (const item of ns) {
  if (item?.languageOptions?.ecmaVersion < 2025) {
    item.languageOptions.ecmaVersion = 2025
  }
}

export default [
  ...ns,
  {
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
    }
  }
]
