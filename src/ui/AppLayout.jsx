import Header from "./Header";
import Loading from "./Loading";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loading />}
      <Header />
      <div className="overflow-scroll bg-[url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)] bg-contain ">
        <main className="relative mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
