"use client";
import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { login, logout, register } from "@/AuthService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed", error);
      toast.error(`Đăng nhập thất bại. ${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    }
    setLoading(false);
  };
  const handleSignUp = async () => {
    setLoading(true);
    try {
      await register(emailRegister, passwordRegister);
    } catch (error) {
      toast.error(`Đăng kí thất bại. ${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    }
    setLoading(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push("/crypto-journal");
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
            <span className="font-bold">Trading System</span>
            <span className="sr-only">Trading System</span>
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
            <h1 className="text-center text-lg font-light leading-tight md:text-2xl lg:leading-[1.1]">
              Kiên nhẫn, kỉ luật, trực giác
            </h1>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Sign In</TabsTrigger>
                <TabsTrigger value="password">Sign up</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                      Type your email and password here to login
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full h-10"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          localStorage.setItem("email", e.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Password</Label>
                      <Input
                        type="password"
                        placeholder="Mật khẩu"
                        className="w-full h-10"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          localStorage.setItem("password", e.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="default"
                      onClick={handleLogin}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="animate-spin w-5 h-5" />
                      ) : (
                        <div>Login</div>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign up</CardTitle>
                    <CardDescription>
                      Type your email and password here to sign up
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full h-10"
                        value={emailRegister}
                        onChange={(e) => {
                          setEmailRegister(e.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">Password</Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="w-full h-10"
                        value={passwordRegister}
                        onChange={(e) => {
                          setPasswordRegister(e.target.value);;
                        }}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSignUp}>Sign Up</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Tâm thức tôi trưởng thành từ nghề trading.
          </p>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}
