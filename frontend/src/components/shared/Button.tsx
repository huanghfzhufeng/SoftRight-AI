import React from 'react';
import { colors } from '../../styles/colors';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary, 
  className = "", 
  onClick,
  disabled 
}) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
      primary 
        ? `${colors.lime} text-[#1B1B1B] ${colors.limeHover} shadow-lg shadow-[#CEF265]/40` 
        : 'bg-white text-[#2B3674] hover:bg-gray-50 border border-gray-100'
    } ${className}`}
  >
    {children}
  </button>
);
