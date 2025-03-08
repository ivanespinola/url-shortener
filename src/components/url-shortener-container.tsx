"use client"

import { useState } from "react"
import ShortenForm from "./shorten-form"
import UrlList from "./url-list"

export default function UrlShortenerContainer() {
  const [refreshUrlKey, setRefreshUrlKey] = useState<number>(0)

  const handleUrlShortened = () => {
    setRefreshUrlKey((prev) => prev + 1)
  }

  return (
    <div>
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      <UrlList key={refreshUrlKey} />
    </div>
  )
}
