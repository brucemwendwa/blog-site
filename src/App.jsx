// App.jsx — root component
// Imports blog data from blog.js and passes it as props to each component

import blogData from './blog.js';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import BlogPosts from './components/BlogPosts';
import Hobbies   from './components/Hobbies';
import Footer    from './components/Footer';

function App() {
  return (
    <>
      {/* ── Navigation ─────────────────────────────── */}
      <Navbar
        name={blogData.name}
        github={blogData.github}
      />

      {/* ── Hero / Landing ─────────────────────────── */}
      <Hero
        name={blogData.name}
        role={blogData.role}
        tagline={blogData.tagline}
        location={blogData.location}
      />

      {/* ── About Me ───────────────────────────────── */}
      <About
        bio={blogData.bio}
        spiritAnimal={blogData.spiritAnimal}
        tags={blogData.tags}
      />

      {/* ── Blog Posts ─────────────────────────────── */}
      <BlogPosts posts={blogData.posts} />

      {/* ── Hobbies (class component) ──────────────── */}
      <Hobbies hobbies={blogData.hobbies} />

      {/* ── Footer ─────────────────────────────────── */}
      <Footer
        name={blogData.name}
        email={blogData.email}
        github={blogData.github}
        location={blogData.location}
      />
    </>
  );
}

export default App;