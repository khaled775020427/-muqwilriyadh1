import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2, Shield, Sun, Eye, Home } from "lucide-react";

const ShuttersPage = () => {
  const services = [
    {
      title: "سواتر قماش",
      description: "تركيب سواتر قماش مقاومة للعوامل الجوية مع حماية من الشمس والرياح",
    },
    {
      title: "سواتر حديد",
      description: "سواتر حديدية قوية ومتينة توفر الأمان والخصوصية الكاملة",
    },
    {
      title: "سواتر بلاستيك",
      description: "سواتر بلاستيكية اقتصادية وخفيفة الوزن للاستخدامات المؤقتة",
    },
    {
      title: "سواتر خشب",
      description: "سواتر خشبية طبيعية تضفي جمالاً ودفيئاً على المكان",
    },
    {
      title: "سواتر متحركة",
      description: "سواتر قابلة للتحريك والتعديل حسب الحاجة والاستخدام",
    },
    {
      title: "سواتر أحواش",
      description: "تركيب سواتر متخصصة للأحواش والمساحات الخارجية",
    },
  ];

  const shutterTypes = [
    {
      title: "سواتر قماش",
      description: "تُستخدم سواتر القماش بشكل واسع في المناطق الخارجية، حيث تُركب لتحجب الرؤية وتوفر الحماية من أشعة الشمس الحارقة. تتميز بسهولة التركيب وقابلية النقل، كما أنها مصممة لتتحمل الظروف الجوية المتنوعة.",
      price: "80 - 200 ريال/م²"
    },
    {
      title: "سواتر حديد",
      description: "تُعرف سواتر الحديد بصلابتها ومتانتها العالية، وهي مثالية لتأمين الأحواش والمساحات الخارجية. يتم تركيبها بحيث تُمنح الأمان والخصوصية، بالإضافة إلى إمكانية تصميمها بأشكال جمالية تناسب مختلف الأذواق.",
      price: "150 - 300 ريال/م²"
    },
    {
      title: "سواتر بلاستيك",
      description: "تُعد السواتر البلاستيكية خيارًا اقتصاديًا وعمليًا، حيث تُستخدم لتقسيم المساحات أو توفير الحماية المؤقتة. كما تُعتبر خفيفة الوزن وسهلة التركيب، مما يجعلها مناسبة للاستخدامات المختلفة.",
      price: "50 - 120 ريال/م²"
    },
    {
      title: "سواتر خشب",
      description: "تُضفي سواتر الخشب مظهرًا دافئًا وطبيعيًا على المكان، وتُستخدم في المناطق الداخلية والخارجية. يتم تجهيزها بمعالجات مقاومة للرطوبة والحشرات لضمان دوامها لفترات طويلة.",
      price: "200 - 400 ريال/م²"
    },
  ];

  const features = [
    "توفر الخصوصية: تعمل السواتر كحاجز بصري يمنع الرؤية من الخارج",
    "الحماية من الشمس والرياح: تقلل من التأثيرات الضارة لأشعة الشمس والرياح القوية",
    "العزل الحراري: توفر بعض أنواع السواتر عزلًا يقلل من تأثير الحرارة على المكان",
    "المتانة: تقدم السواتر متانة عالية تناسب الاستخدامات المختلفة",
    "التصميم الجمالي: تتوفر السواتر بتشكيلات وألوان متعددة تناسب مختلف الأذواق",
    "سهولة التركيب: يمكن تركيب معظم أنواع السواتر بسرعة وسهولة",
  ];

  const uses = [
    {
      icon: Home,
      title: "حماية المنازل والفلل",
      description: "تُستخدم لتغطية الأسوار وتوفير الخصوصية والحماية من العوامل الجوية"
    },
    {
      icon: Sun,
      title: "تغطية المسابح",
      description: "تُركب لتوفير الظل والحماية، مما يجعل المسابح أكثر راحة"
    },
    {
      icon: Eye,
      title: "تغطية الحدائق",
      description: "توفر الخصوصية وتحمي من أشعة الشمس المباشرة والرياح"
    },
    {
      icon: Shield,
      title: "تغطية الشركات والمصانع",
      description: "تُركب لتوفير الخصوصية وحماية أماكن العمل الخارجية"
    },
  ];

  const selectionFactors = [
    "الميزانية: تختلف تكلفة السواتر حسب النوع والمواد المستخدمة",
    "المناخ المحلي: اختيار النوع المناسب للمناخ يحسن من عمر الساتر وأدائه",
    "الاستعمال المقصود: يجب اختيار الساتر بناءً على المكان والغرض من استخدامه",
    "المتانة: يُفضل اختيار الساتر الذي يوفر المتانة المطلوبة لفترة استخدام طويلة",
    "التصميم: تناسب التصميم مع ديكور المكان يضيف قيمة جمالية",
  ];

  const yardShutters = [
    "سواتر حديد: توفر أمانًا عاليًا وصلابة، وتُستخدم لحماية الأحواش بشكل قوي",
    "سواتر قماش: تُستخدم للحجب المؤقت وتوفير الظل، وهي خفيفة وسهلة التركيب",
    "سواتر خشب: تُضفي طابعًا طبيعيًا ودافئًا، ومناسبة للأماكن التي تحتاج لمظهر جمالي",
    "سواتر بلاستيك: خيار اقتصادي وخفيف، مناسب للاستخدام المؤقت أو تقسيم المساحات",
  ];

  const faqs = [
    {
      question: "ما هي أفضل أنواع السواتر للأماكن الخارجية؟",
      answer: "يُفضل استخدام سواتر الحديد أو القماش المقاوم للعوامل الجوية.",
    },
    {
      question: "هل يمكن تركيب سواتر بلاستيك داخل المنزل؟",
      answer: "نعم، لكن يُفضل استخدامها في تقسيم المساحات غير الرسمية أو المؤقتة.",
    },
    {
      question: "هل تتطلب السواتر الخشبية صيانة دورية؟",
      answer: "يُنصح بمعالجة الخشب ضد الرطوبة والفطريات لضمان دوام طويل.",
    },
    {
      question: "ما هي أرخص أنواع السواتر؟",
      answer: "أرخص أنواع السواتر غالبًا ما تكون السواتر البلاستيكية، تليها السواتر القماشية منخفضة الجودة.",
    },
    {
      question: "كيف يمكنني طلب تركيب سواتر في الرياض؟",
      answer: "يمكن التواصل مع شركات متخصصة توفر خدمات القياس، التصميم، والتركيب مع ضمان الجودة.",
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
              سواتر الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              تركيب سواتر قماش وحديد وبلاستيك وخشب بأعلى جودة
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              تُعتبر سواتر الرياض من أهم الحلول التي تُستخدم للحماية والخصوصية في المنازل والأحواش والمساحات الخارجية والداخلية.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/shutters/1.webp" 
              alt="سواتر أحواش وحماية خارجية" 
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
              خدمات السواتر المتخصصة
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

          {/* What are Shutters Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              ما هي السواتر؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
              كلمة "سواتر" في اللغة العربية تشير إلى الحواجز أو الستائر التي تُستخدم لتوفير الخصوصية، الحماية من الرياح أو الشمس، أو لتقسيم المساحات. تستخدم السواتر في البيوت، الحدائق، الأحواش، وحتى في المكاتب لتوفير حاجز مادي أو بصري حسب الحاجة.
            </p>
          </Card>
        </div>
      </section>

      {/* Shutter Types Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أنواع السواتر في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {shutterTypes.map((type, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                      {type.description}
                    </p>
                  </div>
                  <div className="bg-accent text-white px-4 py-2 rounded-lg text-lg font-bold min-w-[150px] text-center">
                    {type.price}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full aspect-video">
                <img 
                  src="/shutters/2.webp" 
                  alt="سواتر تركيب سواتر - أسعار سواتر الرياض" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مميزات السواتر
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

      {/* Uses Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              استخدامات السواتر
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uses.map((use, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <use.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {use.title}
                    </h3>
                    <p className="text-white/90">
                      {use.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yard Shutters Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أنواع سواتر الحوش
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <ul className="space-y-4">
              {yardShutters.map((shutter, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">{shutter}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Selection Factors Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              عوامل يجب مراعاتها عند اختيار السواتر
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                {selectionFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-white">{factor}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسئلة شائعة حول سواتر الرياض
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
              لقد تم تصميم خدمات سواتر الرياض لتلبية كافة الاحتياجات الخاصة بالحماية والخصوصية، سواء أكانت من خلال تركيب سواتر قماش، حديد، بلاستيك، أو خشب. إن اختيار النوع المناسب وتركيبه بشكل احترافي يُضمن الحصول على أفضل النتائج، مع تعزيز الجمال والعملية في المساحات المختلفة. لا تتردد في التواصل مع المختصين للحصول على استشارة مجانية وعرض سعر يتناسب مع متطلباتك.
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

export default ShuttersPage;