module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: { window: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'chai-friendly',
    'prettier',
  ],
  rules: {
    'no-console': ['error', { allow: ['log'] }],
    // 다른 스코프에서의 동일한 이름의 변수, 함수 등이 사용되는 것을 막아주는 규칙이지만 'off'
    'no-shadow': 'off',
    // 정의되지 않은 변수 사용에 Warning.
    'no-undef': 'error',
    // .js인 경우가 있어서 React만은 예외처리
    'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
    'no-use-before-define': ['error', { variables: false, functions: false }],
    // 기본적으로 객체를 재정의할 수 없지만, props만은 예외로 처리
    'no-param-reassign': ['error', { props: false }],
    // await을 바로 return 가능하게 함.
    'no-return-await': 'off',
    'class-methods-use-this': 'off',
    // _id 같이 이미 사용하고 있는 변수가 많아 'off'
    'no-underscore-dangle': 'off',
    // Return 타입이 일정하도록 해주는 규칙 (Meteor 특성 상 그냥 return 하는 경우도 있어 제외시킴)
    'consistent-return': 'off',
    // smaple.property (O) | sample['property'] (X)
    'dot-notation': 'off',
    // 한 줄당 글자 수 제한 (코멘트 된 것은 에러처리 하지 않는다)
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true }],
    // 테스트코드 작성 시 OFF로 해줘야함 | 추후 테스트코드 작성 시 문제가 없어지면 'off' 해제
    'no-restricted-globals': 'off',
    // export { default } from './MobileHeaderContainer'; 에러 | 보는 사람이 그때그때 수정
    'no-restricted-exports': 'warn', // export default가 존재하도록 강제하는 규칙
    'import/prefer-default-export': 'off',
    // dependencies인 모듈이 devDependencies에 있는 경우 에러 발생시키는 규칙
    'import/no-extraneous-dependencies': 'off',
    // import 시에 파일의 확장자를 쓰지 않도록 강제하는 규칙, 예외를 통해 js jsx ts tsx는 가능하도록 구현
    'import/extensions': ['error', { json: 'always' }],
    'import/no-unresolved': ['error', { ignore: ['@wingeat/wis/*', '@biz/*'] }],
    // import 구문 중괄호 사이의 member 모듈 알파벳 순으로 정렬
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // import 순서 세팅
    'import/order': [
      'error',
      {
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['type'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@emotion/react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'lodash',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'store/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'context/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'hoc/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'constants/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'styles/**',
            patternOptions: { noglobstar: true },
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'icons/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'components/**',
            patternOptions: { noglobstar: true },
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.+(css|sass|less|scss|pcss|styl)',
            patternOptions: { dot: true, nocomment: true },
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
            patternOptions: { dot: true, nocomment: true },
            group: 'unknown',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    // prop-types를 명확히 명세하도록 강제하는 규칙
    'react/prop-types': 'off',
    // jsx가 존재한다면 React를 import하도록 강제하는 규칙 (React 17부터는 새로운 JSX변환으로 없어도  렌더링 가능)
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': 'error',
    // <></> 같은 무의미한 Fragment를 막는 규칙
    'react/jsx-no-useless-fragment': ['off', { allowExpressions: true }],
    // jsx를 사용했는데 확장자가 .jsx가 아니면 에러를 내는 규칙
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    // forwardRef를 사용할 시, 따로 이름 생성을 강제하는 규칙
    'react/display-name': 'off',
    // a tag 사용 시, noreferrer 사용 강제하는 규칙, 구형 브라우저 쓰지 않기 때문에 해당 린트 'off'
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': { allowExistingDirectories: true },
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-undef': 'off',
        'no-restricted-exports': 'off',
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
