"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut, useSession } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <Button variant={"outline"} type="submit" onClick={onClick}>
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;
