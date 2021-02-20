import Head from "next/head";
import styles from "../styles/Home.module.css";

// React
import { useState } from "react";

// Components
import Menu from "../components/Menu/index";

export default function Home() {
  const [value, setValue] = useState();

  const handleGetRequest = async () => {
    const link = "/api/texts";
    const response = await fetch(link, {
      method: "GET",
    });

    const data = await response.text();

    setValue(data);
  };

  return (
    <>
      <Menu />
      <h1>Home page</h1>
      <button onClick={handleGetRequest}>Запросить данные</button>
      <pre>{value}</pre>
    </>
  );
}
