import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import { login as loginService } from "../../../services/auth/authService";
import { useAuth } from "../../../context/AuthContext";

const schema = z.object({
    email: z
        .string()
        .email("Enter a valid email"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof schema>;

export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const {

        register,

        handleSubmit,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm<LoginFormData>({

        resolver: zodResolver(schema),

    });

   async function onSubmit(data: LoginFormData) {

    console.log("===== LOGIN START =====");
    console.log("Form Data:", data);

    try {

        const response = await loginService(data);

        console.log("API Response:", response);

        login(response.accessToken, response.user);
        navigate("/admin/dashboard");
        console.log("Token stored");
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("user"));

        toast.success("Login Successful");

        console.log("===== LOGIN END =====");

    } catch (error) {

        console.error("Login Error:", error);

    }

}

    return (

        <Card>

            <h2 className="fw-bold mb-2">

                Welcome Back

            </h2>

            <p className="metro-description-small mb-4">

                Sign in to continue managing your metro network.

            </p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    label="Email"
                    placeholder="Enter your email"
                    {...register("email")}
                />

                <small className="text-danger">

                    {errors.email?.message}

                </small>

                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                />

                <small className="text-danger">

                    {errors.password?.message}

                </small>

                <div className="form-check mb-3">

                    <input
                        className="form-check-input"
                        type="checkbox"
                    />

                    <label className="form-check-label">

                        Remember me

                    </label>

                </div>

                <Button disabled={isSubmitting}>

                    {

                        isSubmitting

                            ? "Signing In..."

                            : "Login"

                    }

                </Button>

            </form>

            <div className="text-center mt-4">

                Don't have an account?

                <Link
                    to="/register"
                    className="ms-2 fw-semibold"
                >

                    Register

                </Link>

            </div>

        </Card>

    );

}