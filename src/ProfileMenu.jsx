function ProfileMenu() {
  const profile = {
    firstname: "David",
    lastname: "Robert",
  };

  return (
    <li>
      {profile.firstname} {profile.lastname}
    </li>
  );
}

export default ProfileMenu;
