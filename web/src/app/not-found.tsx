import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden pt-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid mask-radial" />
      <Container className="text-center">
        <p className="font-display text-[8rem] font-bold leading-none tracking-tighter sm:text-[12rem]">
          <span className="text-gradient">404</span>
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">This page has moved on.</h1>
        <p className="mt-3 text-slate-400">The page you’re looking for doesn’t exist or has been relocated.</p>
        <div className="mt-10 flex justify-center gap-4">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/careers" variant="ghost">
            Careers
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
