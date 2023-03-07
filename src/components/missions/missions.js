import './missions.css';

const Missions = () => (
  <div className="container">
    <table className="table-container">
      <thead id="thead">
        <tr>
          <th className="th">Missions</th>
          <th className="th">Description</th>
          <th className="th">status</th>
          <th className="th"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="td mission-title">Thaicom</td>
          <td className="td">
            Thaicom is the name of a series of communications satellites
            operated from Thailand, and also the name of Thaicom Public Company
            Limited, which is the company that owns and operates the Thaicom
            satellite fleet and other telecommunication businesses in Thailand
            and throughout the Asia-Pacific region. The satellite projects were
            named Thaicom by the King of Thailand, His Majesty the King Bhumibol
            Adulyadej, as a symbol of the linkage between Thailand and modern
            communications technology.
          </td>
          <td className="td">
            <span className="status-not-a-member">NOT A MEMBER</span>
          </td>
          <td className="td">
            <button className="join-mission-btn" type="button">
              Join Mission
            </button>
          </td>
        </tr>
        <tr>
          <td className="td">Telstar</td>
          <td className="td">
            Telstar 19V (Telstar 19 Vantage) is a communication satellite in the
            Telstar series of the Canadian satellite communications company
            Telesat. It was built by Space Systems Loral (MAXAR) and is based on
            the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest
            commercial communications satellite ever launched, weighing at 7,076
            kg (15,600 lbs) and surpassing the previous record, set by
            TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July
            2009.
          </td>
          <td className="td">
            <span className="status-not-a-member">NOT A MEMBER</span>
          </td>
          <td className="td">
            <button className="join-mission-btn" type="button">
              Join Mission
            </button>
          </td>
        </tr>
        <tr>
          <td className="td">SES</td>
          <td className="td">
            SES S.A. is a communications satellite owner and operator providing
            video and data connectivity worldwide to broadcasters, content and
            internet service providers, mobile and fixed network operators,
            governments and institutions, with a mission to “connect, enable,
            and enrich”. SES operates more than 50 geostationary orbit
            satellites and 16 medium Earth orbit satellites. These comprise the
            well-known European Astra TV satellites, the O3b data satellites and
            others with names including AMC, Ciel, NSS, Quetzsat, YahSat and
            SES.
          </td>
          <td className="td">
            <span className="status-not-a-member">NOT A MEMBER</span>
          </td>
          <td className="td">
            <button className="join-mission-btn" type="button">
              Join Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Missions;
