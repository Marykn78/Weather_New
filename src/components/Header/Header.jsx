const Header = ({ dataa, searchCity, location, setLocation }) => {
  return (
    <>
      <div className="card_title">
        <iconify-icon
          icon="fluent:weather-fog-48-regular"
          width="44"
          style={{ color: "white" }}
        ></iconify-icon>
      </div>
      <div className="select_container">
        <div className="city_select">
          <input
            className="search_input"
            style={{ outline: 0 }}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder={"شهر خود را وارد کنید..."}
            onKeyPress={searchCity}
          />
        </div>
        <div className="city_name">
          {dataa.name ? <h2>{dataa.name}</h2> : <h2>مشهد</h2>}
        </div>
      </div>
    </>
  );
};

export default Header;