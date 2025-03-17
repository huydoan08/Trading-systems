"use client";
import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { login, logout, register } from "@/AuthService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push("/strategy");
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const savedPassword = localStorage.getItem("password");
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">Trading systems</span>
            <span className="sr-only">Trading systems</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Trade what you see not what you think
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Kiên nhẫn, kỉ luật, dứt khoát
            </span>

            <div className="flex w-full items-center justify-center gap-4 py-4 md:pb-6 flex-wrap">
              <Input
                type="email"
                placeholder="Email"
                className="w-64 h-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Mật khẩu"
                className="w-64 h-10"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  localStorage.setItem("password", e.target.value);
                }}
              />
              <Button variant="default" className="h-10 flex items-center px-4">
                <div
                  onClick={() => login(email, password)}
                  className="flex items-center"
                >
                  Login
                  <ArrowRightIcon className="ml-2" />
                </div>
              </Button>
              {/* <Button variant="outline" asChild>
                <div
                  onClick={() =>
                    register("doanvanhuy268@gmail.com", "Ytilsdwilsel26+")
                  }
                >
                  Sign up
                </div>
              </Button> */}
            </div>
          </section>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Hành trình tôi đi tìm tôi.
          </p>
        </div>
      </footer>
    </div>
  );
}
