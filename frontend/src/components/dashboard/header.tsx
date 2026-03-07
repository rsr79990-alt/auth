"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { getMe } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DashboardHeader() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const data = await getMe();
      setUser(data);
    };

    load();
  }, []);

  const { mutateAsync, isPending } = useLogout();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");

    try {
      await mutateAsync();

      toast.success("Logged out", { id: toastId });

      router.push("/auth/login");
    } catch (error: any) {
      toast.error("Logout failed", { id: toastId });
    }
  };

  return (
    <header className="flex items-center justify-between border-b pb-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
        </Avatar>

        <Button variant="outline" onClick={handleLogout} disabled={isPending}>
          {isPending ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </header>
  );
}
