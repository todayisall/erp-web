import { Card, CardProps } from "antd";
import { ReactMaterialViewType } from "@erp/core";

export const View: ReactMaterialViewType<CardProps> = (
  { ...props },
  ref: any
) => {
  return <Card ref={ref} {...props} />;
};

export default View;
