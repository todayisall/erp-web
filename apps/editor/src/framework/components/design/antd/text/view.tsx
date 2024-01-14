import React from "react";
import { Typography } from "antd";
import { ReactMaterialViewType } from "@erp/core";

export const TextView: ReactMaterialViewType<
  React.ComponentProps<typeof Typography.Text>
> = ({ children, ...props }, ref: any) => {
  return (
    <Typography.Text ref={ref} {...props}>
      {children}
    </Typography.Text>
  );
};
