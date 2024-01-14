import { Flex, FlexProps } from "antd";
import { ReactMaterialViewType } from "@erp/core";

export const DividerView: ReactMaterialViewType<
FlexProps
> = ({ ...props }, ref: any) => {
  return (
    <Flex ref={ref} {...props} />
  );
};

export default DividerView;
