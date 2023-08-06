import { Space } from "antd";
const Profile = () => {
  return (
    <div className="nav-username--wrapper px-2 d-flex justify-content-between align-items-center">
      <Space direction="horizontal" size="small">
        <img src="" alt="" />
        <p>username</p>
      </Space>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.7045 5.64853C4.14384 6.11716 4.85616 6.11716 5.2955 5.64853L8.6705 2.04853C9.10984 1.5799 
            9.10984 0.820101 8.6705 0.351472C8.23116 -0.117157 7.51884 -0.117157 
            7.0795 0.351472L4.5 3.10294L1.9205 0.351472C1.48116 -0.117157 0.768845 
            -0.117157 0.329505 0.351472C-0.109835 0.820101 -0.109835 1.5799 0.329505 2.04853L3.7045 
            5.64853Z"
          fill="#616161"
        />
      </svg>
    </div>
  );
};
export default Profile;
