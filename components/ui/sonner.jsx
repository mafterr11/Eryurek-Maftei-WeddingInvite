"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group font-semibold rounded-xs"
      style={
        {
          "--normal-bg": "var(--color-accentGreen)",
          "--normal-text": "white",
        }
      }
      {...props} />)
  );
}

export { Toaster }
