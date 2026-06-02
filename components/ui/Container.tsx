import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return <Tag className={cn("container-page", className)}>{children}</Tag>;
}
