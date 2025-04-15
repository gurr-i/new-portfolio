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
    technologies: ['HTML', 'SCSS', 'Python', 'Flask'],
    live: '#',
    cached: '#',
    github: `${GITHUB_URL}/MathMaster`
  },
  {
    id: 2,
    title: 'tg-restricted-content-saver-bot',
    description: 'A powerful Telegram bot that can save and forward messages, media, and files from both public and private channels. Built with Pyrogram, this bot features progress tracking, rate limiting, and batch processing capabilities.',
    image: `${ASSETS_PATH}/telegram-bot.svg`,
    technologies: ['CSS', 'Express', 'Node.js'],
    github: `${GITHUB_URL}/tg-restricted-content-saver-bot`
  },
  {
    id: 3,
    title: 'QuizNexus',
    description: 'QuizNexus is a modern, interactive quiz application built with React and TypeScript. It features a dynamic quiz interface with real-time scoring, performance tracking, and detailed analytics.',
    image: `${ASSETS_PATH}/quiznexus.svg`,
    technologies: ['React', 'Express', 'Discord.js', 'Node.js'],
    github: `${GITHUB_URL}/QuizNexus`,
    live: '#',
  },
  {
    id: 4,
    title: 'CelestialNavigator',
    description: 'An interactive 3D solar system simulation built with React, Three.js, and React Three Fiber.',
    image: `${ASSETS_PATH}/celestial-navigator.svg`,
    technologies: ['HTML', 'CSS', 'JS'],
    github: `${GITHUB_URL}/CelestialNavigator`
  },
  {
    id: 5,
    title: 'Modern E-Commerce Solution 👜',
    description: "A sleek, high-performance online shopping platform built with React, TypeScript, and SQLite. Designed for speed, scalability, and seamless user experience, features a dynamic UI, real-time cart updates, and secure transactions.",
    image: `${ASSETS_PATH}/ecommerce.svg`,
    technologies: ['Vue', 'TS', 'Less'],
    github: `${GITHUB_URL}/ShopSwift-e-commerce`
  },
  {
    id: 6,
    title: 'Electron-Powered API Testing Tool⚡',
    description: 'This desktop application simplifies API testing and development with a clean, user-friendly interface. Built with Electron, it allows developers to efficiently manage requests, inspect responses, configure environments, and track request history.',
    image: `${ASSETS_PATH}/api-tester.svg`,
    technologies: ['React', 'TS', 'Tailwind CSS'],
    github: `${GITHUB_URL}/api-tester-desk`
  }
];
