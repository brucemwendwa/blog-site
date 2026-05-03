// blog.js — all data for the personal blog site
// This file is imported by App.jsx and passed as props to child components

const blogData = {
  // ── Blogger Info ──────────────────────────────────────────────────────────
  name: "Bruce Mwendwa",
  role: "Junior Software Engineer",
  tagline: "Building one line of code at a time 🚀",
  email: "brucemwendwa@example.com",
  github: "https://github.com/brucemwendwa",
  location: "Nairobi, Kenya",

  // ── About Section ─────────────────────────────────────────────────────────
  bio: `Hey! I'm Bruce — a junior software engineer who genuinely enjoys turning ideas into 
  working products. I got into coding because I love problem-solving, and now I can't imagine 
  doing anything else. I write a lot of JavaScript, dabble with Python, and lately I've been 
  going deep with React. Outside of code, you'll catch me with a guitar, a camera, or planning 
  my next trip somewhere I've never been. My spirit animal? The eagle — big-picture vision, 
  sharp focus, always aiming higher.`,

  spiritAnimal: "🦅 The Eagle",

  tags: ["React", "JavaScript", "Node.js", "Full-Stack", "Open Source"],

  // ── Hobbies ───────────────────────────────────────────────────────────────
  hobbies: [
    { id: 1, name: "💻 Coding & Building Projects", isFavourite: true },
    { id: 2, name: "📸 Photography", isFavourite: true },
    { id: 3, name: "🌍 Travelling", isFavourite: true },
    { id: 4, name: "🎸 Playing Guitar", isFavourite: false },
    { id: 5, name: "📚 Reading Tech Blogs", isFavourite: false },
    { id: 6, name: "🏃 Running", isFavourite: false },
    { id: 7, name: "🎬 Watching Dev Talks", isFavourite: false },
    { id: 8, name: "🍳 Cooking", isFavourite: false },
    { id: 9, name: "🎮 Gaming", isFavourite: false },
    { id: 10, name: "🎨 Digital Art", isFavourite: false },
  ],

  // ── Blog Posts ────────────────────────────────────────────────────────────
  posts: [
    {
      id: 1,
      title: "Why I Started Learning React",
      date: "April 20, 2025",
      category: "React",
      readTime: "4 min read",
      excerpt:
        "React felt intimidating at first. Components, JSX, props, state — it was a lot. But the moment things clicked, I got it. Here's how I went from confused to actually enjoying it.",
      emoji: "⚛️",
    },
    {
      id: 2,
      title: "What I Wish I Knew Before Writing My First API",
      date: "March 15, 2025",
      category: "Backend",
      readTime: "6 min read",
      excerpt:
        "My first REST API was a mess. No validation, no error handling, just raw hope. I'll walk through the lessons that made my second one actually production-worthy.",
      emoji: "🔧",
    },
    {
      id: 3,
      title: "Git Habits Every Junior Dev Should Build Early",
      date: "February 28, 2025",
      category: "Workflow",
      readTime: "3 min read",
      excerpt:
        "Commit messages like 'fix stuff' and force-pushing to main — I did all of it. Here are the Git habits I wish I had built from day one.",
      emoji: "🌿",
    },
    {
      id: 4,
      title: "Debugging: Stop Guessing, Start Reading",
      date: "January 10, 2025",
      category: "Tips",
      readTime: "5 min read",
      excerpt:
        "Most of my early debugging was trial-and-error with console.log everywhere. Once I actually learned to read errors and use DevTools properly, everything changed.",
      emoji: "🐛",
    },
  ],
};

export default blogData;
