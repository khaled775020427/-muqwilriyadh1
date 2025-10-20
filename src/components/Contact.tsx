import { Card } from "./ui/card";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4">
        اتصل بنا
          </h1>
          <p className="text-xl text-brown-700 max-w-2xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة تواصل معنا الان
          </p>
        </div>

        {/* الكارد الكبير */}
        <Card className="p-12 md:p-16 bg-brown-200 border-2 border-brown-400 shadow-2xl rounded-3xl animate-scale-in text-brown-800">
          <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4">
جاهزون لخدمتكم الآن</h2>
        
          </div>

          {/* أيقونات الاتصال */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* الهاتف */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="w-20 h-20 rounded-2xl bg-green-500 flex items-center justify-center mb-4 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">اتصل بنا</h4>
              <a href="tel:0552132619" className="text-lg font-semibold hover:text-green-200 transition-colors">
                0552132619
              </a>
            </div>

      {/* واتساب */}
<div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
  <div className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center mb-4 shadow-lg">
    {/* أيقونة واتساب الرسمية */}
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp" 
      className="w-10 h-10"
    />
  </div>
  <h4 className="text-xl font-bold mb-2">واتس آب</h4>
  <a 
    href="https://wa.me/966552132619" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-lg font-semibold hover:text-green-200 transition-colors"
  >
    راسلنا الآن
  </a>
</div>


      {/* انستقرام */}
<div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center mb-4 shadow-lg">
    <Instagram className="w-10 h-10 text-white" />
  </div>
  <h4 className="text-xl font-bold mb-2">انستقرام</h4>
  <a 
    href="https://www.instagram.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-lg font-semibold hover:text-pink-400 transition-colors"
  >
    تابعنا
  </a>
</div>


            {/* الموقع */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">الموقع</h4>
              <p className="text-lg font-semibold">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
