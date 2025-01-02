import React from "react";
import MenuBar from "./MenuBar";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <MenuBar />


      {/* Main Content */}
      <main style={styles.main}>
        <h2>About This App</h2>
        <p>
          This is a simple React application demonstrating the structure of a home page.
          Customize it to fit your needs!
        </p>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  navItem: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  main: {
    padding: "2rem",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    textAlign: "center",
  },
};

export default HomePage;
