import { useRouteError } from "react-router";

export default ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};
