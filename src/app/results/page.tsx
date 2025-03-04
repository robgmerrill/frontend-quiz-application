// NO 'use client' here -> It's a Server Component

interface ResultsPageProps {
  searchParams: {
    score?: string;
    total?: string;
  };
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const { score, total } = searchParams;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="mb-6">
          You scored {score} out of {total}!
        </p>
        <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
          Play Again
        </a>
      </div>
    </main>
  );
}
