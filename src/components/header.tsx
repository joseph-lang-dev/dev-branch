"use client";
import { Container } from "@/components/container";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { toast } from "sonner";

export const Header = () => {
  const { data, status } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSignIn = async () => {
    try {
      await signIn("github");
      toast.success("Sign in successful");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Signed out successfully");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };
  return (
    <header>
      <Container className="flex items-center justify-between">
        <div className="text-3xl py-5">
          Dev<span className="font-bold">Branch</span>.
        </div>
        <div>
          {status === "authenticated" ? (
            <div className="flex items-center gap-3">
              <div onClick={() => setToggleMenu(!toggleMenu)}>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage src={data?.user?.image || ""} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={handleSignOut}>
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <Button onClick={handleSignIn}>Sign In</Button>
          )}
        </div>
      </Container>
    </header>
  );
};
