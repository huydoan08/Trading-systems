import XCheckbox from "@/components/admin-panel/XCheckbox";
import VCheckbox from "@/components/admin-panel/VCheckbox";
import { Card, CardContent } from "@/components/ui/card";

export default function TransactionCheckboxes() {
  const rows = [
    [<VCheckbox key={1} />, <VCheckbox key={2} />, <VCheckbox key={3} />, <XCheckbox key={4} />, <XCheckbox key={5} />, <XCheckbox key={6} />, <XCheckbox key={7} />],
    [<VCheckbox key={8} />, <XCheckbox key={9} />, <VCheckbox key={10} />],
    [<XCheckbox key={11} />, <XCheckbox key={12} />, <VCheckbox key={13} />, <VCheckbox key={14} />],
    [<XCheckbox key={15} />, <VCheckbox key={16} />, <XCheckbox key={17} />, <VCheckbox key={18} />, <XCheckbox key={19} />]
  ];

  // Danh sách giá trị tiền cho từng dòng
  const priceLabels = [10, 15, 20, 30];

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
