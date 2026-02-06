import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:0784330816"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-slow"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default StickyCallButton;
