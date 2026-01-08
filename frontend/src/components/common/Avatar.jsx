import React from "react";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20"
    };

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full border border-border/50 shadow-sm",
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {src ? (
                <img className="aspect-square h-full w-full object-cover" src={src} alt={alt} />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground font-medium">
                    {fallback || alt?.charAt(0) || "U"}
                </div>
            )}
        </div>
    );
});
Avatar.displayName = "Avatar";

export { Avatar };
