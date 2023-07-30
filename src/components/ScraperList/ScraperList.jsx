import { useState } from "react";
import { Header } from "./Header";
import { TableList } from "./TableList";
export const ScraperList = () => {
  const [openTable, setOpenTable] = useState(false);
  return (
    <div className="scraper-list d-flex w-100 flex-column position-fixed bottom-0 rounded-top-2">
      <Header isOpen={openTable} setOpenTable={setOpenTable} />
      {openTable && <TableList />}
    </div>
  );
};
