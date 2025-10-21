import { Phone, Instagram, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* ✅ الشعار + رقم الهاتف */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* الشعار */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/icon/icon.webp"
                alt="شعار الموقع"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </Link>

            {/* رقم الهاتف */}
            <a 
              href="tel:0552132619"
              className="flex items-center gap-1 sm:gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-cairo font-bold text-base sm:text-lg md:text-xl tracking-wide">
                0552132619
              </span>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* ✅ روابط القائمة */}
          <nav className="hidden lg:flex items-center gap-6 font-cairo font-bold text-[16px]">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors">الرئيسية</Link>
            <Link to="/warehouses" className="text-gray-700 hover:text-primary transition-colors">هناجر ومستودعات</Link>
            <Link to="/canopies" className="text-gray-700 hover:text-primary transition-colors">مظلات</Link>
            <Link to="/shutters" className="text-gray-700 hover:text-primary transition-colors">سواتر</Link>
            <Link to="/sandwich-panel" className="text-gray-700 hover:text-primary transition-colors">ساندوتش بانل</Link>
            <Link to="/fencing" className="text-gray-700 hover:text-primary transition-colors">تحويش أراضي</Link>
          </nav>

          {/* ✅ الأيقونات والأزرار */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <Button size="sm" variant="default" className="hidden sm:flex font-cairo text-sm sm:text-base px-4 py-2" asChild>
              <a href="tel:0552132619">اطلب الآن</a>
            </Button>

            {/* ✅ زر القائمة للجوال */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ✅ القائمة الجوالية */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/20 animate-fade-in-up bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-3 font-cairo font-bold text-[15px] sm:text-[17px] text-center">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-primary hover:text-primary/80 transition-colors py-2">الرئيسية</Link>
              <Link to="/warehouses" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">هناجر ومستودعات</Link>
              <Link to="/canopies" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">مظلات</Link>
              <Link to="/shutters" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">سواتر</Link>
              <Link to="/sandwich-panel" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">ساندوتش بانل</Link>
              <Link to="/fencing" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">تحويش أراضي</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
