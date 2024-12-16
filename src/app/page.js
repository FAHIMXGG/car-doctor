import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 px-10 h-screen justify-center">
      <button className="btn">Button</button>
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
    </div>
  );
}
