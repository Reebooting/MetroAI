import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <Card>

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-600">
          Create Account
        </h1>

        <Input
          label="First Name"
          placeholder="First Name"
        />

        <Input
          label="Last Name"
          placeholder="Last Name"
        />

        <Input
          label="Email"
          type="email"
        />

        <Input
          label="Password"
          type="password"
        />

        <Button>

          Register

        </Button>

      </Card>

    </div>
  );
}