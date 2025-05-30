import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Heart, Github, Zap, Palette, Sparkles, Code, Cpu, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            AI 파워 개발자 시스템으로 구축됨
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              shadcn/ui
            </span>
            <br />
            <span className="text-foreground">Clone 2025</span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            🎨 Variables & Animations을 완벽 지원하는 최신 React 컴포넌트 라이브러리
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" variant="gradient">
              <Github className="h-5 w-5" />
              GitHub에서 보기
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Code className="h-5 w-5" />
              컴포넌트 둘러보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">2025년 최신 기능들</h2>
          <p className="text-lg text-muted-foreground">
            Leonardo da Vinci in 2075 수준의 창의적 기술력으로 구축
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="elevated" hover="lift" className="group">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>⚡ 고성능 애니메이션</CardTitle>
              <CardDescription>
                tailwindcss-animate와 커스텀 키프레임으로 구현된 부드러운 애니메이션
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="default" animation="bounce" size="sm">
                  Bounce Effect
                </Button>
                <Button variant="secondary" animation="pulse" size="sm">
                  Pulse Effect
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" hover="lift" className="group">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Palette className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle>🎨 CSS Variables</CardTitle>
              <CardDescription>
                완벽한 테마 시스템과 다크모드 지원으로 무한한 커스터마이징
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded bg-primary"></div>
                <div className="h-8 rounded bg-secondary"></div>
                <div className="h-8 rounded bg-accent"></div>
                <div className="h-8 rounded bg-muted"></div>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" hover="lift" className="group">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Cpu className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>🤖 AI 자동화</CardTitle>
              <CardDescription>
                14개 MCP 서버로 구축된 완전 자동화 개발 시스템
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 text-xs">
                <span className="rounded bg-primary/10 px-2 py-1">Figma</span>
                <span className="rounded bg-primary/10 px-2 py-1">GitHub</span>
                <span className="rounded bg-primary/10 px-2 py-1">Notion</span>
                <span className="rounded bg-primary/10 px-2 py-1">+11개</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">컴포넌트 쇼케이스</h2>
          <p className="text-lg text-muted-foreground">
            완벽한 TypeScript 타입 지원과 접근성을 갖춘 컴포넌트들
          </p>
        </div>

        {/* Button Variants */}
        <Card className="mb-8" variant="outlined">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              다양한 variant와 애니메이션 효과를 지원하는 Button 컴포넌트
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="glow">Glow Effect</Button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button loading loadingText="저장 중...">
                Loading Button
              </Button>
              <Button icon={<Heart className="h-4 w-4" />} iconPosition="left">
                With Icon
              </Button>
              <Button icon={<Star className="h-4 w-4" />} iconPosition="right">
                Icon Right
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Variants */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>기본 카드 스타일</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                기본적인 카드 컴포넌트입니다.
              </p>
            </CardContent>
          </Card>

          <Card variant="elevated" hover="lift">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>그림자 효과와 호버 애니메이션</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                마우스를 올려보세요!
              </p>
            </CardContent>
          </Card>

          <Card variant="glassmorphism" hover="glow">
            <CardHeader>
              <CardTitle>Glassmorphism</CardTitle>
              <CardDescription>2025년 트렌드 디자인</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                투명 효과와 블러 적용
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <Card variant="gradient" className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 프로젝트 현황</CardTitle>
            <CardDescription className="text-base">
              AI 파워 개발자 시스템의 실시간 성과
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-primary">14+</div>
                <div className="text-sm text-muted-foreground">MCP 서버</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">완성된 컴포넌트</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">자동화 구축</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            🎨 Built with ❤️ by AI Power Developer System - Leonardo da Vinci in 2075
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            shadcn/ui Clone 2025 | React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}