// src/app/api/questions/route.ts
import { NextResponse } from "next/server";
import { Question } from "@/types/quiz";

const questions: Question[] = [
  {
    question: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Markup Language",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which HTML element is used to define important text?",
    answers: ["<strong>", "<b>", "<important>", "<i>"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<br>", "<lb>", "<break>", "<hr>"],
    correctAnswerIndex: 0,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which property is used to change the text color in CSS?",
    answers: ["color", "font-color", "text-color", "foreground-color"],
    correctAnswerIndex: 0,
  },
  {
    question: "How do you select an element with the id 'header' in CSS?",
    answers: ["#header", ".header", "header", "*header"],
    correctAnswerIndex: 0,
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: ["Float", "Number", "Boolean", "String"],
    correctAnswerIndex: 0,
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: 'What is the purpose of the "useState" hook in React?',
    answers: [
      "Manage local component state.",
      "Fetch data from an API.",
      "Handle routing in a Next.js application.",
      "Update CSS styles dynamically.",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which command is used to install a package using npm?",
    answers: [
      "npm install <package>",
      "npm add <package>",
      "npm download <package>",
      "npm get <package>",
    ],
    correctAnswerIndex: 0,
  },
  {
    question:
      "What is the default port for a Create React App development server?",
    answers: ["3000", "8080", "5000", "8000"],
    correctAnswerIndex: 0,
  },
  {
    question:
      "Which HTML element is used to define a container for an external application or interactive content?",
    answers: ["<iframe>", "<embed>", "<object>", "<div>"],
    correctAnswerIndex: 0,
  },
  {
    question: 'What does the "Box Model" in CSS describe?',
    answers: [
      "The layout and design of elements including padding, border, and margin.",
      "How boxes are created in HTML.",
      "A method for creating responsive layouts.",
      "The order of stacking elements on a page.",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which CSS property is used to create space between elements?",
    answers: ["margin", "padding", "gap", "border-spacing"],
    correctAnswerIndex: 0,
  },
  {
    question:
      "In JavaScript, which keyword is used to declare a block-scoped variable that can be reassigned?",
    answers: ["let", "var", "const", "function"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is JSX in React?",
    answers: [
      "A syntax extension that allows mixing HTML with JavaScript",
      "A CSS preprocessor",
      "A backend framework",
      "A database query language",
    ],
    correctAnswerIndex: 0,
  },
  {
    question:
      "Which hook is used to perform side effects in functional React components?",
    answers: ["useEffect", "useState", "useContext", "useRef"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is a component in React?",
    answers: [
      "A reusable piece of UI",
      "A database record",
      "A CSS style",
      "A browser event",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the virtual DOM in React?",
    answers: [
      "An in-memory representation of the real DOM",
      "A real DOM stored in memory",
      "A performance optimization tool",
      "A method for styling components",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which of the following is a Next.js feature?",
    answers: [
      "File-based routing",
      "Virtual DOM",
      "Two-way data binding",
      "Scoped CSS",
    ],
    correctAnswerIndex: 0,
  },
];

export async function GET() {
  return NextResponse.json(questions);
}
