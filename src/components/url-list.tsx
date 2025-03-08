"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { CheckIcon, CopyIcon, EyeIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Url } from "../../types"
import { toast } from "sonner"
import { motion } from "framer-motion"

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([])
  const [copied, setCopied] = useState<boolean>(false)
  const [copyUrl, setCopyUrl] = useState<string>("")

  const shortenerUrl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`

  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/urls")
      const data = await response.json()
      setUrls(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCopyUrl = (code: string) => {
    const fullUrl = `${shortenerUrl(code)}`
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true)
      setCopyUrl(code)
      toast.success("URL copied to clipboard")
      setTimeout(() => {
        setCopied(false)
        setCopyUrl("")
      }, 3000)
    })
  }

  useEffect(() => {
    fetchUrls()
  }, [])

  return (
    <div className="px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
      <motion.ul className="space-y-2  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {urls.map((url) => (
          <motion.li
            key={url.id}
            layout
            initial={
              url.id === urls[0]?.id ? { opacity: 0, y: -20 } : { opacity: 0 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={
              url.id === urls[0]?.id
                ? { duration: 1, ease: "easeOut" }
                : { duration: 2, ease: "easeOut" }
            }
            className="flex items-center w-full max-w-full overflow-hidden gap-2 justify-between rounded-md text-card-foreground border-3 p-3 dark:bg-[#101212]"
          >
            <Link
              href={`/${url.shortCode}`}
              target="_blank"
              className="text-blue-500 truncate"
            >
              {shortenerUrl(url.shortCode)}
            </Link>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted cursor-pointer"
                onClick={() => handleCopyUrl(url.shortCode)}
              >
                {copied && copyUrl == url.shortCode ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <CopyIcon className="w-4 h-4" />
                )}

                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4 " />
                {url.visits} views
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
