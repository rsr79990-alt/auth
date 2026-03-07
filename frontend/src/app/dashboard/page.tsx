"use client";

import { getMe } from "@/services/user.service";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getMe();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Welcome {user.name}</h2>

        <p className="text-muted-foreground">Your account overview</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-muted-foreground">Active projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">0%</p>
            <p className="text-muted-foreground">API usage</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
