import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../src/styles/theme";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (
  node,
  options
) => {
  return mountBase(<AllTheProviders>{node}</AllTheProviders>, options);
};

export default mount;
