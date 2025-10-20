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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              تركيب مظلات وسواتر بالرياض
            </h2>
            
            <div className="h-1 w-24 bg-gradient-accent rounded-full"></div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                 نحن نتميز في:
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">هناجر ومستودعات – مظلات – سواتر – بديل الشيبورد – تكسيات – أبواب بديل الخشب – ساندوتش بانل – والمقاولات العامة</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقدم لك حلولاً متكاملة في تنفيذ المشاريع السكنية والتجارية والصناعية، باستخدام خامات عالية الجودة، وأحدث التقنيات في التصميم والتركيب. نضمن لك التنفيذ المتقن، السرعة في الإنجاز، والأسعار التنافسية.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                هل ترغب في تجديد منزلك باحدث الصيحات أو تبحث عن معلم دهانات  موثوق به وذو خبرة؟
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقدم لك مجموعة واسعة من خدمات الدهانات التي سوف تنال اعجابك باذن الله، كما نستخدم اجود انواع الدهانات من اشهر الماركات العالمية. نقدم لكم أيضا ضمان في العمل في الوقت المحدد وباعلى معايير الجودة
              </p>
            </div>

            <Card className="p-6 bg-muted/50 border-2">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground font-semibold">{service}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Button size="lg" className="text-lg px-8 py-6">
              اطلب الآن
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600" 
              alt="خدمات البناء"
              className="rounded-lg shadow-lg hover-lift h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600" 
              alt="هناجر"
              className="rounded-lg shadow-lg hover-lift h-64 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1582737064290-5e3c7e6d2969?q=80&w=600" 
              alt="مظلات"
              className="rounded-lg shadow-lg hover-lift h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600" 
              alt="تكسيات"
              className="rounded-lg shadow-lg hover-lift h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
