import { Tips } from "@/components/Tools/Tips";
import UIButton from "@/components/Button";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

export const InputPageNumber = ({
  setFeedOptions,
  isModalOpen,
  setIsModalOpen,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    setFeedOptions(2);
    handleOk();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const cancelPagination = () => {
    setFeedOptions(1);
  };
  return (
    <Modal open={isModalOpen} onOk={handleOk}>
      <Tips tipsFor="pagination-click">
        <h4 className="scraper-tools__tips-pagination-click--title">
          Click Pagination
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="scraper-tools__tips-pagination-click--body d-flex flex-column align-items-center justify-content-center">
            <p>Single-page data: 50</p>
            <div className="d-flex flex-column gap-2">
              <input
                type="number"
                id="pagenum"
                step="10"
                max="50"
                min="10"
                placeholder="10"
                {...register("pagenum")}
              />
              Numbers of page
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <UIButton
                onClick={cancelPagination}
                size="sm"
                variant="outline"
                color="blue"
              >
                Cancel
              </UIButton>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </Tips>
    </Modal>
  );
};
