"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Item {
  title: string;
  // support multiple content shapes:
  // - array of strings
  // - array of { text: string }
  // - array of { type: 'text' | 'image', value: string, alt?: string }
  content: Array<string | { text?: string; isRed?: boolean } | { type: "text" | "image"; value: string; alt?: string }>;
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
          {current?.content?.map((item, idx) => {
            // string
            if (typeof item === "string") {
              return (
                <p key={idx} className="mb-3 text-muted-foreground">
                  {item}
                </p>
              );
            }

            // { text }
            if ((item as any).text) {
              const text = (item as any).text as string;
              return (
                <p key={idx} className="mb-3 text-muted-foreground">
                  {text.split("\n").map((l, i) => (
                    <span key={i}>
                      {l}
                      {i < text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            }

            // { type: 'text' | 'image', value, alt }
            if ((item as any).type === "text") {
              const val = (item as any).value as string;
              return (
                <p key={idx} className="mb-3 text-muted-foreground">
                  {val.split("\n").map((l, i) => (
                    <span key={i}>
                      {l}
                      {i < val.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            }

            if ((item as any).type === "image") {
              const val = (item as any).value as string;
              const alt = (item as any).alt as string | undefined;
              return (
                <Card key={idx} className="mb-4">
                  <CardContent className="p-0">
                    <div className="w-full overflow-hidden rounded-md">
                      <Image
                        src={val}
                        alt={alt || "image"}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    {alt && (
                      <p className="text-sm text-muted-foreground mt-2 px-4 pb-4 italic">
                        {alt}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            }

            // fallback
            return (
              <p key={idx} className="mb-3 text-muted-foreground">
                {JSON.stringify(item)}
              </p>
            );
          })}
        </div>
      </main>
    </div>
  );
}
