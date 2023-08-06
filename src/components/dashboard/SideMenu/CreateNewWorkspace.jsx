import { CreateNewWorkspaceIcon } from "@/components/Icons";

const CreateNewWorkspace = () => {
  return (
    <div className="d-flex gap-2 justify-content-start align-items-center px-3 py-2">
      <CreateNewWorkspaceIcon />
      <p className="ui-text-bold--mg">Create new workspace</p>
    </div>
  );
};
export default CreateNewWorkspace;
