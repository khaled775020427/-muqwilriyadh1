import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const CanopiesPage = () => {
  const canopyTypes = [
    {
      title: "مظلات قماش",
      description: "خفيفة ومرنة بألوان متنوعة"
    },
    {
      title: "مظلات حديد",
      description: "قوية ومتينة للأماكن الكبيرة"
    },
    {
      title: "مظلات ألمنيوم",
      description: "عصرية ومقاومة للصدأ"
    },
    {
      title: "مظلات متحركة",
      description: "مرونة في الاستخدام"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black text-primary-foreground">
              مظلات سيارات
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              أفضل مظلات سيارات متحركة وحديد ومودرن بأسعار تنافسية - حماية سيارتك من الشمس والأمطار
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                مميزات المظلات
              </h2>
              <div className="h-1 w-24 bg-gradient-accent rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                مظلات السيارات توفر حماية فعالة لسيارتك مع لمسة جمالية للموقع:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">حماية من أشعة الشمس الحارقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">حماية من الأمطار والبرد</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">إطالة عمر طلاء السيارة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">تقليل درجة حرارة السيارة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">تصاميم عصرية وأنيقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">ضمان طويل على الخامات</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1582737064290-5e3c7e6d2969?q=80&w=600" 
                alt="مظلات"
                className="rounded-lg shadow-lg hover-lift h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600" 
                alt="مظلات سيارات"
                className="rounded-lg shadow-lg hover-lift h-64 object-cover mt-8"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">
              أنواع المظلات المتوفرة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {canopyTypes.map((type, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift border-2 hover:border-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-hero border-2 border-primary">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-primary-foreground">
                احصل على عرض سعر مجاني
              </h3>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 gap-2 font-bold"
                  asChild
                >
                  <a href="tel:0552132619">
                    <Phone className="w-5 h-5" />
                    اتصل الآن
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 gap-2 font-bold bg-background/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="https://wa.me/966552132619" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    واتس آب
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanopiesPage;
