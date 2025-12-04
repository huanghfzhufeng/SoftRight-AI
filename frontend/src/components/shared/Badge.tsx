import React from 'react';

type BadgeType = 'success' | 'warning' | 'error' | 'neutral' | 'purple';

interface BadgeProps {
  children: React.ReactNode;
  type?: BadgeType;
}

const styles: Record<BadgeType, string> = {
  success: "bg-green-100 text-green-600",
  warning: "bg-orange-100 text-orange-600",
  error: "bg-red-100 text-red-600",
  neutral: "bg-gray-100 text-gray-600",
  purple: "bg-[#F4F7FE] text-[#A78BFA]"
};

export const Badge: React.FC<BadgeProps> = ({ children, type = "success" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[type]}`}>
    {children}
  </span>
);
