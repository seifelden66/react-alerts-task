import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Alerts from "../Alerts/Alerts";
import { Nav } from "../Nav/Nav";
import "./home.css";
import { RightSide } from "../RightSide/RightSide";
import { Left } from "../Left/Left";

const queryClient = new QueryClient();

export const HomePage = () => {
  return (
    <>
      <div className="page">
        <div className="left">
          <Left/>
        </div>
        <div className="cont">
          <Nav />
          <QueryClientProvider client={queryClient}>
            <Alerts />
          </QueryClientProvider>
        </div>
        <div className="right">
          <RightSide />
        </div>
      </div>
    </>
  );
};
