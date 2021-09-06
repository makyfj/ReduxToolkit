import { useSelector } from "react-redux";

const Profile = () => {
  // access the state of features/user
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
