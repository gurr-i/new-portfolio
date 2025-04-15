import { ASSETS_PATH, GITHUB_URL } from "../lib/constants";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live?: string;
  cached?: string;
  github?: string;
}

// This will be filled with SVG data or actual project data in the ProjectCard component
export const projects = [
  {
    id: 1,
    title: 'MathMaster',
    description: 'Your Ultimate Math Practice Companion 🎯 MathMaster is a feature-rich web application designed to enhance your mathematical skills through engaging exercises and interactive activities. With a responsive user interface and a powerful backend',
    image: `${ASSETS_PATH}/mathmaster.svg`,
    technologies: ['Reactjs', 'Nodejs', 'Sqlite3', 'Vite', 'Tailwind CSS','TS'],
    live: '#',
    cached: '#',
    github: `${GITHUB_URL}/MathMaster`
  },
  {
    id: 2,
    title: 'tg-restricted-content-saver-bot',
    description: 'A powerful Telegram bot that can save and forward messages, media, and files from both public and private channels. Built with Pyrogram, this bot features progress tracking, rate limiting, and batch processing capabilities.',
    image: `${ASSETS_PATH}/telegram-bot.svg`,
    technologies: ['CSS', 'Python', 'Flask', 'Pyrogram', 'Sqlite3'],
    github: `${GITHUB_URL}/tg-restricted-content-saver-bot`
  },
  {
    id: 3,
    title: 'QuizNexus',
    description: 'QuizNexus is a modern, interactive quiz application built with React and TypeScript. It features a dynamic quiz interface with real-time scoring, performance tracking, and detailed analytics.',
    image: `${ASSETS_PATH}/quiznexus.svg`,
    technologies: ['React', 'Express', 'Sqlite3', 'Vite', 'Tailwind CSS', 'Node.js'],
    github: `${GITHUB_URL}/QuizNexus`,
    live: '#',
  },
  {
    id: 4,
    title: 'CelestialNavigator',
    description: 'An interactive 3D solar system simulation built with React, Three.js, and React Three Fiber.',
    image: `${ASSETS_PATH}/celestial-navigator.svg`,
    technologies: ['Reactjs', 'Nodejs', 'Sqlite3', 'Vite', 'Tailwind CSS','TS'],
    github: `${GITHUB_URL}/CelestialNavigator`
  },
  {
    id: 5,
    title: 'Modern E-Commerce Solution 👜',
    description: "A sleek, high-performance online shopping platform built with React, TypeScript, and SQLite. Designed for speed, scalability, and seamless user experience, features a dynamic UI, real-time cart updates, and secure transactions.",
    image: `${ASSETS_PATH}/ecommerce.svg`,
    technologies: ['Reactjs', 'Nodejs', 'Sqlite3', 'Vite', 'Tailwind CSS','TS'],
    github: `${GITHUB_URL}/ShopSwift-e-commerce`
  },
  {
    id: 6,
    title: 'Electron-Powered API Testing Tool⚡',
    description: 'This desktop application simplifies API testing and development with a clean, user-friendly interface. Built with Electron, it allows developers to efficiently manage requests, inspect responses, configure environments, and track request history.',
    image: `${ASSETS_PATH}/api-tester.svg`,
    technologies: ['React', 'TS', 'Tailwind CSS'],
    github: `${GITHUB_URL}/api-tester-desk`
  },
  {
    id: 7,
    title: 'Image-classification-of-airspace-using-Deep-learning',
    description: 'This project is a deep learning-based image classification system for airspace recognition. It utilizes Convolutional Neural Networks (CNNs) to accurately classify images of different airspaces.',
    image: `${ASSETS_PATH}/airspace-classifier.svg`,
    technologies: ['Python', 'TensorFlow', 'Keras'],
    github: `${GITHUB_URL}/Image-classification-of-airspace-using-Deep-learning`
  },
  {
    id: 8,
    title: 'Thermal Image Segmentation for Thyroid Analysis',
    description: 'Advanced image processing system for early detection of thyroid abnormalities using thermal imaging. Implements 3D signal processing and AI-driven segmentation techniques in MATLAB, enabling precise analysis of thermal patterns in thyroid patients.',
    image: `${ASSETS_PATH}/thermal-imaging.svg`,
    technologies: ['MATLAB', 'Image Processing', 'AI Segmentation', '3D Signals'],
    github: `${GITHUB_URL}/Utilities-of-artifical-intelligence-and-Segmentation-of-Thermal-Images`
  },
];
