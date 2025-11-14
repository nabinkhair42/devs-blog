import Link from "next/link";
import { Container } from "@/components/container";
import { Icons } from "@/components/icons";
import { details } from "@/lib/details";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-4 mt-auto">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {details.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={details.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={details.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.twitter className="size-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
