"use client"

import Header from "@/components/header"
import UrlShortenerContainer from "@/components/url-shortener-container"

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl py-12 md:py-24 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="bg-gradient-to-b from-cyan-400 to-violet-600 bg-clip-text text-transparent text-[max(48px,min(5vw,76px))] leading-none tracking-[-0.05em] font-extrabold text-7xl">
            URL Shortener
          </h1>
          <p className="md:text-lg font-bold ">
            Simplify your URLs and share them with ease
          </p>
        </div>
        <UrlShortenerContainer />
      </main>
    </>
  )
}
