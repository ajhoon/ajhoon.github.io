import { black, gray } from './colors';

/** 테마 스타일 */
const theme = {
  dark: {
    /** 기본 폰트 색상 */
    color: gray['000'],
    /** 기본 배경 색상 */
    backgroundColor: gray[800],
    /** mui theme color */
    muiTheme: 'transparent',
  },
  white: {
    /** 기본 폰트 색상 */
    color: black[900],
    /** 기본 배경 색상 */
    backgroundColor: black['000'],
    /** mui theme color */
    muiTheme: 'transparent',
  },
} as const;

export default theme;
