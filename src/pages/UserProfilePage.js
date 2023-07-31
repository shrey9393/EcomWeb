import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <>
      <NavBar>
        <h1 className="mx-auto text-2xl">My Profile </h1>
        <UserProfile />
      </NavBar>
    </>
  );
}

export default UserProfilePage;
