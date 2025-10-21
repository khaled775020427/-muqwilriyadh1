import { Phone, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // تعريف الروابط كمتغيرات
  const contactLinks = {
    phone: "tel:0552132619",
    whatsapp: "https://wa.me/966552132619",
    instagram: "https://www.instagram.com/lnjz796?igsh=dG9ueHRqbnM4djJt"
  };

  return (
    <footer className="gradient-hero text-white py-16 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-shadow">مقاول هناجر الرياض</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              نقدم خدمات احترافية في تركيب هناجر ومستودعات ومظلات وسواتر بالرياض بأعلى جودة وأفضل الأسعار
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-shadow">خدماتنا</h4>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="hover:text-secondary transition-colors cursor-pointer">هناجر ومستودعات</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">مظلات سيارات</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">سواتر</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">ساندوتش بانل</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">تحويش أراضي</li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-shadow">تواصل معنا</h4>
            <div className="space-y-4">
              {/* الهاتف */}
              <a 
                href={contactLinks.phone}
                className="flex items-center gap-3 text-white/90 hover:text-secondary transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">0552132619</span>
              </a>

              {/* واتساب */}
              <a 
                href={contactLinks.whatsapp}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-secondary transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-lg">واتس آب</span>
              </a>

              {/* انستقرام */}
              <a 
                href={contactLinks.instagram}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-secondary transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-lg">انستقرام</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center text-lg text-white font-medium">
            © {currentYear} جميع الحقوق محفوظة | 
            <a 
              href="https://wa.me/967775020427?text=مرحباً%20خالد،%20أرغب%20في%20الاستفسار%20عن%20خدماتكم" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-yellow-300 transition-colors duration-300 font-bold text-xl"
            >
              Khaled Maresh
            </a>
            | 
            <a 
              href="https://wa.me/967770370248?text=مرحباً%20وهيب،%20أرغب%20في%20الاستفسار%20عن%20خدماتكم" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-yellow-300 transition-colors duration-300 font-bold text-xl"
            >
              Waheeb Al-Hadi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};