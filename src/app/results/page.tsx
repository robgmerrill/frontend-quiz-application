"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const total = searchParams.get("total");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="mb-6">
          You scored {score} out of {total}!
        </p>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Play Again
          </button>
        </Link>
      </div>
    </main>
  );
}
