import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 mb-3 text-xl font-semibold tracking-tight text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-8 text-zinc-400">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-2xl border-l-2 border-indigo-400 bg-white/[0.03] py-4 pr-5 pl-5 text-zinc-300 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 leading-8 text-zinc-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 leading-8 text-zinc-400">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

interface PortableTextContentProps {
  value: PortableTextBlock[];
}

export function PortableTextContent({ value }: PortableTextContentProps) {
  return <PortableText value={value} components={components} />;
}
