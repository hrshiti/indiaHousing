import React from "react";
import LogoImage from "@/assets/indinaHoudingLogo-removebg-preview.png";
import { cn } from "@/lib/utils";

const Logo = ({ className, size = "md" }) => {
    const sizeClasses = {
        sm: "h-24", // Increased from h-14
        md: "h-32", // Increased from h-20
        lg: "h-48", // Increased from h-32
        xl: "h-64"  // Increased from h-48
    };

    return (
        <img
            src={LogoImage}
            alt="IndiaHousing Logo"
            className={cn("object-contain", sizeClasses[size], className)}
        />
    );
};

export default Logo;
