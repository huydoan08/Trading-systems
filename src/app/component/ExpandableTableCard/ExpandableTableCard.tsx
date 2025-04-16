import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
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
  onClick
}: ExpandableTableCardProps) {
  return (
    <Card
      className="shadow-lg border border-black-200 dark:border-black-700 mt-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-6">
        <span className="font-bold text-lg text-black-800 dark:text-white">
          {title}
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <CardContent className="p-6 space-y-2 border-t text-black-700 dark:text-white max-h-[40vh] overflow-auto sm:max-h-[60vh]">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold text-red-600 border border-gray-300 bg-gray-50 w-24">
                    KHUNG
                  </TableHead>
                  <TableHead className="text-center font-bold text-red-600 border border-gray-300 bg-gray-50 w-24">
                    RSI
                  </TableHead>
                  <TableHead className="text-center font-bold text-red-600 border border-gray-300 bg-gray-50 w-24">
                    KẾT LUẬN
                  </TableHead>
                  <TableHead className="text-center font-bold text-red-600 border border-gray-300 bg-gray-50">
                    NHẬN ĐỊNH
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {content.map((row: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="text-center text-purple-700 font-medium border border-gray-300">
                      {row.time}
                    </TableCell>
                    <TableCell className="text-center border border-gray-300">
                      {row.rsi}
                    </TableCell>
                    <TableCell className="text-center font-medium border border-gray-300">
                      {row.kl === "GIẢM" ? (
                        <span className="text-red-600">{row.conclusion}</span>
                      ) : row.conclusion.includes("GIẢM") ? (
                        <span className="text-red-600">{row.conclusion}</span>
                      ) : (
                        <span>{row.conclusion}</span>
                      )}
                    </TableCell>
                    <TableCell className="border border-gray-300">
                      <ul className="list-none pl-0 m-0">
                        {row.assessment.map((row: any, idx: number) => (
                          <li key={idx} className="mb-1">
                            - {row}
                          </li>
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
    </Card>
  );
}
