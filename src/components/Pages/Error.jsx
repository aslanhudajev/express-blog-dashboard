import { useRouteError } from "react-router-dom";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <section className="error flex flex-col justify-center items-center h-svh">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Uh oh.. There is nothing here
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {error.status} {error.statusText} {error.message}
      </p>
      <Link to="/" className="mt-6">
        <Button>Back to home</Button>
      </Link>
    </section>
  );
};

export default Error;
