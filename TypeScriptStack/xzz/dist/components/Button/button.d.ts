import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "default" | "primary" | "danger" | "link";
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    btnType?: ButtonType;
    size?: ButtonSize;
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
