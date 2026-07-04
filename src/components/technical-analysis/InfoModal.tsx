"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dot } from "lucide-react";

type InfoModalItem = string | { label: string; score?: number };

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: InfoModalItem[];
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

  const getItemScore = (item: InfoModalItem) =>
    typeof item === "string" ? 10 : item.score ?? 10;

  const getItemLabel = (item: InfoModalItem) =>
    typeof item === "string" ? item : item.label;

  const handleCheckedChange = (idx: number) => {
    setCheckedState((prev) =>
      prev.map((value, index) => (index === idx ? !value : value))
    );
  };

  const totalScore = useMemo(
    () =>
      checkedState.reduce((sum, checked, idx) => {
        if (!checked) return sum;
        return sum + getItemScore(items[idx]);
      }, 0),
    [checkedState, items]
  );

  const maxScore = useMemo(
    () => items.reduce((sum, item) => sum + getItemScore(item), 0),
    [items]
  );

  const progressPercent = maxScore ? Math.round((totalScore / maxScore) * 100) : 0;

  const decisionText = useMemo(() => {
    if (progressPercent >= 60) return "Có thể vào lệnh";
    if (progressPercent >= 30) return "Cân nhắc kỹ trước khi vào lệnh";
    if (progressPercent >= 1) return "Không nên vào lệnh";
    return "";
  }, [progressPercent]);

  const decisionClass = useMemo(() => {
    if (progressPercent >= 60) return "text-emerald-600 dark:text-emerald-400";
    if (progressPercent >= 30) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  }, [progressPercent]);

  const progressStrokeClass = useMemo(() => {
    if (progressPercent >= 60) return "stroke-emerald-500 dark:stroke-emerald-400";
    if (progressPercent >= 30) return "stroke-amber-500 dark:stroke-amber-400";
    return "stroke-red-500 dark:stroke-red-400";
  }, [progressPercent]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {useCheckbox ? (
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_160px] items-center border-b border-black-200 pb-4 mb-4 dark:border-black-700">
            <div className="space-y-2">
              <motion.div
                key={totalScore}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 0.25 }}
                className="flex items-end gap-3"
              >
                <div className="text-4xl font-semibold text-black-800 dark:text-white">
                  {totalScore}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  / {maxScore}
                </div>
              </motion.div>
              <div className={`text-sm font-medium ${decisionClass}`}>
                {decisionText}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <motion.svg
                  width="132"
                  height="132"
                  viewBox="0 0 132 132"
                  className="-rotate-90"
                >
                  <circle
                    cx="66"
                    cy="66"
                    r="56"
                    className="fill-none stroke-slate-200 dark:stroke-slate-700"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="66"
                    cy="66"
                    r="56"
                    fill="none"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className={progressStrokeClass}
                    strokeDasharray="351.86"
                    animate={{ strokeDashoffset: 351.86 * (1 - progressPercent / 100) }}
                    transition={{ type: "spring", stiffness: 110, damping: 18 }}
                  />
                </motion.svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Điểm
                  </div>
                  <motion.div
                    animate={{ opacity: [0.4, 1] }}
                    transition={{ duration: 0.35 }}
                    className="text-2xl font-semibold text-black-800 dark:text-white"
                  >
                    {progressPercent}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {items.map((item, idx) => {
          const checked = useCheckbox ? checkedState[idx] ?? false : false;
          const score = getItemScore(item);
          const label = getItemLabel(item);

          return (
            <div key={idx} className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
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
                    "text-lg font-semibold " +
                    (useCheckbox && checked
                      ? "text-red-600 dark:text-red-400"
                      : "text-black-700 dark:text-white")
                  }
                >
                  {label}
                </Label>
              </div>
              {useCheckbox ? (
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  +{score} điểm
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </Modal>
  );
}; 