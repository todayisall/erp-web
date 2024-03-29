import { ModalForm } from "@ant-design/pro-components";
import { HuosRemixIcon } from "@erp/icons";
import { Button, Tabs } from "antd";
import { css } from "@emotion/css";
import { CssEditor } from './css-editor'
import { AppConfig } from './config'
import type { TabsProps } from "antd";


const onChange = (key: string) => {
};

const TabContent = (el: React.ReactNode) => (
  <div
    className={css({
      height: 400,
      overflow: "auto",
    })}
  >
    {el}
  </div>
);

const items: TabsProps["items"] = [
];

export const ConfigSettings = () => {
  return (
    <ModalForm
      title="应用配置"
      submitter={false}
      trigger={<Button icon={<HuosRemixIcon type="icon-settings-3-line" />} />}
    >
      <Tabs items={items} />
    </ModalForm>
  );
};
