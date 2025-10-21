import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle} from "lucide-react";

const CanopiesPage = () => {
  const services = [
    {
      title: "مظلات سيارات حديد",
      description: "مظلات حديدية متينة تقاوم الظروف المناخية القاسية بجودة عالية",
    },
    {
      title: "مظلات سيارات متحركة",
      description: "مظلات تتيح سهولة التحكم في الظل مع آليات تشغيل يدوية أو كهربائية",
    },
    {
      title: "مظلات سيارات مودرن",
      description: "تصميمات عصرية تجمع بين الجمال والعملية باستخدام مواد خفيفة",
    },
    {
      title: "مظلات سيارات داخلية",
      description: "تركيب مظلات داخل الجراجات والمواقف المغلقة لحماية إضافية",
    },
    {
      title: "مظلات سيارات جاهزة",
      description: "مظلات بمقاسات وتصاميم جاهزة للتركيب الفوري والاستخدام السريع",
    },
    {
      title: "استخراج التصاريح",
      description: "خدمة استخراج تصاريح تركيب المظلات من أمانة منطقة الرياض",
    },
  ];

  const canopyTypes = [
    {
      title: "مظلات سيارات حديد",
      description: "تصنع هذه المظلات من الحديد عالي الجودة لضمان المتانة وطول العمر، كما تتميز بقدرتها على تحمل الظروف المناخية القاسية. تُستخدم في المنازل والفلل والمواقف التجارية.",
      price: "150 - 300 ريال/م²",
      features: ["متانة عالية", "تحمل الظروف القاسية", "مناسبة للمواقف التجارية"]
    },
    {
      title: "مظلات سيارات متحركة",
      description: "تتيح المظلات المتحركة سهولة التحكم في الظل وتوفير الحماية عند الحاجة فقط. تتميز بآلية تشغيل سهلة سواء كانت يدوية أو كهربائية.",
      price: "400 - 700 ريال/م²",
      features: ["مرونة في الاستخدام", "آلية تشغيل سهلة", "توفير المساحة"]
    },
    {
      title: "مظلات سيارات مودرن",
      description: "تصميمات عصرية تجمع بين الجمال والعملية، حيث تُستخدم مواد خفيفة مثل الألومنيوم مع أقمشة مقاومة للأشعة فوق البنفسجية، مما يضفي شكلاً أنيقًا وعصريًا.",
      price: "250 - 500 ريال/م²",
      features: ["تصميم عصري", "مواد خفيفة الوزن", "مقاومة للأشعة فوق البنفسجية"]
    },
  ];

  const priceTable = [
    { type: "مظلات سيارات حديد", price: "150 - 300 ريال/م²", description: "حسب سماكة الحديد والتشطيب" },
    { type: "مظلات سيارات متحركة", price: "400 - 700 ريال/م²", description: "تشمل آلية التشغيل" },
    { type: "مظلات سيارات مودرن", price: "250 - 500 ريال/م²", description: "حسب التصميم والخامات" },
    { type: "مظلات سيارات جاهزة", price: "1000 - 3000 ريال", description: "حسب الحجم والنوع" },
    { type: "مظلات سيارات داخلية", price: "200 - 400 ريال/م²", description: "تشمل التركيب في الجراجات" },
  ];

  const features = [
    "حماية كاملة من الشمس والأمطار باستخدام مواد عازلة عالية الجودة",
    "متانة وثبات في الظروف الجوية المتغيرة مثل الرياح والأمطار الغزيرة",
    "تصميم عملي يناسب المساحة المتاحة ويتيح سهولة الدخول والخروج",
    "صيانة منخفضة مع مواد مقاومة للأشعة فوق البنفسجية",
    "تركيب سريع ومتقن بواسطة فريق متخصص",
    "أسعار تنافسية مع ضمان الجودة والخدمة",
  ];

  const installationSteps = [
    {
      step: "1",
      title: "تحديد موقع التركيب وقياس المساحة",
      description: "اختيار المكان المناسب وإجراء قياسات دقيقة للطول والعرض والارتفاع"
    },
    {
      step: "2",
      title: "اختيار نوع المظلة والمواد",
      description: "الاتفاق على التصميم والشكل مع تحديد الألوان والتشطيبات"
    },
    {
      step: "3",
      title: "تحضير الموقع",
      description: "تنظيف الموقع وتجهيز الأرضية وحفر قواعد التثبيت"
    },
    {
      step: "4",
      title: "تركيب الأعمدة والدعامات",
      description: "تثبيت الأعمدة في القواعد باستخدام البراغي أو اللحام"
    },
    {
      step: "5",
      title: "تركيب السقف (الغطاء)",
      description: "تثبيت الغطاء المصنوع من الأقمشة المقاومة أو ساندوتش بانل"
    },
    {
      step: "6",
      title: "التشطيبات وفحص السلامة",
      description: "فحص نقاط التثبيت وطلاء الأعمدة واختبار آلية التشغيل"
    },
  ];

  const bestCanopyFeatures = [
    {
      title: "حماية شاملة",
      description: "حماية كاملة من الشمس والأمطار باستخدام مواد عازلة عالية الجودة"
    },
    {
      
      title: "متانة عالية",
      description: "ثبات في الظروف الجوية المتغيرة مثل الرياح والأمطار الغزيرة"
    },
    {
      title: "تصميم عملي",
      description: "تصميم يناسب المساحة المتاحة ويتيح سهولة الدخول والخروج"
    },
    {
      title: "صيانة منخفضة",
      description: "مواد مقاومة تحتاج إلى صيانة قليلة مثل الألومنيوم والأقمشة الخاصة"
    },
  ];

  const licenseSteps = [
    "زيارة موقع أمانة منطقة الرياض الإلكتروني أو الذهاب إلى الفرع المختص",
    "تقديم طلب تصريح يحتوي على مخطط أو تصميم المظلة مع مواصفات الموقع",
    "دفع الرسوم المطلوبة حسب نوع المظلة ومساحة التركيب",
    "انتظار الموافقة، والتي قد تشمل زيارة ميدانية للتأكد من مطابقة الشروط",
    "البدء في التركيب بعد الحصول على التصريح",
  ];

  const whyChooseUs = [
    "خبرة واسعة في تركيب كافة أنواع مظلات السيارات",
    "استخدام خامات عالية الجودة لضمان متانة المظلات",
    "أسعار تنافسية مع ضمان الجودة",
    "سرعة في التنفيذ ومرونة في التخصيص حسب الطلب",
    "خدمة استخراج التصاريح نيابة عن العملاء",
  ];

  const faqs = [
    {
      question: "كم سعر متر مظلة السيارات؟",
      answer: "سعر المتر المربع يتراوح بين 150 إلى 700 ريال سعودي، حسب نوع المظلة وجودة المواد والتصميم.",
    },
    {
      question: "ما هو أفضل نوع مظلات للسيارات؟",
      answer: "المظلات المودرن تعتبر الخيار الأمثل لمزيج من المتانة والمظهر العصري، بينما الحديدية للمناطق ذات الظروف القاسية والمتحركة للمرونة في الاستخدام.",
    },
    {
      question: "هل يمكن تركيب مظلة سيارة متحركة في المساحات الصغيرة؟",
      answer: "نعم، يتم تصميم المظلات المتحركة لتناسب مختلف المساحات بما فيها المساحات الصغيرة.",
    },
    {
      question: "هل مظلات السيارات الحديد مقاومة للصدأ؟",
      answer: "تُطلى المظلات الحديدية بمواد مقاومة للصدأ لضمان دوام طويل ومقاومة العوامل الجوية.",
    },
    {
      question: "كيف يمكنني طلب تصريح مظلة في الرياض؟",
      answer: "يمكن زيارة موقع أمانة الرياض أو الاستعانة بشركة متخصصة تقدم خدمة استخراج التصاريح نيابة عنك.",
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
              مظلات سيارات الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              أفضل مظلات سيارات متحركة وحديد ومودرن بأسعار تنافسية
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              تُعتبر مظلات سيارات الرياض من الحلول الأساسية لحماية السيارات من العوامل الجوية المختلفة مثل الشمس الحارقة، الأمطار، والرياح.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <Card className="p-0 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="relative w-full aspect-video">
            <img 
              src="/canopies/1.webp" 
              alt="مظلات سيارات متحركة في الرياض" 
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
              خدمات مظلات السيارات
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

          {/* Why Choose Us Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              لماذا تختار شركتنا لتركيب مظلات السيارات؟
            </h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-base md:text-lg text-white">{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Canopy Types Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أنواع مظلات سيارات بالرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {canopyTypes.map((type, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-accent text-white px-6 py-4 rounded-lg text-xl font-bold min-w-[180px] text-center h-fit">
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
                  src="/canopies/2.webp" 
                  alt="تفصيل مظلات سيارات 2025" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسعار مظلات سيارات في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up mb-12">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white hover:shadow-2xl transition-all duration-500">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">نوع المظلة</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السعر التقريبي</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">ملاحظات</th>
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

          {/* Features Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">مميزات مظلات السيارات</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-base md:text-lg text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Best Canopy Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مواصفات أفضل مظلات مواقف السيارات
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestCanopyFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خطوات تركيب مظلات السيارات
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

      {/* License Steps */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خطوات طلب تصريح المظلة
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <ul className="space-y-4">
              {licenseSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-base md:text-lg text-white">{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسئلة شائعة حول مظلات السيارات
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
              توفر مظلات سيارات الرياض حماية فعالة وجمالية للسيارات، سواء كنت تبحث عن مظلات سيارات متحركة أو حديد أو مودرن، فإن خدماتنا تضمن لك الجودة والاحترافية في التركيب بأسعار تنافسية. لا تتردد في التواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص يناسب احتياجاتك.
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

export default CanopiesPage;