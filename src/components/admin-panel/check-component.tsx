import XCheckbox from "@/components/admin-panel/XCheckbox";
import VCheckbox from "@/components/admin-panel/VCheckbox";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionCheckboxes() {
  const rows = [
    [<VCheckbox key={1} />]
  ];

  const priceLabels = [10];

  return (
    <Card className="w-full flex flex-col items-start shadow-lg border border-black-200 dark:border-black-700 p-4 h-[420px]">
      <CardContent className="space-y-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center space-x-2">
            <span className="font-bold">${priceLabels[rowIndex]}</span>
            <div className="flex flex-wrap gap-2">{row}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
