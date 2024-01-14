import { Divider, DividerProps } from "antd";
import { ReactMaterialViewType } from "@erp/core";

export const DividerView: ReactMaterialViewType<
DividerProps
> = ({ ...props }, ref: any) => {
  return (
    <div style={{ display: 'inline-block', width: '100%' }} ref={ref}  >
      <Divider {...props} />
    </div>
  );
};

export default DividerView;
