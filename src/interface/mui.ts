/* custom interface for MUI */
declare module "@mui/material/styles" {
   
    interface BreakpointsOptions {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }
    interface ThemeOptions {
      containers: {
        maxWidth: string;
        px: string;
      };
    }
    interface Theme {
      containers: {
        maxWidth: string;
        px: string;
      };
    }
    interface BreakpointOverrides {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }
    
}
export {};
