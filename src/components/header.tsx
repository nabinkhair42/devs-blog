import Link from "next/link";
import { Container } from "@/components/container";
import { details } from "@/lib/details";

export function Header() {
  return (
    <header className="border-b border-border py-3">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {details.name}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
