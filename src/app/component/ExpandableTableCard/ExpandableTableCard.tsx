import { CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface ExpandableTableCardProps {
  title: string;
  content: any;
  isOpen: boolean;
  onClick: () => void;
  isLast?: boolean;
}

interface DataRow {
  time: string;
  rsi: number;
  conclusion: string;
  assessment: string[];
}

export function ExpandableTableCard({
  title,
  content,
  isOpen,
  onClick,
  isLast = false,
}: ExpandableTableCardProps) {
  return (
    <div
      className={`px-6 py-4 cursor-pointer select-none flex flex-col transition-colors duration-200 bg-card ${!isLast ? 'border-b border-[#e5e7eb] dark:border-[#222]' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-card-foreground">{title}</span>
        {isOpen ? <ChevronUp className="text-card-foreground" /> : <ChevronDown className="text-card-foreground" />}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="expandable-table-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="p-0 pt-4 text-foreground bg-transparent border-none">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] dark:border-[#222] bg-card w-24 text-card-foreground">KHUNG</TableHead>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] dark:border-[#222] bg-card w-24 text-card-foreground">KẾT LUẬN</TableHead>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] dark:border-[#222] bg-card text-card-foreground">NHẬN ĐỊNH</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {content.map((row: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium border border-[#e5e7eb] dark:border-[#222]">
                          {row.time === "KẾT LUẬN" ? (
                            <span className="dark:text-red-400">{row.time}</span>
                          ) : (
                            <span className="text-purple-600 dark:text-purple-400">{row.time}</span>
                          )}
                        </TableCell>

                        <TableCell className="text-center font-medium border border-[#e5e7eb] dark:border-[#222] text-foreground">
                          {row.conclusion.includes("GIẢM") ? (
                            <span className="text-red-400">{row.conclusion}</span>
                          ) : row.conclusion.includes("TĂNG") ? (
                            <span className="text-green-400">{row.conclusion}</span>
                          ) : (
                            <span>{row.conclusion}</span>
                          )}
                        </TableCell>
                        <TableCell className="border border-[#e5e7eb] dark:border-[#222] text-foreground">
                          <ul className="list-none pl-0 m-0">
                            {row.assessment.map((row: any, idx: number) => (
                              <li key={idx} className="mb-1">- {row}</li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
