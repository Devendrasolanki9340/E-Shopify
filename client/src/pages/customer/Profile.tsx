
import { useState } from "react";
import { useAuth } from "@clerk/react";

export function CustomerProfile() {
  const { signOut } = useAuth();
  const [error, setError] = useState<string | null>(null);

  async function handleSignOut() {
    setError(null);
    try {
      await signOut({ redirectUrl: "/sign-in" });
    } catch (signOutError) {
      setError(signOutError instanceof Error ? signOutError.message : "Could not sign out.");
    }
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <h1> Customer Profile</h1>
      <button
        className="rounded border px-4 py-2"
        onClick={handleSignOut}
        type="button"
      >
        Sign out
      </button>
      {error && <p role="alert">{error}</p>}
    </div>
  )
}