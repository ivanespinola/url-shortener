"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"

export default function Header() {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Preventing a flash of dark mode

  return (
    <header className="flex items-center  py-8">
      <div />
      <nav className="flex gap-6 justify-end w-full mr-8">
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="inline-flex w-7 rounded-md p-1 cursor-pointer text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>

        <a
          href="https://github.com/ivanespinola"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex p-1 rounded-md"
        >
          <FaGithub
            className="w-5 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
            size={24}
          />
        </a>
      </nav>
    </header>
  )
}
