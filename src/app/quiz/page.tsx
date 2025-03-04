"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Fetch questions from the backend API on mount
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  // Show a loading state while fetching questions
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = (currentQuestionIndex / questions.length) * 100;

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(index);

    const isCorrect = index === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Delay for feedback before moving on
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        router.push(
          `/results?score=${score + (isCorrect ? 1 : 0)}&total=${
            questions.length
          }`
        );
      }
    }, 1000);
  };

  // Helper to return conditional button classes based on answer state
  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) {
      return "w-full border p-2 rounded text-left hover:bg-gray-100 transition-all duration-300";
    }
    if (index === selectedAnswer) {
      return index === currentQuestion.correctAnswerIndex
        ? "w-full border p-2 rounded text-left bg-green-200 transition-all duration-300 scale-105"
        : "w-full border p-2 rounded text-left bg-red-200 transition-all duration-300";
    }
    if (index === currentQuestion.correctAnswerIndex) {
      return "w-full border p-2 rounded text-left bg-green-100 transition-all duration-300";
    }
    return "w-full border p-2 rounded text-left opacity-50 transition-all duration-300";
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded p-8">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded h-2">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="bg-blue-500 h-2 rounded"
            />
          </div>
        </div>

        {/* Quiz Content */}
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="mb-6">{currentQuestion.question}</p>
        <ul className="mb-6">
          {currentQuestion.answers.map((answer, index) => (
            <li key={index} className="mb-2">
              <button
                className={getButtonClass(index)}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          {currentQuestionIndex > 0 && (
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={() => {
                setCurrentQuestionIndex((prev) => prev - 1);
                setSelectedAnswer(null);
              }}
              disabled={selectedAnswer !== null}
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
