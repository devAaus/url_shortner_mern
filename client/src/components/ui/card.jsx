import * as React from "react";

import { cn } from "@/lib/utils"; // Assuming 'cn' is correctly imported

// Card component
const Card = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
};

// CardHeader component
const CardHeader = ({ className, ...props }) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
};

// CardTitle component
const CardTitle = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
};

// CardDescription component
const CardDescription = ({ className, ...props }) => {
  return (
    <div className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

// CardContent component
const CardContent = ({ className, ...props }) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
};

// CardFooter component
const CardFooter = ({ className, ...props }) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};