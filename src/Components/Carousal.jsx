import useCard from "../Hooks/useCard";

const Carousal = () => {
  const { carousalData } = useCard([]); // Using the custom hook to get carousal data
  console.log("carousalData", carousalData);
  return <></>;
};
export default Carousal;
