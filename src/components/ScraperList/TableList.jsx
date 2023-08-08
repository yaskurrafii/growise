import { Table } from "antd";
import { useAtom } from "jotai";
import { dataItem } from "@/stores/crawler";
import { useState, useEffect } from "react";

export const TableList = () => {
  const [dataitem, setDataitem] = useAtom(dataItem);
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);
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
    let colstemp = [],
      datatemp = [];
    for (let keyitem in dataitem) {
      colstemp.push({
        title: keyitem,
        dataIndex: keyitem,
        width: 150,
      });
      if (datatemp.length === 0) {
        for (let i = 0; i < dataitem[keyitem].length; i++) {
          datatemp.push({
            key: i,
            [keyitem]: dataitem[keyitem][i],
          });
        }
      }
    }
    setColumns(colstemp);
    setDataSource(datatemp);
  }, [dataitem]);

  return (
    <div className="scraper-list__table rounded-0 overflow-auto">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: 150 }}
      />
    </div>
  );
};
