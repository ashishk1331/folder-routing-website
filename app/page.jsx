// Components
import Footer from "@/components/Footer.jsx";

// Helper
import logo from "/public/logo.svg";
import editor from "/public/editor.svg";
import banner from "/public/banner.png";

export default function Home() {
  return (
    <main className="relative prose max-w-none flex flex-col items-center justify-between p-8 md:py-16 pattern-graph-fuchsia-500/20">
      <div className="flex flex-col gap-1">
        <div>
          <img src={logo.src} className="w-12 h-12 rounded" />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl italic font-serif text-black hover:underline transition-all cursor-pointer">
            folder-routing
          </span>
          <span className="text-xl font-mono font-medium">v0.0.4</span>
        </div>

        <ul className="list-image-checkmark font-medium grid md:grid-cols-2">
          <li>Easiest to setup</li>
          <li>Asynchronous functions</li>
          <li>JSON and Text support</li>
          <li>Nested routes, Dynamic and Catch-all routes</li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="https://github.com/ashishk1331/folder-routing">Github,</a>
          <a href="https://www.npmjs.com/package/folder-routing">NPM</a>
        </div>

        <div className="">
          <img src={banner.src} className="max-w-4xl p-2 bg-black rounded" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function grayText(props) {
  const { text } = props;
  return <span className="text-zinc-400 italic">{text}</span>;
}
