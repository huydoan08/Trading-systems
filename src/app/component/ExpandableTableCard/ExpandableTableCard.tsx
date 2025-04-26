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
      className={`px-6 py-4 cursor-pointer select-none flex flex-col transition-colors duration-200 ${!isLast ? 'border-b border-[#e5e7eb]' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-black-800">{title}</span>
        {isOpen ? <ChevronUp className="text-black-800" /> : <ChevronDown className="text-black-800" />}
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
            <CardContent className="p-0 pt-4 text-black-800 bg-transparent border-none">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] bg-white w-24 text-black-800">KHUNG</TableHead>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] bg-white w-24 text-black-800">RSI</TableHead>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] bg-white w-24 text-black-800">KẾT LUẬN</TableHead>
                      <TableHead className="text-center font-bold border border-[#e5e7eb] bg-white text-black-800">NHẬN ĐỊNH</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {content.map((row: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium border border-[#e5e7eb]">
                          {row.time === "KẾT LUẬN" ? (
                            <span className="text-red-400">{row.time}</span>
                          ) : (
                            <span className="text-orange-400">{row.time}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center border border-[#e5e7eb]">
                          <span className="text-purple-400">{row.rsi}</span>
                        </TableCell>
                        <TableCell className="text-center font-medium border border-[#e5e7eb]">
                          {row.conclusion.includes("GIẢM") ? (
                            <span className="text-red-400">{row.conclusion}</span>
                          ) : row.conclusion.includes("TĂNG") ? (
                            <span className="text-green-400">{row.conclusion}</span>
                          ) : (
                            <span>{row.conclusion}</span>
                          )}
                        </TableCell>
                        <TableCell className="border border-[#e5e7eb]">
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
