import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "gradient" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-[0_6px_20px_-8px_rgba(241,131,35,0.6)]",
  gradient:
    "brand-gradient text-white hover:opacity-95 shadow-[0_10px_30px_-10px_rgba(227,55,45,0.55)]",
  secondary:
    "bg-white text-ink-900 border border-ink-200 hover:border-brand-500 hover:text-brand-600",
  ghost: "bg-transparent text-ink-800 hover:bg-ink-50",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-5 text-[15px] rounded-full",
  lg: "h-14 px-7 text-base rounded-full",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    leading,
    trailing,
    fullWidth,
  } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 will-change-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {leading}
      {children}
      {trailing}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href) || props.href.startsWith("tel:") || props.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={props.href} target={props.target} rel={props.rel} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const rest = { ...(props as ButtonProps) };
  delete (rest as Partial<ButtonProps>).variant;
  delete (rest as Partial<ButtonProps>).size;
  delete (rest as Partial<ButtonProps>).className;
  delete (rest as Partial<ButtonProps>).children;
  delete (rest as Partial<ButtonProps>).leading;
  delete (rest as Partial<ButtonProps>).trailing;
  delete (rest as Partial<ButtonProps>).fullWidth;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
