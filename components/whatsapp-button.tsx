"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppMessage, generateWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: WhatsAppMessage;
  className?: string;
  children: React.ReactNode;
}

export function WhatsAppButton({ message, className, children }: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = generateWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  return (
    <Button 
      onClick={handleClick}
      className={`bg-green-600 hover:bg-green-700 ${className}`}
    >
      {children}
    </Button>
  );
}