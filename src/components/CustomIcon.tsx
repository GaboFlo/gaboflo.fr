import React from "react";

interface CustomIconProps {
  svgPath: string;
  size?: "sm" | "md" | "lg";
  iconName?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  svgPath,
  size = "sm",
  iconName = "",
}) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const getColorClass = (name: string) => {
    switch (name) {
      case "chrome":
        return "text-blue-600";
      case "firefox":
        return "text-orange-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${getColorClass(iconName)}`}>
      <img src={svgPath} alt={`${iconName} icon`} className="w-full h-full" />
    </div>
  );
};

export default CustomIcon;
