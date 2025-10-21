import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const FencingPage = () => {
  const services = [
    {
      title: "تحويش الشينكو",
      description: "تركيب سياج شينكو متين وقوي ضد العوامل المناخية مع تغطية بصرية كاملة",
    },
    {
      title: "تحويش الشبك الحديدي",
      description: "سياج حديدي مقاوم للصدأ مع رؤية مفتوحة، مثالي للمزارع والأراضي الواسعة",
    },
    {
      title: "تحويش الخشب",
      description: "أسوار خشبية جمالية تناسب الأراضي السكنية مع عزل للحرارة والرطوبة",
    },
    {
      title: "الترسيم القانوني",
      description: "مساعدة في إصدار رخصة التسوير الإلكترونية عبر منصة بلدي",
    },
    {
      title: "حماية من التعدي",
      description: "منع دخول الغرباء والتعدي على الملكية بتسوير احترافي",
    },
    {
      title: "تنظيم مواقع البناء",
      description: "تحضير وتنظيم الموقع قبل أي أعمال إنشائية بتسوير محكم",
    },
  ];

  const materials = [
    {
      title: "الشينكو",
      description: "يُعد من أكثر المواد استخدامًا في تسوير الأراضي في الرياض. متين وقوي ضد العوامل المناخية ويوفر تغطية بصرية كاملة. مناسب للمشاريع الكبيرة أو المناطق الخاصة.",
    },
    {
      title: "الشبك الحديدي",
      description: "يُفضل غالبًا للمزارع أو الأراضي الواسعة. يمنح رؤية مفتوحة لما بداخل الأرض ومقاوم للصدأ عند طلائه جيدًا. يمكن تعديله بسهولة في المستقبل.",
    },
    {
      title: "الخشب",
      description: "مناسب للأراضي السكنية والمناطق التي تهتم بالمظهر الجمالي. يُضفي لمسة جمالية ويفضل استخدامه مع دهانات عازلة للحرارة والرطوبة.",
    },
  ];

  const importanceList = [
    "الحماية من التعدي: يُمنع دخول الغرباء أو التعدي على الملكية",
    "الترسيم القانوني: يُعد بمثابة توثيق حدود الأرض",
    "التنظيم العمراني: يُستخدم في إصدار رخص البناء أو التطوير",
    "الاستعداد للمشاريع: يساعد في تنظيم الموقع قبل أي أعمال إنشائية",
  ];

  const priceTable = [
    { type: "شينكو", price: "90 - 130 ريال", description: "متين وقوي ضد العوامل المناخية، تغطية بصرية كاملة" },
    { type: "شبك حديدي", price: "60 - 100 ريال", description: "مقاوم للصدأ، رؤية مفتوحة، مناسب للمزارع" },
    { type: "خشب", price: "100 - 160 ريال", description: "مظهر جمالي، لمسة أنيقة، عزل حراري" },
  ];

  const faqs = [
    {
      question: "ما هو أفضل نوع سياج لحماية الأرض؟",
      answer: "يعتمد ذلك على موقع الأرض وطبيعة استخدامها؛ الشينكو مثالي للأمان الكامل، بينما الشبك الحديدي يفضل للأراضي الزراعية.",
    },
    {
      question: "هل تحويش الأرض يتطلب تصريحًا؟",
      answer: "نعم، ويتوفر إلكترونيًا من خلال منصة بلدي.",
    },
    {
      question: "كم تستغرق عملية التحويش؟",
      answer: "تختلف حسب مساحة الأرض ونوع المادة، لكنها عادةً تستغرق من يوم إلى عدة أيام.",
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
              تحويش أراضي الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              حماية وترسيم بأعلى جودة
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              تحويش أراضي الرياض هو الخطوة الأولى التي تضمن حماية الملكيات، سواء كانت أراضي فضاء، زراعية، أو مواقع بناء. من خلال تسوير الأرض بالشبك أو الشينكو أو حتى الخشب، يتم ترسيم الحدود بوضوح.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/fencing/1.webp" 
              alt="تحويش أراضي الرياض - تسوير احترافي" 
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
              خدمات تحويش الأراضي
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
              ما هو تحويش الأراضي بالضبط؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              تحويش الأرض يعني بناء سياج حول قطعة أرض باستخدام مواد مثل الشينكو أو الشبك الحديدي أو الخشب، بهدف حمايتها من التعدي، وتحديد نطاقها. ويُستخدم هذا النوع من الحماية بشكل واسع في الأراضي غير المبنية، والأراضي الزراعية، وحتى المشاريع التجارية والمنشآت.
            </p>
          </Card>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              المواد المستخدمة في تحويش الأراضي
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {materials.map((material, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {index + 1}. {material.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {material.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/fencing/2.webp" 
                  alt="أسوار شينكو مقاومة للعوامل الجوية" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أهمية تحويش الأراضي
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                {importanceList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* License Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              كيفية إصدار رخصة التسوير
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-12 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
              من خلال منصة بلدي الإلكترونية يمكن بكل سهولة:
            </p>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>الدخول إلى المنصة</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>التوجه إلى خدمة "رخصة تسوير أراضي فضاء"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>إدخال بيانات الموقع والمخطط</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>رفع المستندات المطلوبة</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>تصدر الرخصة إلكترونيًا خلال وقت قصير</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسعار تحويش الأراضي في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">نوع التحويش</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السعر للمتر الطولي</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">المواصفات</th>
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
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسئلة شائعة عن تحويش الأراضي
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              خاتمة
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              إذا كنت تمتلك أرضًا في الرياض، فإن تحويش الأرض هو أولى خطوات الحماية القانونية والعمرانية. سواء اخترت الشينكو، الشبك، أو الخشب، فالمهم أن يكون العمل محترفًا ومتقنًا. لا تتردد في طلب رخصة تسوير عبر منصة بلدي، واختر شركة موثوقة لضمان تنفيذ سياج يدوم طويلًا ويعكس ذوقك وأمانك.
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

export default FencingPage;