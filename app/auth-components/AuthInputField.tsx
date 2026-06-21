import React from 'react';

interface AuthInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    rightLabelAction?: React.ReactNode;
}

export default function AuthInputField({ label, rightLabelAction, ...props }: AuthInputFieldProps) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-gray-400 tracking-wide">{label}</label>
                {rightLabelAction && rightLabelAction}
            </div>
            <input
                {...props}
                className="w-full bg-[#161C2A] text-gray-100 placeholder-gray-500 border border-[#242F48] rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
        </div>
    );
}