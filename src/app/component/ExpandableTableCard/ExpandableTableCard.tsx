import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
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
  kl: string;
  nhanDinh: string[];
}

export function ExpandableTableCard({ title, content, isOpen, onClick }: ExpandableTableCardProps) {
  return (
    <Card
      className="shadow-lg border border-black-200 dark:border-black-700 mt-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-6">
        <span className="font-bold text-lg text-black-800 dark:text-white">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <CardContent className="p-6 space-y-2 border-t text-black-700 dark:text-white max-h-[40vh] overflow-auto sm:max-h-[60vh]">
        <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-red-50">
            <TableHead className="text-center font-bold text-red-800">TIME</TableHead>
            <TableHead className="text-center font-bold text-red-800">RSI</TableHead>
            <TableHead className="text-center font-bold text-red-800">KL</TableHead>
            <TableHead className="text-center font-bold text-red-800">NHẬN ĐỊNH</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {content.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="text-center font-medium text-purple-800">
                {row.time}
              </TableCell>
              <TableCell className="text-center">{row.rsi}</TableCell>
              <TableCell className="text-center font-medium">
                {row.kl}
              </TableCell>
              <TableCell>
                <ul className="list-inside list-disc">
                  {row.nhanDinh.map((item: any, idx: number) => (
                    <li key={idx}>{item}</li>
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
