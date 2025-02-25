import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.main_home}>
      <div style={styles.container}>
        <h1>Welcome to Weather App</h1>
        <Link to="/weather">
          <button style={styles.button}>Check Weather</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {

  main_home:{
    width : "100%",
    height : "100vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;