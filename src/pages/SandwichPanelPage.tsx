import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const SandwichPanelPage = () => {
  const priceTable = [
    { type: "ساندوتش بانل للجدران", price: "100 - 130 ريال", description: "عزل حراري وصوتي للجدران الخارجية والداخلية" },
    { type: "ساندوتش بانل للأسقف", price: "120 - 150 ريال", description: "حماية فائقة من الحرارة والرطوبة للأسقف" },
    { type: "ساندوتش بانل عازل حراري فاخر", price: "160 - 200 ريال", description: "جودة عالية مع عزل متقدم للمشاريع الكبيرة" },
  ];

  const components = [
    {
      title: "الطبقة الخارجية",
      description: "صاج مجلفن مقاوم للصدأ أو ألمنيوم مزود بطبقة حماية",
    },
    {
      title: "الطبقة الداخلية (العازل)",
      description: "EPS أو PU أو Rock Wool لعزل حراري وصوتي ممتاز",
    },
    {
      title: "الطبقة السفلى",
      description: "نفس خامة الطبقة الخارجية، معالجة لمقاومة التآكل",
    },
  ];

  const faqs = [
    {
      question: "ما هو سعر المتر المربع من ساندوتش بانل في الرياض؟",
      answer: "يتراوح السعر بين 100-200 ريال للمتر المربع حسب النوع والجودة والسمك",
    },
    {
      question: "ما هي مميزات الساندوتش بانل؟",
      answer: "عزل حراري وصوتي ممتاز، مقاومة للحرائق، تركيب سريع، متانة عالية، وتوفير في التكاليف",
    },
    {
      question: "ما هي عيوب الساندوتش بانل؟",
      answer: "الحاجة لصيانة دورية، العزل الصوتي أقل في الأنواع الرخيصة، وقد يتطلب تصريحاً بلدياً",
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
              ساندوتش بانل الرياض
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              أفضل حلول العزل والبناء بسعر المتر المثالي
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              الساندوتش بانل في الرياض هو الخيار الأول لكل من يبحث عن حل بناء ذكي، يوفر المتانة مع العزل الحراري والصوتي في آن واحد
            </p>
          </div>
        </div>
      </section>

      {/* What is Sandwich Panel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              ما هو الساندوتش بانل؟
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              تم تطوير ألواح الساندوتش بانل لتكون خفيفة الوزن، وسهلة النقل، وقوية التحمل، وتوفر عزلاً ممتازاً للحرارة والصوت. وقد أصبح استخدامها شائعاً في المملكة العربية السعودية، خاصة في المشاريع التي تتطلب تركيبًا سريعًا مع جودة عالية.
            </p>
          </Card>

          {/* Features */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              مميزات الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">عزل حراري وصوتي ممتاز</h3>
                  <p className="text-muted-foreground">حماية فائقة من الحرارة والضوضاء</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">مقاومة للحرائق</h3>
                  <p className="text-muted-foreground">في بعض الأنواع المتقدمة</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">تركيب سريع وسهل</h3>
                  <p className="text-muted-foreground">توفير الوقت والجهد في البناء</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">متانة عالية</h3>
                  <p className="text-muted-foreground">مقاومة للعوامل الجوية المختلفة</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">توفير في التكاليف</h3>
                  <p className="text-muted-foreground">بديل اقتصادي للبناء التقليدي</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">خفيف الوزن</h3>
                  <p className="text-muted-foreground">سهل النقل والتركيب</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              أسعار الساندوتش بانل في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up">
            <Card className="p-6 md:p-8">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">نوع الساندوتش بانل</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">السعر التقريبي للمتر المربع</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">الوصف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-4 font-bold text-foreground">{item.type}</td>
                        <td className="py-4 px-4 text-accent font-semibold">{item.price}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                ملحوظة: تختلف الأسعار حسب سمك اللوح (5-10-15 سم)، ونوع العازل، والمعادن المستخدمة، وطلاء الحماية الخارجي
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              مكونات الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {components.map((component, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {index + 1}. {component.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {component.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              استفسارات متكررة عن الساندوتش بانل
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
              إذا كنت تبحث عن أفضل حلول الساندوتش بانل في الرياض بأسعار مناسبة وجودة عالية، فلا تتردد في التواصل معنا. نحن نقدم استشارات مجانية وعروض أسعار تنافسية تلبي احتياجاتك.
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

export default SandwichPanelPage;
