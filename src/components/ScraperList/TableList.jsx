import { Table } from "antd";
import { useAtom } from "jotai";
import { dataItem } from "@/stores/crawler";
import { useEffect } from "react";

export const TableList = () => {
  const [dataitem, setDataitem] = useAtom(dataItem);
  let columns = [];
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     width: 150,
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     width: 150,
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //   },
  // ];

  useEffect(() => {
    for (let key in dataitem) {
      columns.push({
        title: key,
        dataIndex: key,
        width: 150,
      });
    }
  }, [dataitem]);

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div className="scraper-list__table rounded-0 overflow-auto">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 150 }}
      />
    </div>
  );
};
