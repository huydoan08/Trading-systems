"use client";

import { LogOut } from "lucide-react";
import { auth } from "@/firebaseConfig";
import { logout } from "@/AuthService";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { onAuthStateChanged } from "firebase/auth";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Sub-component: User Info Display
const UserInfo = ({ user }: { user: any }) => (
  <div className="flex flex-col space-y-1">
    <p className="text-sm font-semibold">Huy Van Doan</p>
    {user?.email && (
      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
    )}
  </div>
);

export function UserNav() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="relative h-8 w-50">
                Sign in / up
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <UserInfo user={user} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
