import { Table } from "antd";
import { useAtom } from "jotai";
import { dataItem } from "@/stores/crawler";
import { useState, useEffect } from "react";

export const TableList = () => {
  const [dataitem, setDataitem] = useAtom(dataItem);
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

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
      } else {
        for (let i = 0; i < datatemp.length; i++) {
          datatemp[i] = { ...datatemp[i], [keyitem]: dataitem[keyitem][i] };
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
