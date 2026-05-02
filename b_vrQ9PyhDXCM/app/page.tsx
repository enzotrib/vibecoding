import { ArrowRight, Sparkles, Zap, Layers, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SquaresBackground } from "@/components/squares-background"
import { MagicCard } from "@/components/ui/magic-card"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SquaresBackground />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Gridly</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
        </nav>

        <Button size="sm" variant="secondary" className="rounded-full">
          Sign in
        </Button>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-20 pb-32 text-center md:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          New · v1.0 ya disponible
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          Construye interfaces sobre una grilla perfecta
        </h1>

        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          Un sistema de diseño minimalista pensado para equipos que valoran
          la precisión, el ritmo visual y la velocidad de iteración.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" className="rounded-full">
            Empezar gratis
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            Ver demo
          </Button>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Sin tarjeta de crédito · Cancela cuando quieras
        </p>
      </section>

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32"
      >
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Diseñado para moverse rápido
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Tres pilares para construir productos con confianza.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <MagicCard className="rounded-2xl p-6">
            <div className="flex flex-col gap-3 p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                Velocidad real
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Animaciones fluidas y carga instantánea pensadas para que tu
                producto se sienta sólido desde el primer click.
              </p>
            </div>
          </MagicCard>

          <MagicCard className="rounded-2xl p-6">
            <div className="flex flex-col gap-3 p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                Sistema modular
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Componentes consistentes que escalan con tu equipo sin perder
                el ritmo visual ni la coherencia.
              </p>
            </div>
          </MagicCard>

          <MagicCard className="rounded-2xl p-6">
            <div className="flex flex-col gap-3 p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                Seguro por defecto
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Buenas prácticas integradas para que solo te preocupes por
                lo que hace única a tu aplicación.
              </p>
            </div>
          </MagicCard>
        </div>
      </section>
    </main>
  )
}
