import Profile from "./Profile";
import Workspace from "./Workspace";

export const SideMenu = () => {
  return (
    <div className="sidemenu--wrapper d-flex flex-column w-100">
      <Profile />
      <hr />
      <Workspace />
    </div>
  );
};
