import React from "react";
import type { MenuProps } from "antd";
import {
  Button,
  ConfigProvider,
  Flex,
  Input,
  Menu,
  Space,
  Typography,
} from "antd";
import { useSchema } from "@/framework/stores/useSchema";
import { SerializedNodes } from "@craftjs/core";
import { useDebounceEffect } from "ahooks";
import { css } from "@emotion/css";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import { HuosRemixIcon } from "@erp/icons";
import { TreeNode } from "./tree-node";
import { ProCard } from "@ant-design/pro-components";

type MenuItem = Required<MenuProps>["items"][number];

function convertToTree(data: SerializedNodes): {
  items: MenuItem[];
  openKeys: string[];
} {
  const rootNode = data["ROOT"];
  const tree: MenuItem[] = [];
  const openKeys: string[] = [];

  function traverse(nodeId: string): MenuItem {
    const node = data[nodeId];
    console.log(node, "node");
    const { nodes } = node;

    const treeItem: MenuItem = {
      label: <TreeNode nodeId={nodeId} />,
      key: nodeId,
      children: nodes.length > 0 ? nodes.map(traverse) : undefined,
    };

    if (nodes.length > 0) {
      openKeys.push(nodeId);
    }

    return treeItem;
  }

  if (rootNode) {
    tree.push(traverse("ROOT"));
  }

  return {
    items: tree,
    openKeys,
  };
}

const classes = {
  tree: css({
    paddingBlock: 12,
    paddingInline: 8,
  }),
  search: css({
    paddingInline: 8
  }),
};

export const Tree = () => {
  const { serializeNodes } = useSchema();
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([]);
  const [menuOpenKeys, setMenuOpenKeys] = React.useState<string[]>([]);

  useDebounceEffect(() => {
    if (serializeNodes) {
      const { items, openKeys } = convertToTree(serializeNodes);
      setMenuOpenKeys((oldState) => {
        return [...oldState, ...openKeys];
      });
      setMenuItems(items);
    }
  }, [serializeNodes]);

  return (
    <Flex className={classes.tree} vertical gap={12}  >
      <Flex justify="space-around" gap={12}>
        <Input placeholder="请输入组件名称" suffix={<SearchOutlined />} />
        <Space>
          <Button ghost type="primary" icon={<ClearOutlined />} />
        </Space>
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHeight: 32,
              itemBorderRadius: 4,
              itemMarginBlock: 0,
              itemMarginInline: 0,
              activeBarBorderWidth: 0,
              itemPaddingInline: 0,
            },
          },
        }}
      >
        {menuItems.length === 0 ? (
          <ProCard size="small" bordered >
            <Typography.Text type="secondary">当前暂无节点信息</Typography.Text>
          </ProCard>
        ) : (
          <Menu
            mode="inline"
            items={menuItems}
            inlineIndent={12}
            openKeys={menuOpenKeys}
            expandIcon={<HuosRemixIcon type="icon-arrow-down-s-line" />}
            selectable={false}
            onOpenChange={(keys) => {
              setMenuOpenKeys(keys);
            }}
          />
        )}
      </ConfigProvider>
    </Flex>
  );
};
