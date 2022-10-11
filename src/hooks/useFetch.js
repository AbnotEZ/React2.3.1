import { useEffect, useState } from "react";

export const useFetchData = (BASE_URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setData(data.results);
      
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [BASE_URL]);



  return data;
};
