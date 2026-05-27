import Link from "next/link";
import { Button } from "@/components/Button";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-link mb-4">404</h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-link mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-body mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="solid">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
