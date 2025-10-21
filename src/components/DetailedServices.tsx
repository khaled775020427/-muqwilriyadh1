import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

const servicesList = [
  "مقاولات هناجر ومستودعات",
  "مظلات مواقف سيارات",
  "تلبيس ابواب بديل الخشب",
  "بديل الرخام",
  "ورق جدران",
  "سواتر",
  "ساندوتش بانل",
];

export const DetailedServices = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* النص والمحتوى */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-foreground leading-tight">
                تركيب مظلات وسواتر بالرياض
              </h2>
              
              <div className="h-1.5 w-20 md:w-24 bg-gradient-accent rounded-full"></div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                نحن نتميز في:
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">هناجر ومستودعات – مظلات – سواتر – بديل الشيبورد – تكسيات – أبواب بديل الخشب – ساندوتش بانل – والمقاولات العامة</strong>.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  نقدم لك حلولاً متكاملة في تنفيذ المشاريع السكنية والتجارية والصناعية، باستخدام خامات عالية الجودة، وأحدث التقنيات في التصميم والتركيب.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  نضمن لك التنفيذ المتقن، السرعة في الإنجاز، والأسعار التنافسية.
                </p>
              </div>
            </div>

            {/* قائمة الخدمات */}
            <Card className="p-4 md:p-6 bg-muted/50 border-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-sm md:text-base text-foreground font-semibold leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* زر الطلب */}
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
              اطلب الآن
            </Button>
          </div>

          {/* الصور - معدلة لتكون متناسقة تماماً */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 animate-fade-in order-1 lg:order-2">
            
            {/* الصف الأول */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {/* الصورة 1 */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-100">
                  <img 
                    src="/DetailedServices/1.webp" 
                    alt="خدمات البناء"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-xl md:rounded-2xl"></div>
              </div>

              {/* الصورة 3 */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-100">
                  <img 
                    src="/DetailedServices/3.webp" 
                    alt="مظلات"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-xl md:rounded-2xl"></div>
              </div>
            </div>

            {/* الصف الثاني */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {/* الصورة 2 */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-100">
                  <img 
                    src="/DetailedServices/2.webp" 
                    alt="هناجر"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-xl md:rounded-2xl"></div>
              </div>

              {/* الصورة 4 */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-100">
                  <img 
                    src="/DetailedServices/4.webp" 
                    alt="تكسيات"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-xl md:rounded-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};