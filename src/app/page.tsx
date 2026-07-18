"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { login } from "@/AuthService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ToastContainer, toast } from "react-toastify";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push("/principles");
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
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/hugo-trading-bg.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-0"></div>
      
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40 relative">
        <div className="container h-14 flex items-center">
          <nav className="ml-auto flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 relative z-10">
        <div style={{marginTop: "70px"}} >
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsContent value="account">
                <Card>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 pt-8">
                      <Input
                        type="email"
                        placeholder="Nhập email"
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
                      <Input
                        type="password"
                        placeholder="Nhập mật khẩu"
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
                  <CardFooter style={{display: "flex", justifyContent: "center"}}>
                    <Button
                      variant="default"
                      onClick={handleLogin}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="animate-spin w-5 h-5" />
                      ) : (
                        <div>Đăng nhập</div>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
