import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const FencingPage = () => {
  const materials = [
    {
      title: "الشينكو",
      description: "متين وقوي ضد العوامل المناخية، يوفر تغطية بصرية كاملة، مناسب للمشاريع الكبيرة أو المناطق الخاصة",
    },
    {
      title: "الشبك الحديدي",
      description: "يمنح رؤية مفتوحة لما بداخل الأرض، مقاوم للصدأ عند طلائه جيدًا، يمكن تعديله بسهولة في المستقبل",
    },
    {
      title: "الخشب",
      description: "مناسب للأراضي السكنية والمناطق التي تهتم بالمظهر الجمالي، يُضفي لمسة جمالية، يفضل استخدامه مع دهانات عازلة",
    },
  ];

  const importance = [
    {
      title: "الحماية من التعدي",
      description: "يُمنع دخول الغرباء أو التعدي على الملكية",
    },
    {
      title: "الترسيم القانوني",
      description: "يُعد بمثابة توثيق حدود الأرض",
    },
    {
      title: "التنظيم العمراني",
      description: "يُستخدم في إصدار رخص البناء أو التطوير",
    },
    {
      title: "الاستعداد للمشاريع",
      description: "يساعد في تنظيم الموقع قبل أي أعمال إنشائية",
    },
  ];

  const faqs = [
    {
      question: "ما هو تحويش الأراضي بالضبط؟",
      answer: "تحويش الأرض يعني بناء سياج حول قطعة أرض باستخدام مواد مثل الشينكو أو الشبك الحديدي أو الخشب، بهدف حمايتها من التعدي وتحديد نطاقها",
    },
    {
      question: "كيف يتم إصدار رخصة تسوير الأرض في الرياض؟",
      answer: "من خلال منصة بلدي الإلكترونية يمكن بكل سهولة الدخول للمنصة، التوجه لخدمة رخصة تسوير أراضي فضاء، إدخال بيانات الموقع، رفع المستندات، وتصدر الرخصة إلكترونياً",
    },
    {
      question: "ما هي أفضل مادة لتحويش الأراضي؟",
      answer: "يعتمد على نوع الأرض والاستخدام. الشينكو مناسب للمشاريع الكبيرة، الشبك الحديدي للمزارع، والخشب للمناطق السكنية",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-700">
              تحويش أراضي الرياض
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              حماية وترسيم بأعلى جودة
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              تحويش أراضي الرياض هو الخطوة الأولى التي تضمن حماية الملكيات، سواء كانت أراضي فضاء، زراعية، أو مواقع بناء
            </p>
          </div>
        </div>
      </section>

      {/* What is Fencing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              ما هو تحويش الأراضي بالضبط؟
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              تحويش الأرض يعني بناء سياج حول قطعة أرض باستخدام مواد مثل الشينكو أو الشبك الحديدي أو الخشب، بهدف حمايتها من التعدي، وتحديد نطاقها. ويُستخدم هذا النوع من الحماية بشكل واسع في الأراضي غير المبنية، والأراضي الزراعية، وحتى المشاريع التجارية والمنشآت.
            </p>
          </Card>

          {/* Materials */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              المواد المستخدمة في تحويش الأراضي
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {materials.map((material, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {index + 1}. {material.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {material.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              أهمية تحويش الأراضي
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importance.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* License Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              كيف يتم إصدار رخصة تسوير الأرض في الرياض؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              من خلال منصة بلدي الإلكترونية يمكن بكل سهولة:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">الدخول إلى المنصة</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">التوجه إلى خدمة "رخصة تسوير أراضي فضاء"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">إدخال بيانات الموقع والمخطط</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">رفع المستندات المطلوبة</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">تصدر الرخصة إلكترونيًا خلال وقت قصير</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-6 text-center">
              هذه الخدمة تسهل على المواطنين والمستثمرين حماية أراضيهم دون الحاجة لمراجعة البلدية مباشرة
            </p>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              استفسارات متكررة عن تحويش الأراضي
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              خاتمة
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              إذا كنت تبحث عن خدمات تحويش وتسوير أراضي احترافية في الرياض، فلا تتردد في التواصل معنا. نحن نقدم حلولاً متكاملة بأسعار تنافسية وجودة عالية.
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
      <section className="py-20 bg-muted/30">
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

export default FencingPage;
