import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { MotifDivider, Motif, type MotifName } from "@/components/motifs";

export function PageHeader({
  eyebrow,
  title,
  description,
  motif = "lotus",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  motif?: MotifName;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Motif
          name={motif}
          className="absolute -right-10 -top-10 size-64 text-madder/[0.05]"
        />
        <Motif
          name={motif}
          className="absolute -bottom-16 -left-10 size-56 text-indigo/[0.05]"
        />
      </div>
      <Container className="py-16 text-center sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <MotifDivider name={motif} className="mt-6" />
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
