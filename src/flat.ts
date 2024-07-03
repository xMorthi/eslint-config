import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export const generateConfig = () =>
  createConfigForNuxt({
    features: {
      stylistic: {
        commaDangle: 'always-multiline',
      },
      tooling: true,
    },
  })
    .prepend(
      {
        // Ignores have to be a separate object to be treated as global ignores
        // Don't add other attributes to this object
        ignores: ['android/**', 'ios/**'],
      },
      {
        languageOptions: {
          globals: {
            $fetch: 'readonly',
            NodeJS: 'readonly',
          },
        },
        name: 'local/settings',
        settings: {
          jsdoc: {
            ignoreInternal: true,
            tagNamePreference: {
              note: 'note',
              warning: 'warning',
            },
          },
        },
      }
    )

    .override('nuxt/javascript', {
      rules: {
        curly: ['error', 'all'], // Including if blocks with a single statement
        'dot-notation': 'error',
        // 'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
        'no-console': 'off',
        'no-lonely-if': 'error', // No single if in an "else" block
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-const': [
          'error',
          { destructuring: 'any', ignoreReadBeforeAssign: false },
        ],
        'require-await': 'warn',
        'sort-imports': 'off',
      },
    })

    .override('nuxt/typescript/rules', {
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
          },
        ],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/unified-signatures': 'off',
        ...{
          // TODO: Discuss if we want to enable this
          '@typescript-eslint/ban-types': 'off',
          // TODO: Discuss if we want to enable this
          '@typescript-eslint/no-explicit-any': 'off',
          // TODO: Discuss if we want to enable this
          '@typescript-eslint/no-invalid-void-type': 'off',
        },
      },
    })

    .override('nuxt/tooling/regexp', {
      rules: {
        'regexp/no-unused-capturing-group': 'off',
      },
    })

    .override('nuxt/vue/rules', {
      rules: {
        // TODO: after migrating to nuxt ui we can enable this
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-side-effects-in-computed-properties': 'warn',
        'vue/no-async-in-computed-properties': 'warn',
        'vue/operator-linebreak': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
      },
    })

    // Stylistic rules
    .override('nuxt/stylistic', {
      rules: {
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/indent-binary-ops': 'off',
        '@stylistic/max-statements-per-line': 'off',
        '@stylistic/operator-linebreak': 'off',
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/space-before-function-paren': 'off',
        '@stylistic/member-delimiter-style': 'off',
        // '@stylistic/indent': 'off',
        // '@stylistic/no-tabs': 'off',
        '@stylistic/semi': 'off',
        '@stylistic/arrow-parens': 'off',
        '@stylistic/comma-dangle': 'off',
        '@stylistic/indent': ['warn', 2],
      },
    });
