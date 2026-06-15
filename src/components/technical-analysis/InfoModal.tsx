"use client";

import { useEffect, useMemo, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dot } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
  useCheckbox?: boolean;
}

export const InfoModal = ({
  isOpen,
  onClose,
  title,
  items,
  useCheckbox = false,
}: InfoModalProps) => {
  const defaultCheckedState = useMemo(() => items.map(() => false), [items]);
  const [checkedState, setCheckedState] = useState<boolean[]>(defaultCheckedState);
  const [isLoaded, setIsLoaded] = useState(!useCheckbox);

  useEffect(() => {
    if (!useCheckbox) return;
    setCheckedState(defaultCheckedState);
    setIsLoaded(false);
  }, [defaultCheckedState, useCheckbox]);

  useEffect(() => {
    if (!useCheckbox || !isOpen) return;

    let isCancelled = false;
    const fetchState = async () => {
      try {
        const res = await fetch(
          `/api/info-modal?title=${encodeURIComponent(title)}`
        );
        if (!res.ok) return;

        const data = await res.json();
        if (Array.isArray(data.checkedState)) {
          const normalized = data.checkedState
            .slice(0, items.length)
            .map(Boolean);

          setCheckedState(
            normalized.length < items.length
              ? [...normalized, ...defaultCheckedState.slice(normalized.length)]
              : normalized
          );
          setIsLoaded(true);
          return;
        }
      } catch {
        // ignore fetch errors
      }

      if (!isCancelled) {
        setCheckedState(defaultCheckedState);
        setIsLoaded(true);
      }
    };

    fetchState();
    return () => {
      isCancelled = true;
    };
  }, [defaultCheckedState, isOpen, items.length, title, useCheckbox]);

  useEffect(() => {
    if (!useCheckbox || !isLoaded) return;

    const saveState = async () => {
      try {
        await fetch("/api/info-modal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, checkedState }),
        });
      } catch {
        // ignore save errors
      }
    };

    saveState();
  }, [checkedState, isLoaded, title, useCheckbox]);

  const handleCheckedChange = (idx: number) => {
    setCheckedState((prev) =>
      prev.map((value, index) => (index === idx ? !value : value))
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {items.map((item, idx) => {
          const checked = useCheckbox ? checkedState[idx] ?? false : false;

          return (
            <div key={idx} className="flex items-start">
              {useCheckbox ? (
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => handleCheckedChange(idx)}
                  className="mt-1"
                />
              ) : (
                <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
              )}
              <Label
                className={
                  "text-lg font-semibold ml-3 " +
                  (useCheckbox && checked
                    ? "text-red-600 dark:text-red-400"
                    : "text-black-700 dark:text-white")
                }
              >
                {item}
              </Label>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}; 