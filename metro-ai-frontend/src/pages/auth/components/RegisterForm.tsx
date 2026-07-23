import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import {
    register as registerService,
} from "../../../services/auth/authService";

const schema = z
    .object({
        firstName: z
            .string()
            .min(1, "First name is required"),

        lastName: z
            .string()
            .min(1, "Last name is required"),

        email: z
            .string()
            .email("Enter a valid email"),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters"),

        confirmPassword: z
            .string()
            .min(1, "Confirm your password"),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            path: ["confirmPassword"],
            message: "Passwords do not match",
        }
    );

type RegisterFormData = z.infer<typeof schema>;

export default function RegisterForm() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data: RegisterFormData) {

        try {

            await registerService({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            });

            toast.success("Registration Successful!");

            navigate("/login");

        } catch (error: any) {

            toast.error(
                error?.response?.data ??
                "Registration failed"
            );

        }

    }

    return (

        <Card>

            <h2 className="fw-bold mb-2">
                Create Account
            </h2>

            <p className="metro-description-small mb-4">
                Register to start using MetroAI.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    label="First Name"
                    placeholder="Enter first name"
                    {...register("firstName")}
                />

                <small className="text-danger">
                    {errors.firstName?.message}
                </small>

                <Input
                    label="Last Name"
                    placeholder="Enter last name"
                    {...register("lastName")}
                />

                <small className="text-danger">
                    {errors.lastName?.message}
                </small>

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
                    placeholder="Enter password"
                    {...register("password")}
                />

                <small className="text-danger">
                    {errors.password?.message}
                </small>

                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                />

                <small className="text-danger">
                    {errors.confirmPassword?.message}
                </small>

                <Button disabled={isSubmitting}>

                    {
                        isSubmitting
                            ? "Creating Account..."
                            : "Register"
                    }

                </Button>

            </form>

            <div className="text-center mt-4">

                Already have an account?

                <Link
                    to="/login"
                    className="ms-2 fw-semibold"
                >
                    Login
                </Link>

            </div>

        </Card>

    );

}