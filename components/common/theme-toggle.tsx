"use client";

import { useMounted } from "@/hooks/use-mounted";
import { Button } from "@ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return <Button size={"icon"} variant={"outline"} className="relative h-9 w-9 rounded-xl" />;
  }

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-xl"
    >
      <Moon className="dark:-rotate-90 absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:scale-100" />
      <Sun className="dark:-rotate-0 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:scale-0" />
    </Button>
  );
};

export default ThemeToggle;
