import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const CladdingPage = () => {
  const features = [
    {
      icon: "🛡️",
      title: "مقاومة العوامل الجوية",
      description: "لا يتأثر بالرطوبة أو الحرارة أو الأمطار",
    },
    {
      icon: "🔥",
      title: "مقاوم للحريق",
      description: "مناسب للواجهات الخارجية",
    },
    {
      icon: "🧼",
      title: "سهل التنظيف",
      description: "يمكن تنظيفه بالماء والصابون فقط",
    },
    {
      icon: "🛠️",
      title: "سهل التركيب",
      description: "لا يحتاج إلى أعمال بناء معقدة",
    },
    {
      icon: "🧩",
      title: "تنوع الألوان والأشكال",
      description: "متوفر بألوان وخامات مختلفة تشبه الخشب الطبيعي",
    },
    {
      icon: "💰",
      title: "موفر اقتصاديًا",
      description: "أقل تكلفة على المدى البعيد من الخشب الطبيعي",
    },
  ];

  const usages = [
    {
      title: "تكسيات الجدران الداخلية",
      description: "تُستخدم لتغطية جدران الصالات، غرف المعيشة، وغرف النوم، حيث تضيف لمسة دافئة وعصرية مع سهولة الصيانة والتنظيف مقارنة بالخشب الطبيعي. كما توفر عزلًا حراريًا وصوتيًا.",
    },
    {
      title: "واجهات المباني والفلل",
      description: "تكسيات بديل الخشب الخارجية تضفي مظهرًا فاخرًا وأنيقًا على واجهات المنازل والعمائر، مع مقاومة عالية للعوامل الجوية مثل الشمس والرطوبة والحرارة، مما يطيل عمر الواجهة.",
    },
    {
      title: "أسقف وجُدران الحدائق",
      description: "تُستخدم لتغطية الأسقف أو الجدران في الحدائق الخارجية، حيث توفر حماية من الشمس مع تعزيز الجانب الجمالي للحديقة، وتتحمل الظروف الخارجية بدون تلف.",
    },
    {
      title: "تكسيات الأعمدة والأسوار",
      description: "تستخدم لتغطية الأعمدة الخرسانية أو المعدنية وإضفاء مظهر خشبي جذاب عليها، كما تُستخدم في تغطية الأسوار لتوفير الخصوصية والمظهر الجمالي.",
    },
    {
      title: "ديكورات المحلات التجارية والمطاعم",
      description: "تُستخدم في تصميم الديكورات الداخلية والخارجية للمحلات والمطاعم لإضفاء طابع عصري ومميز يجذب العملاء، مع سهولة التنظيف والمتانة.",
    },
    {
      title: "الأرضيات الخارجية (Decking)",
      description: "يستخدم بديل الخشب في الأرضيات الخارجية، مثل شرفات المنازل أو المسابح، لما يتمتع به من مقاومة للماء والرطوبة مع مظهر خشبي طبيعي.",
    },
    {
      title: "مرافق مائية ومسابح",
      description: "يُستخدم في المناطق المحيطة بالمسابح والمرافق المائية لأنه مقاوم للماء والرطوبة، ويوفر مظهرًا جماليًا مع سهولة الصيانة.",
    },
  ];

  const priceTable = [
    { thickness: "10 مم", dimensions: "290×15 سم", price: "من 65 إلى 85 ريال" },
    { thickness: "15 مم", dimensions: "290×20 سم", price: "من 90 إلى 120 ريال" },
  ];

  const installationSteps = [
    "تحضير السطح: تنظيف الجدران أو الأسطح المراد تركيب التكسيات عليها",
    "تركيب الشاسيه الحديدي أو الخشبي: لتثبيت الألواح عليه",
    "تثبيت الألواح: باستخدام كلبسات أو براغٍ مخصصة",
    "معالجة الفواصل والزوايا: لضمان مظهر احترافي وعزل ممتاز",
    "التشطيب النهائي: تركيب الحواف وطبقة الحماية (إن وُجدت)",
  ];

  const faqs = [
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
      answer: "نعم، بديل الخشب (WPC) مصمم خصيصًا للاستخدام الخارجي. فهو مقاوم للرطوبة، التعفن، الحشرات، والتقلبات الجوية مثل الشمس والمطر.",
    },
  ];

  const usageAdvantages = [
    "تحمل الظروف المناخية المختلفة",
    "سهولة التركيب والتنظيف",
    "توفير عزل حراري وصوتي جيد",
    "تصاميم وألوان متنوعة تناسب كل الأذواق",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-700">
              تكسيات بديل الخشب في الرياض
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              الحل العصري للجمال والمتانة
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              تكسيات بديل الخشب أصبحت اليوم من أكثر خيارات التصميم الداخلي والخارجي طلبًا، خاصة في الرياض والمناطق ذات الطقس المتقلب. فهي تجمع بين الجمال الطبيعي للأخشاب ومقاومة العوامل الجوية والتكلفة الاقتصادية.
            </p>
          </div>
        </div>
      </section>

      {/* What is WPC */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              🌟 ما هو بديل الخشب (WPC)؟
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              بديل الخشب هو مادة مصنّعة تُعرف بـ <strong>الخشب البلاستيكي المركب (WPC – Wood Plastic Composite)</strong>، مكون من خليط من ألياف الخشب والبلاستيك المعاد تدويره، ويُستخدم في تغطية الجدران، الواجهات، الأسقف، وأحيانًا الأرضيات.
            </p>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              ✅ مميزات تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift border-2 hover:border-primary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              🛠️ استخدامات تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              تكسيات بديل الخشب أصبحت خيارًا مفضلًا للعديد من المشاريع بفضل مميزاتها الفريدة التي تجمع بين جمال الخشب الطبيعي ومتانة المواد الحديثة. وتتنوع استخداماتها لتلبي حاجات التصميم الداخلي والخارجي على حد سواء.
            </p>
          </div>

          <div className="space-y-8">
            {usages.map((usage, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {index + 1}. {usage.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {usage.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Usage Advantages */}
          <Card className="p-8 md:p-12 mt-12 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              مميزات استخدام تكسيات بديل الخشب
            </h3>
            <ul className="space-y-4">
              {usageAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground">{advantage}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Image */}
          <div className="mt-12 animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200" 
              alt="تكسيات بديل الخشب جدارية" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              📏 المقاسات والأسعار
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="overflow-x-auto animate-fade-in-up">
            <Card className="p-6 md:p-8">
              <div className="min-w-full">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">السماكة</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">الطول × العرض</th>
                      <th className="py-4 px-4 text-lg md:text-xl font-bold text-foreground">السعر التقريبي (ريال/متر)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-4 font-bold text-foreground">{item.thickness}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.dimensions}</td>
                        <td className="py-4 px-4 text-accent font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-6 text-center italic">
                ** الأسعار تختلف حسب الشركة ونوع المادة وبلد المنشأ.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              ⚒️ خطوات تركيب تكسيات بديل الخشب
            </h2>
            <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <ol className="space-y-4">
                {installationSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-lg text-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
              ❓ أسئلة شائعة
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
                  ◼️ {faq.question}
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
              ✅ خاتمة
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              تكسيات بديل الخشب ليست فقط خيارًا جماليًا، بل هي استثمار ذكي في ديكور منزلك أو مشروعك التجاري. بفضل متانتها ومظهرها الفاخر، أصبحت خيارًا مفضلاً للمصممين والمهندسين في المملكة.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              📞 هل ترغب في معرفة أفضل أنواع بديل الخشب المتوفرة في الرياض؟ أو ترغب في تركيب احترافي مع ضمان؟
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              لا تتردد في طلب استشارة مجانية الآن.
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
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 gap-2 font-bold" asChild>
                  <a href="tel:0552132619">
                    <Phone className="w-5 h-5" />
                    اتصل الآن
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2 font-bold bg-background/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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

export default CladdingPage;
