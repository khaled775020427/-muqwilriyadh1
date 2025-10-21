import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CladdingPage = () => {
  const services = [
    {
      title: "تكسيات الجدران الداخلية",
      description: "تغطية جدران الصالات وغرف المعيشة بمظهر خشبي دافئ وعصري",
    },
    {
      title: "واجهات المباني والفلل",
      description: "تكسيات خارجية تضفي مظهرًا فاخرًا مع مقاومة العوامل الجوية",
    },
    {
      title: "أسقف وجدران الحدائق",
      description: "تغطية أسقف الحدائق مع حماية من الشمس وتعزيز الجانب الجمالي",
    },
    {
      title: "تكسيات الأعمدة والأسوار",
      description: "تغطية الأعمدة الخرسانية بإضفاء مظهر خشبي جذاب",
    },
    {
      title: "ديكورات المحلات والمطاعم",
      description: "تصميم ديكورات داخلية وخارجية بطابع عصري وجذاب",
    },
    {
      title: "أرضيات خارجية",
      description: "تركيب أرضيات بديل الخشب للمسابح والشرفات الخارجية",
    },
  ];

  const features = [
    {
      title: "مقاومة العوامل الجوية",
      description: "لا يتأثر بالرطوبة أو الحرارة أو الأمطار"
    },
    {

      title: "مقاوم للحريق",
      description: "مناسب للواجهات الخارجية والأماكن العامة"
    },
    {
      
      title: "سهل التنظيف",
      description: "يمكن تنظيفه بالماء والصابون فقط"
    },
    {

      title: "سهل التركيب",
      description: "لا يحتاج إلى أعمال بناء معقدة"
    },
  ];

  const uses = [
    {

      title: "تكسيات الجدران الداخلية",
      description: "تغطية جدران الصالات، غرف المعيشة، وغرف النوم، حيث تضيف لمسة دافئة وعصرية مع سهولة الصيانة والتنظيف مقارنة بالخشب الطبيعي."
    },
    {

      title: "واجهات المباني والفلل",
      description: "تكسيات بديل الخشب الخارجية تضفي مظهرًا فاخرًا وأنيقًا على واجهات المنازل والعمائر، مع مقاومة عالية للعوامل الجوية."
    },
    {

      title: "أسقف وجدران الحدائق",
      description: "تُستخدم لتغطية الأسقف أو الجدران في الحدائق الخارجية، حيث توفر حماية من الشمس مع تعزيز الجانب الجمالي للحديقة."
    },
    {

      title: "تكسيات الأعمدة والأسوار",
      description: "تستخدم لتغطية الأعمدة الخرسانية أو المعدنية وإضفاء مظهر خشبي جذاب عليها، كما تُستخدم في تغطية الأسوار."
    },
    {

      title: "ديكورات المحلات التجارية والمطاعم",
      description: "تُستخدم في تصميم الديكورات الداخلية والخارجية للمحلات والمطاعم لإضفاء طابع عصري ومميز يجذب العملاء."
    },
    {

      title: "مرافق مائية ومسابح",
      description: "يُستخدم في المناطق المحيطة بالمسابح والمرافق المائية لأنه مقاوم للماء والرطوبة، ويوفر مظهرًا جماليًا."
    },
  ];

  const specifications = [
    { thickness: "10 مم", dimensions: "290×15 سم", price: "65 - 85 ريال" },
    { thickness: "15 مم", dimensions: "290×20 سم", price: "90 - 120 ريال" },
  ];

  const installationSteps = [
    {
      step: "1",
      title: "تحضير السطح",
      description: "تنظيف الجدران أو الأسطح المراد تركيب التكسيات عليها"
    },
    {
      step: "2",
      title: "تركيب الشاسيه",
      description: "تثبيت الهيكل الحديدي أو الخشبي لتثبيت الألواح عليه"
    },
    {
      step: "3",
      title: "تثبيت الألواح",
      description: "تركيب الألواح باستخدام كلبسات أو براغٍ مخصصة"
    },
    {
      step: "4",
      title: "معالجة الفواصل",
      description: "معالجة الفواصل والزوايا لضمان مظهر احترافي وعزل ممتاز"
    },
    {
      step: "5",
      title: "التشطيب النهائي",
      description: "تركيب الحواف وطبقة الحماية للتشطيب النهائي"
    },
  ];

  const additionalFeatures = [
    "تنوع الألوان والأشكال: متوفر بألوان وخامات مختلفة تشبه الخشب الطبيعي",
    "موفر اقتصاديًا: أقل تكلفة على المدى البعيد من الخشب الطبيعي",
    "عزل حراري وصوتي: يوفر عزلًا ممتازًا للحرارة والضوضاء",
    "صديق للبيئة: مصنوع من مواد معاد تدويرها",
    "مقاوم للحشرات: لا يجذب الحشرات أو يتعرض للتلف منها",
    "خالي من الصيانة: لا يحتاج إلى طلاء أو معالجة دورية",
  ];

  const faqs = [
    {
      question: "ما هو بديل الخشب (WPC)؟",
      answer: "بديل الخشب هو مادة مصنّعة تُعرف بـ الخشب البلاستيكي المركب (WPC – Wood Plastic Composite)، مكون من خليط من ألياف الخشب والبلاستيك المعاد تدويره، ويُستخدم في تغطية الجدران، الواجهات، الأسقف، وأحيانًا الأرضيات.",
    },
    {
      question: "ما الفرق بين بديل الخشب والـ PVC؟",
      answer: "بديل الخشب أكثر صلابة، مقاوم للخدش والعوامل الخارجية، بينما الـ PVC أنسب للأماكن الداخلية فقط.",
    },
    {
      question: "هل يتغير لون تكسيات بديل الخشب مع الشمس؟",
      answer: "الأنواع الجيدة مزودة بطبقة حماية UV تمنع تغير اللون لفترة طويلة.",
    },
    {
      question: "هل يمكن استخدامه للحمامات أو المطابخ؟",
      answer: "نعم، بشرط التهوية الجيدة واختيار نوع مقاوم للرطوبة.",
    },
    {
      question: "هل بديل الخشب ينفع خارجي؟",
      answer: "نعم، بديل الخشب (WPC) مصمم خصيصًا للاستخدام الخارجي. فهو مقاوم للرطوبة، التعفن، الحشرات، والتقلبات الجوية.",
    },
    {
      question: "ما هي بدائل الخشب للأرضيات؟",
      answer: "الألواح الخشبية المركبة (WPC)، الفينيل الفاخر (LVT)، الأرضيات البلاستيكية (PVC)، والأرضيات الحجرية أو السيراميك ذات التصميم الخشبي.",
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
              تكسيات بديل الخشب في الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              الحل العصري للجمال والمتانة
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              تكسيات بديل الخشب أصبحت اليوم من أكثر خيارات التصميم الداخلي والخارجي طلبًا، خاصة في الرياض والمناطق ذات الطقس المتقلب.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/cladding/1.webp" 
              alt="تكسيات بديل الخشب جدارية خارجية وداخلية" 
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
              خدمات تكسيات بديل الخشب
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

          {/* What is WPC Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              ما هو بديل الخشب (WPC)؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
              بديل الخشب هو مادة مصنّعة تُعرف بـ الخشب البلاستيكي المركب (WPC – Wood Plastic Composite)، مكون من خليط من ألياف الخشب والبلاستيك المعاد تدويره، ويُستخدم في تغطية الجدران، الواجهات، الأسقف، وأحيانًا الأرضيات.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
               مميزات تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/90">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">مميزات إضافية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                      <span className="text-white text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
               استخدامات تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uses.map((use, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {use.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {use.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/cladding/2.webp" 
                  alt="بديل الخشب تكسيات جداريه" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications & Prices */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
               المقاسات والأسعار
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b-2 border-white/30">
                    <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السماكة</th>
                    <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">الطول × العرض</th>
                    <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السعر التقريبي (ريال/متر)</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-white/20 hover:bg-white/10 transition-colors">
                      <td className="py-4 px-4 font-bold text-white">{spec.thickness}</td>
                      <td className="py-4 px-4 text-white/90">{spec.dimensions}</td>
                      <td className="py-4 px-4 text-accent font-semibold">{spec.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center text-white/80 text-sm">
              الأسعار تختلف حسب الشركة ونوع المادة وبلد المنشأ
            </div>
          </Card>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
               خطوات تركيب تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/90">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
               أسئلة شائعة
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
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 text-center">
              تكسيات بديل الخشب ليست فقط خيارًا جماليًا، بل هي استثمار ذكي في ديكور منزلك أو مشروعك التجاري. بفضل متانتها ومظهرها الفاخر، أصبحت خيارًا مفضلاً للمصممين والمهندسين في المملكة.
            </p>
            <div className="text-center mb-6">
              <p className="text-white text-lg font-semibold">
                 هل ترغب في معرفة أفضل أنواع بديل الخشب المتوفرة في الرياض؟ أو ترغب في تركيب احترافي مع ضمان؟
              </p>
             
            </div>
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

export default CladdingPage;