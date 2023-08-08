import { Table, Input, Space } from "antd";
import { CheckboxIcon, EditIcon, TrashIcon } from "../Icons";
import { useState } from "react";
export const TableList = () => {
  const [editField, setEditField] = useState(true);
  const columns = [
    { title: "", dataIndex: "key", width: 50 },
    {
      title: (
        <div className="d-flex align-items-center gap-2">
          |
          <Input
            style={{ background: "#f6f6f6" }}
            rootClassName="ui-input--no-outline"
            disabled={editField}
            placeholder={"test"}
            suffix={
              <Space>
                <TrashIcon />
                {editField ? (
                  <EditIcon onClick={() => setEditField(!editField)} />
                ) : (
                  <CheckboxIcon onClick={() => setEditField(!editField)} />
                )}
              </Space>
            }
          />
        </div>
      ),
      dataIndex: "name",
      width: 350,
      elipsis: true,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i + 1,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div className="scraper-list__table">
      <Table
        size="middle"
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 150 }}
      />
    </div>
  );
};
