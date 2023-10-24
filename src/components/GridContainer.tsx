import { Grid, GridProps } from '@mui/material';

interface GridContainerProps extends GridProps {}

const GridContainer = ({ children, ...props }: GridContainerProps) => (
  <Grid container spacing={3} {...props}>
    {children}
  </Grid>
);
export default GridContainer;
