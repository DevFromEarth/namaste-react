import { useEffect, useState } from "react";
import { MENU_API } from "../../../Episode-08 Lets's get Classy/src/utils/constant";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResturantMenu;
