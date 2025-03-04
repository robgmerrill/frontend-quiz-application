// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold">Frontend Quiz App</h1>
      <p className="mt-4 text-base md:text-lg text-center">
        Test your frontend knowledge!
      </p>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
        Start Quiz
      </button>
    </main>
  );
}
