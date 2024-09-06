import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.data || error.message}</p>

      <button
        className="bg-red-500 px-1 py-1 text-[16px]"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}
