import React from 'react';
import { css } from '@emotion/react';
import { AppBar, Toolbar, IconButton, Box, Button } from '@mui/material';
import GridContainer from '../../components/GridContainer';
import { FIXED_HEIGHT } from '../../constatns/commons';
import theme from '../../styles/theme';
import type { ThemeTypes } from '../../types/styles';
import Logo from '../../images/Logo';

interface HeaderProps {
  themeType: ThemeTypes;
}

const Header = ({ themeType }: HeaderProps) => {
  const muiStyle = { color: theme[themeType].color };

  return (
    <AppBar component="nav" color={theme[themeType].muiTheme} sx={{ height: FIXED_HEIGHT.HEADER }}>
      <Toolbar>
        <GridContainer justifyContent="space-between" alignItems="center" css={itemWrapperStyle}>
          <IconButton onClick={() => console.log('아이콘 클릭!!')} sx={muiStyle}>
            <Logo fontSize="large" sx={{ fontSize: 60 }} />
          </IconButton>
          <Box>
            <Button sx={muiStyle}>Posts</Button>
            <Button sx={muiStyle}>Resume</Button>
          </Box>
        </GridContainer>
      </Toolbar>
    </AppBar>
  );
};

const itemWrapperStyle = css`
  margin: 0;
`;

export default Header;
