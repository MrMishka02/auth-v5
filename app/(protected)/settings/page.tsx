"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <Button variant={"outline"} type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
