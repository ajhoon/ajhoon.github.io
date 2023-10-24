import * as React from 'react';
import { Global, css } from '@emotion/react';
import theme from '../styles/theme';
import Header from '../components/Header';
import { FIXED_HEIGHT } from '../constatns/commons';
import type { HeadFC, PageProps } from 'gatsby';
import type { ThemeTypes } from '../types/styles';

const THEME_TYPE = 'dark';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Global styles={[themeStyle(THEME_TYPE), style]} />
      <Header themeType={THEME_TYPE} />
      <div css={bodyStyle}>123123</div>
    </main>
  );
};

const style = css`
  body {
    margin: 0;
  }
`;

const themeStyle = (type: ThemeTypes) => css`
  html {
    ${theme[type]};
  }
`;

const bodyStyle = css`
  margin-top: ${FIXED_HEIGHT.HEADER}px;
`;

export default IndexPage;

export const Head: HeadFC = () => <title>AHN'S Blog</title>;
