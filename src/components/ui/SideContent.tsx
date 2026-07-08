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

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <aside className="md:w-72 w-full flex-shrink-0">
        <div className="bg-surface rounded-md border border-border p-2 max-h-[99vh] overflow-y-auto hide-scrollbar">
          {items.map((item, i) => (
            <label
              key={i}
              htmlFor={`${groupNameRef.current}-${i}`}
              className={`cursor-pointer w-full text-left flex items-start gap-3 p-3 rounded-md hover:bg-accent/5 focus-within:outline-none transition-colors ${
                  i === selected ? "bg-gray-100 border border-border" : ""
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
        <div className="prose max-w-none overflow-auto">
          <h2 className="text-2xl font-semibold mb-4">{current?.title}</h2>
          {current?.content?.map((line, idx) => (
            <p key={idx} className="mb-3 text-muted-foreground">
              {line}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
