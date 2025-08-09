import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurant = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(MENU_API_URL + resId);
    const jsonData = await response.json();
    setMenuInfo(jsonData);
  };

  return menuInfo;
};
export default useRestaurant;
