import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageWrapper from "../components/PageWrapper";

const posts = [
  {
    title: "My Journey Into Frontend Development",
    content: `
### 🚀 My Journey Into Frontend Development
Hello! I'm **Arinze Ugwu**, a frontend dev passionate about animations & UI.

**Things I love working with:**
- React.js
- Tailwind CSS
- Framer Motion
- UI Animations

Thanks for reading! 💙
`,
  },
  {
    title: "Why I Love React + Tailwind Combo",
    content: `
### ⚛️ React + Tailwind
This combo changed my workflow forever!

- Fast development
- Consistent UI system
- Reusable components

Highly recommended! 🌟
`,
  },
];

export default function Blog() {
  const [active, setActive] = useState(0);

  return (
    <PageWrapper>
      <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-5xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400">Blog</h1>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <aside className="w-full lg:w-1/3 space-y-4">
            {posts.map((post, index) => (
              <button
                key={index}
                className={`block w-full text-left p-4 rounded-lg border ${
                  active === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
                onClick={() => setActive(index)}
              >
                {post.title}
              </button>
            ))}
          </aside>

          <article className="w-full lg:w-2/3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {posts[active].content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </PageWrapper>
  );
}
