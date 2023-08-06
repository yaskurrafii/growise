import { Table, Input, Space, Button } from "antd";
import { EditIcon, TrashIcon } from "../Icons";
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
            placeholder={"test"}
            suffix={
              <Space>
                <TrashIcon />
                {editField ? (
                  <EditIcon onClick={() => setEditField(!editField)} />
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setEditField(!editField)}
                  >
                    <path
                      d="M10.0003 3.99996L12.0003 5.99996M8.66699 13.3333H14.0003M3.33366 10.6666L2.66699 13.3333L5.33366 12.6666L13.0577 4.94263C13.3076 4.69259 13.448 4.35351 13.448 3.99996C13.448 3.64641 13.3076 3.30733 13.0577 3.05729L12.943 2.94263C12.693 2.69267 12.3539 2.55225 12.0003 2.55225C11.6468 2.55225 11.3077 2.69267 11.0577 2.94263L3.33366 10.6666Z"
                      stroke="#616161"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
    <div className="scraper-list__table rounded-2 overflow-auto">
      <Table
        style={{ width: 400 }}
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
