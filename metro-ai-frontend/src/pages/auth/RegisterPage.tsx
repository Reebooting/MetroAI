import LoginHero from "./components/LoginHero";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="container-fluid min-vh-100">
            <div className="row min-vh-100">

                <div className="col-lg-6 d-none d-lg-flex">
                    <LoginHero />
                </div>

                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <RegisterForm />
                </div>

            </div>
        </div>
    );
}