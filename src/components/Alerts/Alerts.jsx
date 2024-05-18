//Alerts/Alerts.jsx
import { useQuery } from "@tanstack/react-query";
import  Alert  from "../Alert/Alert";
import "./alerts.css"

const fetchStocks = async () => {
  const response = await fetch("http://localhost:4000/stocks");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Alerts = () => {
  // Updated useQuery call to use the object form
  const { data, error, isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: fetchStocks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="cards">
      {data?.map((stock) => (
        <Alert key={stock.id} stock={stock} />
      ))}
    </div>
  );
};

export default Alerts;
