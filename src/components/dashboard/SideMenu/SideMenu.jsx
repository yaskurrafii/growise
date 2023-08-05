import CreateNewWorkspace from "./CreateNewWorkspace";
import Profile from "./Profile";
import Trash from "./Trash";
import Workspace from "./Workspace";

export const SideMenu = () => {
  return (
    <div className="sidemenu--wrapper d-flex flex-column justify-content-between h-100 w-100">
      <div>
        <Profile />
        <hr />
        <Workspace />
      </div>
      <div className="">
        <CreateNewWorkspace />
        <hr className="m-0" />
        <Trash />
      </div>
    </div>
  );
};
