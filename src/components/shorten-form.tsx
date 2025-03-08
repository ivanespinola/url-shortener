"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ShortenFormProps } from "../../types"

export default function ShortenForm({ handleUrlShortened }: ShortenFormProps) {
  const [url, setUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })
      await response.json()
      setUrl("")
      handleUrlShortened()
    } catch (error) {
      console.error("Error shortening URL: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4 px-4 sm:px-8">
        <Input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          className="h-12 border-2"
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <Button
          variant="default"
          className="w-full p-4 cursor-pointer font-bold"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Shortening..." : "Shorten URL"}
        </Button>
      </div>
    </form>
  )
}
