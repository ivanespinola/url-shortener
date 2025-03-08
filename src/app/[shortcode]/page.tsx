import prisma from "@/lib/db"
import { RedirectPageProps } from "../../../types"
import { redirect } from "next/navigation"
import ErrorUrl from "@/components/error-url"

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = await params

  const url = await prisma.url.findUnique({
    where: {
      shortCode: shortcode,
    },
  })

  if (!url) {
    return <ErrorUrl />
  }

  await prisma.url.update({
    where: {
      id: url.id,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
  })

  redirect(url.originalUrl)
}
