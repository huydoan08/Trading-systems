"use client";

import React, { useState, useRef, useEffect } from "react";

interface Item {
  title: string;
  content: string[];
}

interface SideContentProps {
  items: Item[];
  initialIndex?: number;
  onSelect?: (index: number) => void;
}

export function SideContent({ items, initialIndex = 0, onSelect }: SideContentProps) {
  const [selected, setSelected] = useState<number>(initialIndex);
  const current = items[selected];

  useEffect(() => {
    setSelected(initialIndex);
  }, [initialIndex]);

  const groupNameRef = useRef(`sidecontent-${Math.random().toString(36).slice(2)}`);

  const renderContentBlock = (text: string) => {
    return text
      .split(/\n{2,}/g)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block, index) => {
        const lines = block.split("\n");
        const isList = lines.every((line) => line.trim().startsWith("- "));
        const isCode = lines.some((line) => /^(const |let |var |return |useEffect\(|useState\(|setState\(|<input|\s{2,}|=>)/.test(line));

        if (isList) {
          return (
            <ul key={index} className="mb-4 list-disc pl-6 text-slate-700 dark:text-slate-200">
              {lines.map((line, idx) => (
                <li key={idx} className="mb-2 leading-7">
                  {line.trim().slice(2)}
                </li>
              ))}
            </ul>
          );
        }

        if (isCode) {
          return (
            <pre
              key={index}
              className="mb-4 overflow-x-auto rounded-lg bg-slate-950/90 px-4 py-3 text-sm text-slate-100 dark:bg-slate-900"
            >
              {block}
            </pre>
          );
        }

        return (
          <p key={index} className="mb-4 leading-7 text-slate-700 dark:text-slate-200">
            {block}
          </p>
        );
      });
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <aside className="md:w-72 w-full flex-shrink-0">
        <div className="bg-card rounded-md border border-border p-2 max-h-[99vh] overflow-y-auto hide-scrollbar">
          {items.map((item, i) => (
            <label
              key={i}
              htmlFor={`${groupNameRef.current}-${i}`}
              className={`cursor-pointer w-full text-left flex items-start gap-3 p-3 rounded-md hover:bg-accent/10 dark:hover:bg-accent/20 focus-within:outline-none transition-colors ${
                  i === selected ? "bg-gray-100 dark:bg-slate-800 border border-border" : ""
                }`}
            >
              <input
                id={`${groupNameRef.current}-${i}`}
                name={groupNameRef.current}
                type="radio"
                checked={i === selected}
                onChange={() => {
                  setSelected(i);
                  onSelect?.(i);
                }}
                className="sr-only"
              />

              <div className="flex-1">
                <div className="text-sm font-medium">{item.title}</div>
              </div>
            </label>
          ))}
        </div>
      </aside>

      <main className="flex-1 min-w-0 mt-10">
        <article className="prose prose-slate dark:prose-invert max-w-none overflow-auto">
          <h2 className="text-3xl font-semibold mb-4">{current?.title}</h2>
          {current?.content?.map((line, idx) => (
            <section
              key={idx}
              className="mb-6 text-xl rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-700 dark:border-slate-800/90 dark:bg-slate-950/80 dark:text-slate-200"
            >
              {renderContentBlock(line)}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
}
