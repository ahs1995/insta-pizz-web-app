import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.userName);

  return (
    <div className="absolute left-0 right-0 top-[150px] my-10  text-center sm:my-16  ">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="./menu" type="primary">
          go to menu
        </Button>
      )}
    </div>
  );
}

export default Home;
