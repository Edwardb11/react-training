import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
