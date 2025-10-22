import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const LaserShuttersPage = () => {
  const services = [
    {
      title: "ساتر ليزر حديد",
      description: "مصنوع من الحديد المقصوص بالليزر بدقة عالية، يتيح تصاميم فنية مميزة مع متانة استثنائية",
    },
    {
      title: "ساتر ليزر ألمنيوم",
      description: "خفيف الوزن وأنيق المظهر، يناسب المباني الحديثة والواجهات ذات الطابع العصري",
    },
    {
      title: "ساتر ليزر جداري",
      description: "يُركب على الأسوار والجدران لزيادة الخصوصية وتحسين المظهر الجمالي",
    },
    {
      title: "ساتر ليزر خارجي",
      description: "مناسب للفلل والاستراحات والأسوار الخارجية لحماية إضافية",
    },
    {
      title: "ساتر ليزر زخرفي",
      description: "تصميمات فنية مخصصة تضيف لمسة فنية مميزة للمباني والواجهات",
    },
    {
      title: "ساتر ليزر مودرن",
      description: "تصاميم عصرية تتماشى مع أحدث صيحات الديكور والتصميم المعماري",
    },
  ];

  const detailedServices = [
    {
      title: "ساتر ليزر حديد",
      description: "نوفر سواتر ليزر حديدية مصنوعة بدقة عالية باستخدام تقنية القص بالليزر، مما يضمن تصاميم فنية مميزة مع متانة استثنائية تتحمل الظروف الجوية المختلفة.",
    },
    {
      title: "ساتر ليزر ألمنيوم",
      description: "سواتر الألمنيوم خفيفة الوزن وتتميز بمقاومة عالية للصدأ، مما يجعلها مثالية للمباني الحديثة والواجهات المعاصرة التي تتطلب أناقة وديمومة.",
    },
    {
      title: "ساتر ليزر جداري",
      description: "نصمم سواتر جدارية تلائم الأسوار والجدران لتعزيز الخصوصية مع الحفاظ على التهوية والإضاءة الطبيعية، بإمكانيات تخصيص لا محدودة.",
    },
    {
      title: "ساتر ليزر خارجي",
      description: "سواتر خارجية مصممة خصيصًا للفلل والاستراحات، توفر حماية متكاملة مع إضافة لمسة جمالية فاخرة للواجهات الخارجية.",
    },
    {
      title: "ساتر ليزر زخرفي",
      description: "نقدم تصاميم زخرفية فنية مخصصة تنقل الواجهات إلى مستوى جديد من الفخامة والتميز، باستخدام تقنيات القص الدقيق بالليزر.",
    },
    {
      title: "ساتر ليزر مودرن",
      description: "تصاميم عصرية تتماشى مع أحدث الاتجاهات في العمارة والديكور، تجمع بين الجمال والوظيفية في تناغم مثالي.",
    },
  ];

  const features = [
    {
      title: "تصاميم حديثة وفنية",
      description: "نقدم تصاميم عصرية تضيف لمسة فخمة للمكان وتتناسب مع مختلف الأذواق"
    },
    {
      title: "خصوصية عالية",
      description: "تحقيق الخصوصية المطلوبة دون التأثير على التهوية أو الإضاءة الطبيعية"
    },
    {
      title: "متانة وجودة عالية",
      description: "مواد مقاومة للعوامل الجوية تضمن عمرًا افتراضيًا طويلاً"
    },
    {
      title: "إمكانية التخصيص",
      description: "تصميمات مخصصة حسب الطلب من حيث الشكل واللون والحجم"
    },
    {
      title: "تنفيذ سريع ودقيق",
      description: "فريق متخصص يستخدم أحدث تقنيات القص بالليزر لضمان الدقة"
    },
    {
      title: "دمج مع الإنارة",
      description: "إمكانية دمج السواتر مع أنظمة الإضاءة الجانبية لإضفاء لمسة سحرية"
    }
  ];

  const installationSteps = [
    {
      step: "1",
      title: "المعاينة والقياس",
      description: "تحديد موقع التركيب وقياس المساحة بدقة لضمان التصميم الأمثل"
    },
    {
      step: "2",
      title: "اختيار التصميم المناسب",
      description: "عرض مجموعة من التصاميم المتنوعة لاختيار الشكل واللون المناسب"
    },
    {
      step: "3",
      title: "قص الليزر والتصنيع",
      description: "استخدام أجهزة ليزر عالية الدقة لقص الحديد أو الألمنيوم بدقة متناهية"
    },
    {
      step: "4",
      title: "التركيب الميداني",
      description: "تركيب الساتر بواسطة فريق متخصص مع تثبيت آمن ومحكم"
    },
    {
      step: "5",
      title: "الفحص والتشطيب النهائي",
      description: "مراجعة العمل بالكامل للتأكد من الجودة والتوازن الجمالي"
    }
  ];

  const faqs = [
    {
      question: "هل سواتر الليزر مقاومة للصدأ؟",
      answer: "نعم، تُصنع من مواد مطلية ومقاومة للصدأ والرطوبة لضمان عمر طويل ومتانة عالية في وجه الظروف الجوية المختلفة.",
    },
    {
      question: "هل يمكن تصميم الساتر حسب طلبي؟",
      answer: "بالتأكيد، يمكننا تنفيذ أي تصميم ترغبه باستخدام تقنيات القص بالليزر الدقيقة، سواء كان تصميمًا هندسيًا أو زخرفيًا أو عربيًا.",
    },
    {
      question: "هل سواتر الليزر مناسبة للفلل والمنازل؟",
      answer: "نعم، تُعد الخيار الأمثل لإضافة فخامة وخصوصية للواجهات والأسوار، كما يمكن تخصيصها لتناسب التصميم المعماري للمبنى.",
    },
    {
      question: "كم تستغرق مدة التركيب؟",
      answer: "تستغرق عملية التصنيع والتركيب عادة من 2 إلى 5 أيام حسب حجم المشروع وتعقيد التصميم المطلوب.",
    },
    {
      question: "ما هي الخامات المستخدمة في سواتر الليزر؟",
      answer: "نستخدم خامات عالية الجودة مثل الحديد المجلفن والألمنيوم المعالج، مع تشطيبات مقاومة للعوامل الجوية تضمن متانة طويلة الأمد.",
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
              ساتر ليزر الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              أفضل أنواع سواتر الليزر الحديثة والعصرية لحماية الخصوصية وإضافة لمسة فخمة للمباني
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              تُعد <strong>سواتر الليزر في الرياض</strong> من أحدث وأجمل الحلول العصرية لتغطية الأسوار والمباني والفيلات، حيث تجمع بين <strong>الجمال والخصوصية</strong> والتصميم الحديث باستخدام تقنيات قص الليزر الدقيقة.
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/LaserShutters/1.webp" 
              alt="سواتر ليزر حديثة وعصرية" 
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
              أنواع سواتر الليزر
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
              سواتر ليزر في الرياض
            </h2>
            <p className="text-lg text-white/90 text-center leading-relaxed mb-8">
              خدمات السواتر الحديثة - نقدم جميع أنواع <strong>سواتر الليزر</strong> بأشكال هندسية وتصاميم فنية مميزة تناسب مختلف الأذواق
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              نقدم في شركتنا أحدث تصاميم سواتر الليزر التي تجمع بين الجمال والوظيفية، باستخدام تقنيات القص بالليزر الدقيقة التي تتيح تنفيذ تصاميم معقدة وأنيقة. سواء كنت تبحث عن حلول للخصوصية أو إضافة لمسة جمالية لمبناك، فإن سواتر الليزر توفر الحل الأمثل.
            </p>
          </Card>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خدماتنا في تركيب سواتر الليزر
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
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مميزات سواتر الليزر بالرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خطوات تركيب ساتر الليزر
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {installationSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Image */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/LaserShutters/2.webp" 
                  alt="تركيب سواتر ليزر احترافية" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              لماذا تختار شركتنا لتركيب سواتر الليزر؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">خبرة طويلة في تركيب كافة أنواع سواتر الليزر</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">استخدام خامات عالية الجودة بتقنيات حديثة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">تنفيذ دقيق وتصاميم فنية عصرية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">أسعار تنافسية مع ضمان على العمل</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">سرعة في الإنجاز والتزام بالمواعيد</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">فريق عمل محترف متخصص في التنفيذ والالتزام بالمواعيد</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              الأسئلة الشائعة
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
              توفر <strong>سواتر الليزر بالرياض</strong> حلاً يجمع بين الجمال والخصوصية والصلابة، فهي الخيار الأمثل لتزيين واجهات الفلل والمنازل والمباني التجارية.
              سواء كنت تبحث عن <strong>ساتر ليزر حديدي، ألمنيوم، أو زخرفي</strong>، فإننا نقدم لك <strong>أفضل الجودة العالية</strong> مع خدمة تركيب احترافية وسريعة.
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

export default LaserShuttersPage;