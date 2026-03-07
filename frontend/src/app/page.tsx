import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Auth App</h1>

      <div className="flex gap-4">
        <Link href="/auth/register">
          <Button size="lg">Register</Button>
        </Link>

        <Link href="/auth/login">
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
