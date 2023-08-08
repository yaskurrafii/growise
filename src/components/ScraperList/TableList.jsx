import { Table } from "antd";
import { useAtom } from "jotai";
import { dataItem } from "@/stores/crawler";
import { useEffect } from "react";

export const TableList = () => {
  const [dataitem, setDataitem] = useAtom(dataItem);
  let columns = [];
  let data = [];
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
    for (let keyitem in dataitem) {
      columns.push({
        title: keyitem,
        dataIndex: keyitem,
        width: 150,
      });
      if (data.length === 0) {
        for (let i = 0; i < dataitem[keyitem].length; i++) {
          data.push({
            key: i,
            [keyitem]: dataitem[keyitem][i],
          });
        }
      }
      console.log(data);
      console.log(columns);
    }
  }, [dataitem]);

  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }
  
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
