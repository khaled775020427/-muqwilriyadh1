import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2, AlertTriangle } from "lucide-react";

const SandwichPanelPage = () => {
  const services = [
    {
      title: "تركيب ساندوتش بانل للجدران",
      description: "تركيب ألواح الساندوتش بانل للجدران بمختلف السمكات والمواصفات",
    },
    {
      title: "تركيب ساندوتش بانل للأسقف",
      description: "تنفيذ أسقف عازلة باستخدام ألواح الساندوتش بانل عالية الجودة",
    },
    {
      title: "غرف جاهزة ساندوتش بانل",
      description: "تصميم وتنفيذ غرف جاهزة كاملة بألواح الساندوتش بانل",
    },
    {
      title: "هناجر ساندوتش بانل",
      description: "إنشاء هناجر ومستودعات بألواح الساندوتش بانل المعزولة",
    },
    {
      title: "مظلات ساندوتش بانل",
      description: "تركيب مظلات عازلة باستخدام ألواح الساندوتش بانل المتينة",
    },
    {
      title: "استشارات فنية",
      description: "تقديم استشارات فنية لاختيار الأنسب لمشروعك",
    },
  ];

  const features = [
    "عزل حراري وصوتي ممتاز: يحافظ على درجة الحرارة ويقلل الضوضاء",
    "مقاومة للحرائق: في بعض الأنواع المطورة لمقاومة الحريق",
    "تركيب سريع وسهل: يوفر الوقت والجهد مقارنة بالبناء التقليدي",
    "متانة في مواجهة العوامل الجوية: مقاوم للعوامل المناخية القاسية",
    "توفير في تكاليف البناء: حل اقتصادي وفعال للمشاريع المختلفة",
    "خفة الوزن: سهل النقل والتركيب دون الحاجة لأساسات ثقيلة",
  ];

  const priceTable = [
    { type: "ساندوتش بانل للجدران", price: "100 - 130 ريال", description: "ألواح للجدران بسمكات مختلفة وعزل حراري" },
    { type: "ساندوتش بانل للأسقف", price: "120 - 150 ريال", description: "أسقف عازلة بمقاومة عالية للعوامل الجوية" },
    { type: "ساندوتش بانل عازل حراري فاخر", price: "160 - 200 ريال", description: "ألواح فاخرة بعزل حراري وصوتي ممتاز" },
    { type: "غرف جاهزة كاملة", price: "750 - 1200 ريال", description: "غرف متكاملة شاملة التركيب والتشطيبات" },
  ];

  const components = [
    {
      title: "الطبقة الخارجية",
      description: "غالبًا ما تكون من صاج مجلفن مقاوم للصدأ أو ألمنيوم. مزودة بطبقة حماية مثل البوليستر أو PVDF لمقاومة العوامل الجوية.",
    },
    {
      title: "الطبقة الداخلية (العازل)",
      description: "EPS (بولسترين ممدد): عزل حراري خفيف وسعر اقتصادي. PU (بولي يوريثان): عزل حراري وصوتي ممتاز. Rock Wool (صوف صخري): عزل عالي، مقاوم للحرائق.",
    },
    {
      title: "الطبقة السفلية المعدنية",
      description: "نفس خامة الطبقة الخارجية عادةً، وتُعالج لمقاومة التآكل والصدأ، مما يضمن متانة وديمومة الألواح.",
    },
  ];

  const installationSteps = [
    "تجهيز الموقع: تنظيف الأرض أو السurface المراد التركيب عليه ووضع الأساس المعدني أو القواعد الخرسانية",
    "تركيب الهيكل الحديدي: تنفيذ الهيكل الحامل بدقة باستخدام أعمدة وعوارض مجلفنة",
    "وضع ألواح الساندوتش بانل: تثبيت الألواح بطريقة أفقية أو عمودية مع التداخل لتقوية العزل",
    "التثبيت الميكانيكي: استخدام براغي خاصة مجلفنة مقاومة للصدأ لتثبيت الألواح بإحكام",
    "إغلاق الزوايا والحواف: استخدام قطع فلاشات معدنية تغطي الفواصل والحواف وتعزيز طبقات العزل",
    "اختبار العزل والماء: فحص مدى إحكام التركيب وإجراء اختبارات العزل والصوت والحرارة",
  ];

  const tools = [
    "ميزان ليزر لتسوية الهيكل",
    "مثاقب كهربائية ومفكات",
    "براغي وصواميل خاصة للساندوتش بانل",
    "فلاشات معدنية للتشطيب النهائي",
    "أدوات قياس وتخطيط",
  ];

  const tips = [
    "تأكد من استخدام ألواح ساندوتش بانل أصلية ومعتمدة",
    "يجب أن يتم التركيب من خلال مقاول مختص لضمان الكفاءة والمتانة",
    "راعِ اتجاه الرياح وأشعة الشمس عند التصميم لضمان أفضل أداء للعزل",
    "احصل على رخصة البناء أو التركيب من منصة 'بلدي' إذا كانت مطلوبة",
    "اختر السمك المناسب حسب الاستخدام والمناخ",
  ];

  const disadvantages = [
    "الحاجة إلى صيانة دورية للوصلات والعوازل",
    "العزل الصوتي أقل كفاءة في بعض الأنواع الرخيصة",
    "قد يتطلب تصريحًا بلديًا في بعض الاستخدامات السكنية",
  ];

  const specifications = [
    { name: "السمك المتوفر", value: "5 - 10 - 15 سم" },
    { name: "العرض القياسي", value: "1 متر" },
    { name: "الطول", value: "من 2 متر حتى 12 متر حسب الطلب" },
    { name: "نوع العازل", value: "EPS, PU, Rock Wool" },
    { name: "المادة الخارجية", value: "حديد مجلفن أو ألمنيوم" },
  ];

  const faqs = [
    {
      question: "ما هو أفضل سمك للساندوتش بانل؟",
      answer: "يعتمد ذلك على الاستخدام؛ 5 سم مناسب للغرف المؤقتة، بينما يوصى بـ 10 سم أو أكثر للمستودعات والمناطق الحارة.",
    },
    {
      question: "هل الساندوتش بانل مقاوم للماء؟",
      answer: "نعم، خاصة عند تنفيذ العزل والوصلات بشكل احترافي، يكون مقاومًا للماء والرطوبة.",
    },
    {
      question: "هل يمكن استخدام الساندوتش بانل في البناء السكني؟",
      answer: "نعم، لكنه يُستخدم غالبًا في الملاحق، الأسطح، أو البيوت المؤقتة، وقد يحتاج إلى موافقة الجهات المختصة.",
    },
    {
      question: "ما الفرق بين EPS و PU في الساندوتش بانل؟",
      answer: "EPS اقتصادي وخفيف الوزن، بينما PU يوفر عزلًا حراريًا وصوتيًا أفضل ولكنه أعلى سعرًا.",
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
              ساندوتش بانل الرياض
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              أفضل حلول العزل والبناء بسعر المتر المثالي
            </p>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              الساندوتش بانل في الرياض هو الخيار الأول لكل من يبحث عن حل بناء ذكي، يوفر المتانة مع العزل الحراري والصوتي في آن واحد.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="container mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-gray-100">
          <img 
            src="/SandwichPanel/1.webp" 
            alt="ألواح ساندوتش بانل تتكون من طبقات متعددة" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خدمات الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up bg-primary text-white hover:shadow-2xl transition-all duration-500"
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

          {/* What is Sandwich Panel Section */}
          <Card className="p-8 md:p-12 bg-primary text-white mb-16 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              ما هو الساندوتش بانل؟
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              تم تطوير ألواح الساندوتش بانل لتكون خفيفة الوزن، وسهلة النقل، وقوية التحمل، وتوفر عزلاً ممتازاً للحرارة والصوت. وقد أصبح استخدامها شائعاً في المملكة العربية السعودية، خاصة في المشاريع التي تتطلب تركيبًا سريعًا مع جودة عالية.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مميزات الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-primary text-white hover:shadow-2xl transition-all duration-500">
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

      {/* Components Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              مكونات الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {components.map((component, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-primary text-white hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {component.title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {component.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 animate-fade-in-up">
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-gray-100">
              <img 
                src="/SandwichPanel/2.webp" 
                alt="غرف ساندوتش بانل جاهزة" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              أسعار الساندوتش بانل في الرياض
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up mb-12">
            <Card className="p-6 md:p-8 bg-primary text-white hover:shadow-2xl transition-all duration-500">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-white/30">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">نوع الساندوتش بانل</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-white">السعر التقريبي (ريال/م²)</th>
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

          {/* Specifications */}
          <Card className="p-8 md:p-12 bg-primary text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">المواصفات الفنية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                  <h4 className="text-accent font-bold text-lg mb-2">{spec.name}</h4>
                  <p className="text-white">{spec.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Disadvantages Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              عيوب الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-primary text-white hover:shadow-2xl transition-all duration-500">
              <ul className="space-y-4">
                {disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-white">{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              خطوات تركيب الساندوتش بانل
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <Card className="p-8 md:p-12 bg-primary text-white mb-12 animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <ul className="space-y-4">
              {installationSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white">{step}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tools Section */}
          <Card className="p-8 md:p-12 bg-primary text-white animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">أدوات التركيب المستخدمة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white">{tool}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              نصائح هامة قبل التركيب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-primary text-white hover:shadow-2xl transition-all duration-500">
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
                className="p-6 md:p-8 hover-lift animate-fade-in-up bg-primary text-white hover:shadow-2xl transition-all duration-500"
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
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up bg-primary text-white hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
              خاتمة
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              إذا كنت تبحث عن مادة بناء توفر لك العزل، المتانة، والمرونة في التصميم، فإن الساندوتش بانل بالرياض هو الحل الذكي. سواء كنت صاحب منشأة صناعية أو ترغب في إنشاء غرفة خارجية، نحن نوفر لك أفضل المواد، سعر متر تنافسي، وخدمة تركيب احترافية. تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.
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

export default SandwichPanelPage;