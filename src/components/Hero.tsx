import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920')",
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920"
          alt="مقاول هناجر الرياض"
          loading="eager"
          className="w-full h-full object-cover"
          style={{ display: 'none' }}
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      <div className="container relative z-10 px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground text-shadow leading-tight">
            مقاول هناجر الرياض
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/95 font-cairo leading-relaxed max-w-3xl mx-auto text-shadow-sm" style={{ animationDelay: '0.2s' }}>
            نحن فريق عمل متخصص نقدم خدمات احترافية في <strong>تركيب هناجر ومستودعات بالرياض</strong> بأعلى جودة ووفق أحدث المعايير الهندسية. كما نوفر جميع حلول المقاولات الخارجية من <strong>تركيب مظلات مواقف سيارات، وسواتر ليزر</strong>.
          </p>
{/* الفقرة الثانية */}
<p
  className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed text-shadow-sm"
  style={{ animationDelay: "0.4s" }}
>
  نمتلك خبرة تمتد لسنوات في{" "}
  <strong className="text-white">
    تحويش الأراضي، تركيب ألواح الساندوتش بانل، وتصميم مظلات عصرية
  </strong>{" "}
  تلائم احتياجات المنازل والمنشآت التجارية بأفضل جودة وأسعار تنافسية.
</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="text-lg md:text-xl px-10 py-7 gap-2 font-bold shadow-2xl hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="tel:0552132619">
                <Phone className="w-6 h-6" />
                اطلب الآن
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg md:text-xl px-10 py-7 gap-2 font-bold bg-background/20 backdrop-blur-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-2xl hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/966552132619" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                واتس آب
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
