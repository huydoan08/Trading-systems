import XCheckbox from "@/components/admin-panel/XCheckbox";
import VCheckbox from "@/components/admin-panel/VCheckbox";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionCheckboxes() {
  const rows = [
    [<VCheckbox key={1} />, <XCheckbox key={2}/>] 
    // []
  ];

  const volumn = [100];
  const expense = [10]

  return (
    <Card className="w-full flex flex-col items-start shadow-lg border border-black-200 dark:border-black-700 p-4 h-[420px]">
      <CardContent className="space-y-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center space-x-2">
            <div className="flex flex-wrap gap-2">{row}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
