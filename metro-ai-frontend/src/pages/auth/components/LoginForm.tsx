import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

export default function LoginForm() {

  return (

    <Card>

      <h2 className="fw-bold mb-2"> Welcome Back 👋 </h2>

<p className="metro-description-small mb-4">

    Sign in to continue managing your metro network.

</p>

      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <Button>

        Login

      </Button>

      <div className="text-center mt-4">

        <span className="text-muted">

          Don't have an account?

        </span>

        <Link
          to="/register"
          className="ms-2 fw-semibold"
        >

          Register

        </Link>

      </div>
<div className="d-flex justify-content-between align-items-center mb-4">

    <div className="form-check">

        <input
            className="form-check-input"
            type="checkbox"
            id="remember"
        />

        <label
            className="form-check-label"
            htmlFor="remember"
        >
            Remember me
        </label>

    </div>

    <a href="#">

        Forgot Password?

    </a>

</div>

<Button>

    Login

</Button>
    </Card>

  );

}