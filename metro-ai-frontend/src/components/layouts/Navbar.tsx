import { Bell, UserCircle2 } from "lucide-react";

export default function Navbar() {

    return (

        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

            <h1 className="text-2xl font-bold text-blue-600">

                🚇 MetroAI

            </h1>

            <div className="flex items-center gap-5">

                <Bell className="cursor-pointer"/>

                <UserCircle2 size={34}/>

            </div>

        </header>

    );

}