import logo from "/public/logo.svg";
import editor from "/public/editor.svg";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-10 pattern-graph-fuchsia-500/20" />

      <main className="relative prose max-w-none flex min-h-screen max-h-screen overflow-hidden flex-col items-center justify-between p-4 md:py-16">
        <div className="flex flex-col gap-1">
          <div>
            <img src={logo.src} className="w-12 h-12 rounded" />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl italic font-serif text-black">
              folder-routing
            </span>
            <span className="text-xl py-1 px-3 rounded-md text-white bg-black font-mono">
              v0.1
            </span>
          </div>

          <ul className="list-image-checkmark grid md:grid-cols-2">
            <li>Easy to handle</li>
            <li>Nested routes</li>
            <li>JSON support</li>
            <li>Dynamic and Catch-all routes <span className="text-zinc-400 italic">(soon)</span></li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ashishk1331/folder-routing"
              className="p-2 px-6 bg-zinc-800 rounded text-white hover:bg-fuchsia-600 transition-all no-underline"
            >
              Github
            </a>
          </div>

          <div className="">
            <img src={editor.src} className="" />
          </div>
        </div>
      </main>
    </>
  );
}
