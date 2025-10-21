import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const DoorsPage = () => {
  const services = [
    {
      title: "تلبيس الأبواب بورق PVC",
      description: "تغطية الأبواب بطبقة رقيقة من الورق المقاوم للرطوبة بمظهر خشبي طبيعي",
    },
    {
      title: "تلبيس الأبواب بالقشرة الخشبية",
      description: "استخدام شرائح رقيقة من الخشب الطبيعي لإعطاء مظهر فاخر ومتين",
    },
    {
      title: "تلبيس الأبواب بألواح MDF",
      description: "تركيب ألواح MDF بتصاميم ونقوش متنوعة تناسب جميع الأذواق",
    },
    {
      title: "الدهان والطلاء الفني",
      description: "إعادة طلاء الأبواب بألوان وأشكال فنية مع تقنيات الرسم والتزيين",
    },
    {
      title: "الاستيكرات الخشبية",
      description: "تركيب ملصقات خشبية سريعة واقتصادية بمظهر أنيق وجذاب",
    },
    {
      title: "استشارات التصميم",
      description: "مساعدة في اختيار التصميم واللون المناسب للديكور العام",
    },
  ];

  const methods = [
    {
      title: "تلبيس الأبواب بورق بديل الخشب (PVC)",
      description: "يُعد ورق الـ PVC من أكثر الطرق شيوعًا في تلبيس الأبواب، حيث يتم تغطية الباب بطبقة رقيقة من هذا الورق الذي يشبه الخشب في المظهر. يتميز بتكلفة منخفضة، مقاومة للرطوبة، وسهولة التنظيف والصيانة.",
    },
    {
      title: "تلبيس الأبواب بالقشرة الخشبية (Veneer)",
      description: "تستخدم شرائح رقيقة من الخشب الطبيعي تُسمى 'القشرة' لتغليف الباب بالكامل، مما يعطي مظهر الخشب الطبيعي مع تكلفة أقل من الخشب الكامل. تتميز بمظهر طبيعي وفاخر ومتانة جيدة.",
    },
    {
      title: "تلبيس الأبواب بألواح الخشب (MDF أو HDF)",
      description: "تُستخدم ألواح MDF أو HDF كطبقة تغطية للأبواب، حيث يتم تصنيع هذه الألواح بمختلف التصاميم، مثل النقشات أو الخطوط، ثم تلصق على الباب. تتميز بإمكانية تصميم أشكال ونقوش متنوعة وتكلفة مناسبة.",
    },
    {
      title: "تلبيس الأبواب بالدهان والطلاء الفني",
      description: "في هذه الطريقة، يُعاد طلاء الباب بألوان وأشكال فنية، ويمكن استخدام تقنيات مختلفة مثل الرسم أو التزيين بالجبس والبانوهات لإعطاء شكل ديكوري مميز. تتميز بإمكانية تخصيص التصميم بالكامل وتحديث مظهر الباب بشكل جذاب.",
    },
    {
      title: "تلبيس الأبواب بالاستيكرات والملصقات الخشبية",
      description: "هذه طريقة سريعة واقتصادية، حيث تُلصق على سطح الباب ملصقات خشبية أو ذات مظهر خشبي، متوفرة بأنماط وألوان مختلفة. تتميز بسرعة التركيب وتكلفة منخفضة.",
    },
  ];

  const features = [
    "جمال وأناقة مميزة: يمنح الباب مظهرًا طبيعيًا وفخمًا يضفي على منزلك رونقًا خاصًا",
    "مقاومة العوامل الجوية: لا تتأثر بالرطوبة أو التغيرات المناخية التي قد تضر الأبواب الخشبية التقليدية",
    "سهولة الصيانة والتنظيف: يمكن تنظيفها بسهولة دون الحاجة لاستخدام مواد خاصة",
    "تكلفة أقل من الخشب الطبيعي: توفر بديلًا اقتصاديًا دون التضحية بالجودة",
    "تنوع في التصاميم والألوان: تناسب جميع الأذواق والديكورات الداخلية والخارجية",
  ];

  const processSteps = [
    "فحص الباب الحالي: لتحديد الحالة ونوع المادة المناسبة للتلبيس",
    "اختيار التصميم واللون: بالتنسيق مع العميل لاختيار الأنسب لمظهر الباب",
    "تجهيز السطح: يتم تنظيف وتجهيز الباب لإزالة العيوب قبل التلبيس",
    "تركيب طبقة بديل الخشب: تثبيت الطبقة الخارجية باستخدام مواد لاصقة ومثبتات متينة",
    "التشطيبات النهائية: يتم فحص العمل وتلميع الباب ليبدو كأنه جديد",
  ];

  const tips = [
    "التأكد من تنظيف وتجهيز سطح الباب جيدًا قبل التلبيس لضمان التصاق المواد",
    "اختيار المواد المناسبة لنوعية الباب والاستخدام المتوقع",
    "الاستعانة بمتخصصين لضمان جودة التركيب",
    "مراعاة التصميم العام للمنزل لاختيار لون ونمط التلبيس المناسب",
  ];

  const faqs = [
    {
      question: "ما هو أفضل نوع تلبيس للأبواب الخارجية؟",
      answer: "للباب الخارجي ننصح باستخدام القشرة الخشبية أو ألواح MDF المقاومة للعوامل الجوية.",
    },
    {
      question: "كم تستغرق عملية تلبيس الباب الواحد؟",
      answer: "تستغرق عملية تلبيس الباب الواحد من 2 إلى 6 ساعات حسب نوع التلبيس وتعقيد التصميم.",
    },
    {
      question: "هل يمكن تلبيس الأبواب القديمة والمتهالكة؟",
      answer: "نعم، يمكننا تجديد الأبواب القديمة وتحويلها إلى أبواب جديدة بمظهر فاخر.",
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
              تلبيس أبواب بديل الخشب في الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              اجعل باب منزلك عامرًا بالفن والأناقة
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              يُعتبر تلبيس الأبواب بديل الخشب في الرياض من الحلول المثالية لمن يرغب في الحصول على مظهر فاخر للأبواب مع متانة عالية وأسعار مناسبة.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/doors/1.webp" 
              alt="تلبيس أبواب بديل الخشب في الرياض" 
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
              خدمات تلبيس الأبواب
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

          {/* What is Door Cladding Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              ما هو تلبيس الأبواب بديل الخشب؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              تلبيس الأبواب بديل الخشب هو تقنية يتم من خلالها تغطية الأبواب بطبقة خارجية تشبه الخشب الطبيعي في الشكل والملمس، لكنها تتميز بخصائص إضافية مثل مقاومة الرطوبة، التحمل لفترات طويلة، وسهولة الصيانة. هذا يجعلها الخيار الأمثل لمن يبحث عن تجديد الأبواب بدون الحاجة لاستبدالها بالكامل.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مميزات تلبيس الأبواب بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              طرق تلبيس أبواب الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {methods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {index + 1}. {method.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/doors/2.webp" 
                  alt="تلبيس أبواب بديل الخشب بمظهر فاخر" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              كيف تتم عملية تلبيس الأبواب؟
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-12 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <ul className="space-y-4">
              {processSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              نصائح عند تلبيس أبواب الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-white">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              لماذا تختار تلبيس الأبواب بديل الخشب معنا؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
              نحن نؤمن بأن تلبيس الأبواب هو فن ونحن للفن صانعون، لذا نلتزم بأعلى معايير الجودة في اختيار المواد وتنفيذ الأعمال بدقة متناهية. كما نوفر خدمة تركيب متكاملة تلبي جميع احتياجات العملاء في الرياض، مع ضمان الالتزام بالمواعيد والأسعار التنافسية.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسئلة شائعة عن تلبيس الأبواب
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
              تلبيس الأبواب بديل الخشب في الرياض هو خيار ذكي لمن يريد دمج الفن والأناقة مع متانة عملية. لا تدع أبواب منزلك القديمة تفسد مظهره، بل قم بتجديدها بأسلوب فني يعكس ذوقك الرفيع. تواصل معنا اليوم لتحصل على أفضل خدمات تلبيس الأبواب بأحدث التصاميم وبأسعار تنافسية.
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

export default DoorsPage;