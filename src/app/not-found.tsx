import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
      <main className="py-24">
        <Container>
          <div className="space-y-6 text-center">
            <h1 className="text-6xl font-bold tracking-tight">404</h1>
            <p className="text-xl text-muted-foreground">
              This page could not be found.
            </p>
            <Button asChild>
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </Container>
      </main>
  );
}
