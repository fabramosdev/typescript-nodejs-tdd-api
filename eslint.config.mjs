// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      // turns a rule on with no configuration (i.e. uses the default configuration)
      // '@typescript-eslint/array-type': 'error',
      // turns on a rule with configuration
      // '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    },
  },
);