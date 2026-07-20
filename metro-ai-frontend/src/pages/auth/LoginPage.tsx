import LoginForm from "./components/LoginForm";
import LoginHero from "./components/LoginHero";

export default function LoginPage() {

  return (

    <div className="container-fluid">

      <div
        className="row min-vh-100 align-items-center"
      >

        <div
          className="col-lg-7 d-none d-lg-block"
        >

          <LoginHero />

        </div>

        <div
          className="col-lg-5 col-md-8 col-sm-10 col-12 mx-auto p-4"
        >

          <LoginForm />

        </div>

      </div>

    </div>

  );

}