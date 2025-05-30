import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "shadcn/ui Clone 2025 - AI Power Developer System",
  description: "🎨 완벽한 shadcn/ui 클론 - Variables & Animations을 완벽 지원하는 2025년 최신 React 컴포넌트 라이브러리",
  keywords: ["shadcn", "ui", "components", "react", "typescript", "tailwindcss", "radix-ui", "design-system", "2025"],
  authors: [{ name: "AI Power Developer System" }],
  creator: "Leonardo da Vinci in 2075",
  openGraph: {
    title: "shadcn/ui Clone 2025",
    description: "Variables & Animations을 완벽 지원하는 최신 React 컴포넌트 라이브러리",
    url: "https://github.com/lofibrainwav/shadcn-ui-clone-2025",
    siteName: "shadcn/ui Clone 2025",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn/ui Clone 2025",
    description: "AI 파워 개발자 시스템으로 구축된 완벽한 UI 컴포넌트 라이브러리",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}