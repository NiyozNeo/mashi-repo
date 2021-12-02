function Home() {
  return (
    <>
      <div className="home-wrapper">
        <div className="main">
          <div className="profile__name-wrapper">
            <div>
              <h3 className="user-name">Home</h3>
              <ul>
                <li>
                  <a href="/reg"> registratsiya</a>
                </li>
                <li>
                  <a href="/admins">zayavkani olish uchun admin panel</a>
                </li>
                <li>
                  <a href="/admins/order">
                    zayavkani tasqidlash uchun admin panel
                  </a>
                </li>
                <li>
                  <a href="/admins/users">userlar admin panel</a>
                </li>
                <li>
                  <a href="/login">login</a>
                </li>
                <li>
                  <a href="/queue">zayavkalar</a>
                </li>
                <li>
                  <a href="/adminreg">admin registratsiya qilish</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
