import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const DoorsPage = () => {
  const doorMaterials = [
    {
      title: "تلبيس بورق PVC",
      description: "تكلفة منخفضة، مقاومة للرطوبة، سهولة التنظيف والصيانة"
    },
    {
      title: "القشرة الخشبية (Veneer)",
      description: "مظهر طبيعي وفاخر، متانة جيدة مع تكلفة أقل من الخشب الكامل"
    },
    {
      title: "ألواح MDF أو HDF",
      description: "إمكانية تصميم أشكال ونقوش متنوعة بتكلفة مناسبة"
    },
    {
      title: "الدهان والطلاء الفني",
      description: "تخصيص التصميم بالكامل، تحديث مظهر الباب بشكل جذاب"
    }
  ];

  const installSteps = [
    {
      step: "1. فحص الباب الحالي",
      description: "لتحديد الحالة ونوع المادة المناسبة للتلبيس"
    },
    {
      step: "2. اختيار التصميم واللون",
      description: "بالتنسيق مع العميل لاختيار الأنسب لمظهر الباب"
    },
    {
      step: "3. تجهيز السطح",
      description: "يتم تنظيف وتجهيز الباب لإزالة العيوب قبل التلبيس"
    },
    {
      step: "4. تركيب طبقة بديل الخشب",
      description: "تثبيت الطبقة الخارجية باستخدام مواد لاصقة ومثبتات متينة"
    },
    {
      step: "5. التشطيبات النهائية",
      description: "يتم فحص العمل وتلميع الباب ليبدو كأنه جديد"
    }
  ];

  const tips = [
    "التأكد من تنظيف وتجهيز سطح الباب جيدًا قبل التلبيس لضمان التصاق المواد",
    "اختيار المواد المناسبة لنوعية الباب والاستخدام المتوقع",
    "الاستعانة بمتخصصين لضمان جودة التركيب",
    "مراعاة التصميم العام للمنزل لاختيار لون ونمط التلبيس المناسب"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-700">
              تلبيس أبواب بديل الخشب في الرياض
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              اجعل باب منزلك عامرًا بالفن والأناقة
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              يُعتبر تلبيس الأبواب بديل الخشب في الرياض من الحلول المثالية لمن يرغب في الحصول على مظهر فاخر للأبواب مع متانة عالية وأسعار مناسبة
            </p>
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-muted/30 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              ما هو تلبيس الأبواب بديل الخشب؟
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              تلبيس الأبواب بديل الخشب هو تقنية يتم من خلالها تغطية الأبواب بطبقة خارجية تشبه الخشب الطبيعي في الشكل والملمس، لكنها تتميز بخصائص إضافية مثل مقاومة الرطوبة، التحمل لفترات طويلة، وسهولة الصيانة. هذا يجعلها الخيار الأمثل لمن يبحث عن تجديد الأبواب بدون الحاجة لاستبدالها بالكامل.
            </p>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                مميزات تلبيس الأبواب بديل الخشب
              </h2>
              <div className="h-1 w-24 bg-gradient-accent rounded-full"></div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">جمال وأناقة مميزة: يمنح الباب مظهرًا طبيعيًا وفخمًا يضفي على منزلك رونقًا خاصًا</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">مقاومة العوامل الجوية: لا تتأثر بالرطوبة أو التغيرات المناخية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">سهولة الصيانة والتنظيف: يمكن تنظيفها بسهولة دون الحاجة لاستخدام مواد خاصة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">تكلفة أقل من الخشب الطبيعي: توفر بديلًا اقتصاديًا دون التضحية بالجودة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">تنوع في التصاميم والألوان: تناسب جميع الأذواق والديكورات</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600" 
                alt="تلبيس أبواب بديل الخشب"
                className="rounded-lg shadow-lg hover-lift h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600" 
                alt="أبواب عصرية"
                className="rounded-lg shadow-lg hover-lift h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              طرق تلبيس أبواب الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              دليل شامل لتجديد أبواب منزلك بأحدث التقنيات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {doorMaterials.map((material, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {material.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {material.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200" 
              alt="تلبيس أبواب احترافي" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              كيف تتم عملية تلبيس الأبواب؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {installSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {step.step}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              لماذا تختار تلبيس الأبواب بديل الخشب معنا؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <p className="text-lg md:text-xl text-foreground text-center mb-8 font-bold">
              نحن نؤمن بأن تلبيس الأبواب هو فن ونحن للفن صانعون
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              لذا نلتزم بأعلى معايير الجودة في اختيار المواد وتنفيذ الأعمال بدقة متناهية. كما نوفر خدمة تركيب متكاملة تلبي جميع احتياجات العملاء في الرياض، مع ضمان الالتزام بالمواعيد والأسعار التنافسية.
            </p>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              نصائح عند تلبيس أبواب الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              خاتمة
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              تلبيس الأبواب بديل الخشب في الرياض هو خيار ذكي لمن يريد دمج الفن والأناقة مع متانة عملية. لا تدع أبواب منزلك القديمة تفسد مظهره، بل قم بتجديدها بأسلوب فني يعكس ذوقك الرفيع. تواصل معنا اليوم لتحصل على أفضل خدمات تلبيس الأبواب بأحدث التصاميم وبأسعار تنافسية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="default" className="text-lg px-8 py-6 gap-2 font-bold" asChild>
                <a href="tel:0552132619">
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2 font-bold border-2" asChild>
                <a href="https://wa.me/966552132619" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  واتس آب
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-hero border-2 border-primary">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-primary-foreground">
                احصل على عرض سعر مجاني
              </h3>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 gap-2 font-bold" asChild>
                  <a href="tel:0552132619">
                    <Phone className="w-5 h-5" />
                    اتصل الآن
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2 font-bold bg-background/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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

export default DoorsPage;
