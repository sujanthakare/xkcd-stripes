import { Box } from '../box';

export function Container(props: React.ComponentProps<typeof Box>) {
  const { children, ...rest } = props;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box {...rest} maxWidth="64rem" width="100%">
        {children}
      </Box>
    </Box>
  );
}
