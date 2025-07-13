import { useRouteError, useNavigate } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  return (
    <>
      <div
        id="error-page"
        className="w-full h-screen place-content-center text-center wrapper error-page "
      >
        <p className="md:text-xl py-6 font-semi-bold">Something went wrong.</p>
        <p className="md:text-sm text-xs text-pink-500 font-light">
          <i>{error.statusText || error.message}</i>
        </p>

        <span>
          <button
            onClick={() => navigate("/")}
            className="px-3 py-4 text-xs w-36 md:w-48 mt-4 hover:underline"
          >
            Back to home
          </button>
        </span>
      </div>
    </>
  );
}

export default ErrorPage;
