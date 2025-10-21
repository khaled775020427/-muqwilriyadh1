import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const WarehousesDetailPage = () => {
  const services = [
    {
      title: "هناجر حديد",
      description: "تصنيع وتركيب هياكل حديدية قوية ومتينة تتحمل كافة الظروف المناخية",
    },
    {
      title: "هناجر ساندوتش بانل",
      description: "حلول عزل حراري وصوتي مميزة تناسب المستودعات والمصانع",
    },
    {
      title: "هناجر شينكو",
      description: "هناجر اقتصادية وخفيفة الوزن مع متانة عالية، مثالية للمزارع والحظائر",
    },
    {
      title: "تركيب هناجر مزارع",
      description: "تصميم وتنفيذ هياكل مزارع متكاملة بأعلى المواصفات",
    },
    {
      title: "هناجر مستودعات",
      description: "تنظيم المساحات وتوفير بيئة تخزين آمنة وفعالة",
    },
    {
      title: "محطات بنزين",
      description: "تركيب هياكل معدنية توفر الحماية والسلامة مع تصميمات تراعي معايير البيئة",
    },
  ];

  const detailedServices = [
    {
      title: "هناجر حديد",
      description: "نوفر هناجر حديد قوية ومصممة بأحدث التقنيات لتحمل الظروف المناخية المختلفة مع ضمان الجودة والمتانة. تُستخدم هناجر الحديد للمصانع، التخزين، والمشاريع الكبيرة.",
    },
    {
      title: "هناجر شينكو",
      description: "هناجر شينكو تُعتبر من الحلول الاقتصادية والعملية، تتميز بالمتانة وخفة الوزن مع سرعة في التركيب. تُستخدم بشكل واسع في مزارع الدواجن والحظائر.",
    },
    {
      title: "ساندوتش بانل",
      description: "نقوم بتركيب هناجر ساندوتش بانل التي توفر عزلًا حراريًا وصوتيًا عالي الجودة، ما يجعلها مناسبة للمصانع ومحطات البنزين التي تتطلب حماية إضافية من الحرارة.",
    },
    {
      title: "حظائر ومزارع",
      description: "تصميم وتركيب حظائر مزارع متكاملة تُراعي متطلبات التهوية والمساحات المناسبة، مع استخدام أفضل المواد لضمان راحة الحيوانات وجودة الإنتاج.",
    },
    {
      title: "مصانع",
      description: "نقدم حلول هناجر مخصصة للمصانع بمواصفات عالية تناسب جميع أنواع الإنتاج الصناعي، مع إمكانية إضافة تجهيزات خاصة مثل عزل حراري وأنظمة تهوية.",
    },
    {
      title: "محطات بنزين",
      description: "تركيب هياكل معدنية هناجر خاصة لمحطات البنزين توفر الحماية والسلامة، مع تصميمات تراعي معايير البيئة والسلامة المهنية.",
    },
  ];

  const priceTable = [
    { type: "هناجر حديد", price: "200 - 350 ريال", description: "هياكل قوية ومتينة للمصانع والمستودعات، تتحمل الظروف القاسية" },
    { type: "هناجر شينكو", price: "150 - 250 ريال", description: "خفيفة الوزن، اقتصادية، مناسبة للمزارع والحظائر" },
    { type: "هناجر ساندوتش بانل", price: "300 - 450 ريال", description: "عزل حراري وصوتي عالي الجودة، مثالية للمستودعات والمصانع" },
    { type: "هناجر مزارع", price: "180 - 280 ريال", description: "تصميم خاص يناسب الحظائر والمزارع مع تهوية جيدة" },
    { type: "هناجر مستودعات", price: "220 - 400 ريال", description: "تنظيم المساحات مع عزل وتحمل عالٍ للوزن" },
  ];

  const faqs = [
    {
      question: "ما هو أفضل نوع هناجر للمزارع؟",
      answer: "هناجر شينكو تقدم توازنًا جيدًا بين المتانة والتكلفة",
    },
    {
      question: "هل يمكن تركيب ساندوتش بانل على الهناجر الحديدية؟",
      answer: "نعم، تركيب ساندوتش بانل يُعزز العزل الحراري والصوتي",
    },
    {
      question: "كم يستغرق تركيب هناجر حديد؟",
      answer: "يختلف حسب حجم المشروع، لكنه عادةً يتم خلال أسابيع قليلة",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-15 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary">
              شركة هناجر ومستودعات بالرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              تركيب جميع أنواع الهناجر بجودة عالية وأقل الأسعار
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              نحن في شركة هناجر ومستودعات بالرياض نقدم أفضل خدمات تركيب جميع أنواع الهناجر بأعلى جودة وأقل الأسعار، لتلبية احتياجاتك الصناعية والزراعية والتجارية
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder - محسنة */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/WarehousesDetail/1.webp" 
              alt="هناجر حديد مخازن مستودعات" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Card>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خدماتنا المتخصصة
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Company Info Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              شركة هناجر الرياض
            </h2>
            <p className="text-lg text-white/90 text-center leading-relaxed mb-8">
              تركيب هناجر حديد – شينكو – ساندوتش بانل – حظائر – مزارع – مصانع – محطات بنزين
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              تُعد شركة هناجر الرياض من الشركات الرائدة في مجال تصميم وتركيب الهناجر الحديدية والهياكل الصناعية المختلفة في الرياض والمنطقة الشرقية. نُقدم حلولًا متكاملة تناسب احتياجات العملاء، سواء كانت هناجر مصانع، مزارع، حظائر، محطات بنزين أو استخدامات أخرى.
            </p>
          </Card>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خدماتنا في تركيب الهناجر بالرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {detailedServices.map((service, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              لماذا تختار شركة هناجر الرياض؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">خبرة طويلة في مجال تصميم وتركيب الهناجر بأنواعها المختلفة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">استخدام مواد عالية الجودة تتناسب مع المناخ السعودي</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">أسعار تنافسية تناسب جميع الميزانيات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">فريق عمل محترف متخصص في التنفيذ والالتزام بالمواعيد</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">ضمان متكامل على جميع أعمال التركيب والصيانة</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسعار الهناجر وأنواعها في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">نوع الهنجر</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السعر التقريبي للمتر المربع</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">الوصف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((item, index) => (
                      <tr key={index} className="border-b border-white/20 hover:bg-white/10 transition-colors">
                        <td className="py-4 px-4 font-bold text-white">{item.type}</td>
                        <td className="py-4 px-4 text-accent font-semibold">{item.price}</td>
                        <td className="py-4 px-4 text-white/90">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Image Placeholder - محسنة */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/WarehousesDetail/2.webp" 
                  alt="شركة هناجر ومستودعات الرياض" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              استفسارات متكررة عن الهناجر في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              خاتمة
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              إذا كنت تبحث عن شركة موثوقة لتركيب هناجر حديد، شينكو، ساندوتش بانل، أو إنشاء حظائر ومزارع في الرياض، فإن شركة هناجر الرياض هي خيارك الأمثل. تواصل معنا الآن للحصول على استشارة مجانية وعرض أسعار مناسب يلبي احتياجاتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2 font-bold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="tel:0552132619">
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </Button>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/966552132619" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  واتس آب
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WarehousesDetailPage;