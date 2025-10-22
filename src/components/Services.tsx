import { Card } from "./ui/card";
import { Link } from "react-router-dom";

// قائمة الخدمات مع صور محلية
const services = [
  { title: "ابواب بديل الخشب", image: "/services/1.webp" },
  { title: "تحويش اراضي", image: "/services/2.webp" },
  { title: "تكسيات بديل الخشب", image: "/services/3.webp" },
  { title: "ساندوتش بانل", image: "/services/5.webp" },
  { title: "سواتر", image: "/services/6.webp" },
  { title: "مظلات", image: "/services/7.webp" },
  { title: "هناجر ومستودعات", image: "/services/8.webp" },
  { title: "ساتر ليزار", image: "/services/9.webp" },

];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background font-cairo"
    >
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-8 sm:mb-14 animate-fade-in-up px-3">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4">
    ماذا نقدم
  </h2>


          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground/95 max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            نقدم حلولًا متكاملة في مجال{" "}
            <strong className="text-foreground font-semibold">
              الهناجر والمستودعات – مظلات – سواتر ليزر – بديل الخشب – تكسيات – ساندوتش بانل والمقاولات العامة
            </strong>{" "}
            بأعلى معايير الجودة، سرعة الإنجاز، وتكلفة تنافسية تضمن رضا عملائنا.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
         
              <Card
                className="group overflow-hidden cursor-pointer border border-primary/30 hover:border-primary shadow-md hover:shadow-2xl rounded-2xl transition-all duration-500 bg-gradient-to-b from-background/60 to-background/90 backdrop-blur-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <h3 className="absolute bottom-4 sm:bottom-6 inset-x-4 text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide drop-shadow-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
                    {service.title}
                  </h3>
                </div>
              </Card>
                      ))}
        </div>
      </div>
    </section>
  );
};
