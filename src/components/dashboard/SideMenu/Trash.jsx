import { TrashIcon } from "@/components/Icons";

const Trash = () => {
  return (
    <div className="d-flex justify-content-start align-items-center gap-2 py-2 px-3">
      <TrashIcon />
      <p className="ui-text-bold--mg">Trash</p>
    </div>
  );
};
export default Trash;
