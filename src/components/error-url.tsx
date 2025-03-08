"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function ErrorUrl() {
  const router = useRouter()
  const handleGoHome = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900">
      <Image
        src="/images/giphy.gif"
        width={600}
        height={200}
        alt="Error gif"
        unoptimized
      />
      <p className="text-lg font-bold mt-5 text-gray-600 dark:text-gray-300 mb-4">
        The URL you are looking for does not exist. It might have been removed
        or the link is incorrect.
      </p>
      <Button className="cursor-pointer" onClick={handleGoHome}>
        Go Back
      </Button>
    </div>
  )
}
