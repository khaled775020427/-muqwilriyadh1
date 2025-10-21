import { Card } from "./ui/card";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

export const Contact = () => {
  // تعريف الروابط كمتغيرات لتسهيل التعديل مستقبلاً
  const contactInfo = {
    phone: "+966 55 213 2619",
    whatsapp: "https://wa.me/966552132619",
    instagram: "https://www.instagram.com/lnjz796?igsh=dG9ueHRqbnM4djJt",
    location: "https://goo.gl/maps/jjNkzMTqFDDf1BnK8?g_st=aw",
    address: "الموقع على الخريطة"
  };

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
              جاهزون لخدمتكم الآن
            </h2>
          </div>

          {/* أيقونات الاتصال */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* الهاتف */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-green-500 flex items-center justify-center mb-4 shadow-lg hover:bg-green-600 transition-colors">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold">اتصل بنا</h4>
              </a>
            </div>

            {/* واتساب */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <a 
                href={contactInfo.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center mb-4 shadow-lg hover:bg-green-700 transition-colors">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-xl font-bold">واتس آب</h4>
              </a>
            </div>

            {/* انستقرام */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <a 
                href={contactInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center mb-4 shadow-lg hover:opacity-90 transition-opacity">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold">انستقرام</h4>
              </a>
            </div>

            {/* الموقع */}
            <div className="flex flex-col items-center text-center p-6 bg-brown-300 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <a 
                href={contactInfo.location} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center mb-4 shadow-lg hover:bg-blue-600 transition-colors">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold">الموقع</h4>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};