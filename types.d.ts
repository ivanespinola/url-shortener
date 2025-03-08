export interface Url {
  id: string
  shortCode: string
  originalUrl: string
  visits: number
}

export interface RedirectPageProps {
  params: Promise<{ shortcode: string }>
}

export interface ShortenFormProps {
  handleUrlShortened: () => void
}
