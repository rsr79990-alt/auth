import axios from "axios";

async function getUsers() {
  const res = await axios.get("http://localhost:5000/users");

  return res.data
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="border rounded-lg">
        {users.map((user: any) => (
          <div key={user._id} className="flex justify-between p-4 border-b">
            <div>
              <p className="font-medium">{user.email}</p>
              <p className="text-sm text-muted-foreground">
                {user.plan || "FREE"}
              </p>
            </div>

            <span className="text-sm text-muted-foreground">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
