export type CMSMedia = {
  id?: string
  url?: string
  alt?: string
}

export type GlobalSettings = {
  siteName?: string
  brand?: {
    logo?: CMSMedia
    favicon?: CMSMedia
    openGraphImage?: CMSMedia
  }
  socialMedia?: {
    instagramUrl?: string
    facebookUrl?: string
    linkedinUrl?: string
    youtubeUrl?: string
  }
  contact?: {
    email?: string
    whatsappNumber?: string
    location?: string
  }
  footer?: {
    description?: string
    copyright?: string
  }
  seo?: {
    defaultTitle?: string
    defaultDescription?: string
  }
}

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000"

export function cleanUrl(url?: string | null) {
  if (!url) return ""

  const value = url.trim()

  if (!value) return ""

  return value
}

export function getCMSMediaUrl(media?: CMSMedia | string | null) {
  if (!media) return null

  if (typeof media === "string") {
    return media.startsWith("http") ? media : `${cmsUrl}${media}`
  }

  if (!media.url) return null

  return media.url.startsWith("http") ? media.url : `${cmsUrl}${media.url}`
}

export async function getGlobalSettings(): Promise<GlobalSettings | null> {
  try {
    const res = await fetch(`${cmsUrl}/api/globals/global-settings?depth=2`, {
      next: {
        revalidate: 60,
      },
    })

    if (!res.ok) {
      return null
    }

    return await res.json()
  } catch {
    return null
  }
}

export function getSocialLinks(settings?: GlobalSettings | null) {
  const instagramUrl = cleanUrl(settings?.socialMedia?.instagramUrl)
  const facebookUrl = cleanUrl(settings?.socialMedia?.facebookUrl)
  const linkedinUrl = cleanUrl(settings?.socialMedia?.linkedinUrl)

  return [
    {
      label: "Instagram",
      href: instagramUrl,
    },
    {
      label: "Facebook",
      href: facebookUrl,
    },
    {
      label: "LinkedIn",
      href: linkedinUrl,
    },
  ].filter((item) => item.href)
}

export type CMSEventHighlight = {
  item?: string
}

export type CMSEventGalleryItem = {
  image?: CMSMedia
  caption?: string
}

export type CMSEvent = {
  id?: string
  title?: string
  slug?: string
  eyebrow?: string
  category?: string
  status?: string
  date?: string
  location?: string
  heroImage?: CMSMedia
  thumbnailImage?: CMSMedia
  shortDescription?: string
  overview?: string
  storyTitle?: string
  storyCopy?: string
  highlights?: CMSEventHighlight[]
  gallery?: CMSEventGalleryItem[]
  ctaLabel?: string
  ctaLink?: string
  featuredOnHomepage?: boolean
  sortOrder?: number
  published?: boolean
  seo?: {
    title?: string
    description?: string
  }
}

type CMSEventsResponse = {
  docs?: CMSEvent[]
}

export async function getEvents(): Promise<CMSEvent[]> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/events?depth=2&sort=sortOrder&where[published][equals]=true`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return []

    const data = (await res.json()) as CMSEventsResponse

    return data.docs || []
  } catch {
    return []
  }
}

export async function getFeaturedEvents(): Promise<CMSEvent[]> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/events?depth=2&sort=sortOrder&where[published][equals]=true&where[featuredOnHomepage][equals]=true`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return []

    const data = (await res.json()) as CMSEventsResponse

    return data.docs || []
  } catch {
    return []
  }
}

export async function getEventBySlug(slug: string): Promise<CMSEvent | null> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/events?depth=2&limit=1&where[slug][equals]=${slug}`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return null

    const data = (await res.json()) as CMSEventsResponse

    return data.docs?.[0] || null
  } catch {
    return null
  }
}

export function formatEventCategory(category?: string) {
  const labels: Record<string, string> = {
    motorsport: "Motorsport",
    "family-legacy": "Family Legacy",
    "lifestyle-riding": "Lifestyle Riding",
    "media-community": "Media & Community",
  }

  return labels[category || ""] || "Campaign Event"
}

export function formatEventStatus(status?: string) {
  const labels: Record<string, string> = {
    "coming-soon": "Coming Soon",
    "open-registration": "Open Registration",
    ongoing: "Ongoing",
    completed: "Completed",
  }

  return labels[status || ""] || "Coming Soon"
}

export type CMSArticle = {
  id?: string
  title?: string
  slug?: string
  category?: string
  excerpt?: string
  thumbnailImage?: CMSMedia
  heroImage?: CMSMedia
  author?: string
  publishedDate?: string
  relatedEvent?: CMSEvent
  content?: string
  featuredArticle?: boolean
  published?: boolean
  sortOrder?: number
  seo?: {
    title?: string
    description?: string
  }
}

type CMSArticlesResponse = {
  docs?: CMSArticle[]
}

export async function getArticles(): Promise<CMSArticle[]> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/articles?depth=2&sort=sortOrder&where[published][equals]=true`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return []

    const data = (await res.json()) as CMSArticlesResponse

    return data.docs || []
  } catch {
    return []
  }
}

export async function getFeaturedArticle(): Promise<CMSArticle | null> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/articles?depth=2&limit=1&sort=sortOrder&where[published][equals]=true&where[featuredArticle][equals]=true`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return null

    const data = (await res.json()) as CMSArticlesResponse

    return data.docs?.[0] || null
  } catch {
    return null
  }
}

export async function getArticleBySlug(slug: string): Promise<CMSArticle | null> {
  try {
    const res = await fetch(
      `${cmsUrl}/api/articles?depth=2&limit=1&where[slug][equals]=${slug}`,
      {
        next: {
          revalidate: 60,
        },
      }
    )

    if (!res.ok) return null

    const data = (await res.json()) as CMSArticlesResponse

    return data.docs?.[0] || null
  } catch {
    return null
  }
}

export function formatArticleCategory(category?: string) {
  const labels: Record<string, string> = {
    "campaign-updates": "Campaign Updates",
    motorsport: "Motorsport",
    lifestyle: "Lifestyle",
    "family-legacy": "Family Legacy",
    "behind-the-scenes": "Behind The Scenes",
  }

  return labels[category || ""] || "Campaign Story"
}

export function formatDate(date?: string) {
  if (!date) return "Inside RS"

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}
