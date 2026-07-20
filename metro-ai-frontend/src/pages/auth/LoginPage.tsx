import LoginHero from "./components/LoginHero";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {

  return (

    <div className="container-fluid login-page">

      <div className="row min-vh-100">

        <div
          className="col-lg-7 d-none d-lg-flex align-items-center"
        >

          <div className="login-left w-100">

            <LoginHero />

          </div>

        </div>

        <div
          className="col-lg-5 col-12 d-flex align-items-center justify-content-center"
        >

          <div
            className="login-right w-100"
            style={{ maxWidth: "520px" }}
          >

            <LoginForm />

          </div>

        </div>

      </div>

    </div>

  );

}