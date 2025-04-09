
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SpecialtyCardProps {
  icon: React.ReactNode;
  name: string;
  count: number;
  color?: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon,
  name,
  count,
  color = "bg-seva-50 text-seva-600",
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer border-none">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className={`${color} p-4 rounded-xl mb-4`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-500">{count} doctors</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialtyCard;
