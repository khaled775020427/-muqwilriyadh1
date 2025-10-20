import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "شركة هناجر ومستودعات بالرياض تركيب جميع أنواع الهناجر بجودة عالية وأقل الأسعار",
    description: "شركة هناجر ومستودعات بالرياض تركيب جميع أنواع الهناجر بجودة عالية وأقل الأسعار نحن في…",
    image: "/services/1.webp",
    link: "/warehouses-detail",
  },
  {
    title: "تكسيات بديل الخشب في الرياض",
    description: "تكسيات بديل الخشب في الرياض: الحل العصري للجمال والمتانة تكسيات بديل الخشب أصبحت اليوم من…",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800",
    link: "/cladding",
  },
  {
    title: "ساندوتش بانل الرياض أفضل حلول العزل والبناء بسعر المتر المثالي",
    description: "ساندوتش بانل الرياض أفضل حلول العزل والبناء بسعر المتر المثالي الساندوتش بانل في الرياض…",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    link: "/sandwich-panel",
  },
  {
    title: "تحويش أراضي الرياض حماية وترسيم بأعلى جودة",
    description: "تحويش أراضي الرياض: حماية وترسيم بأعلى جودة تحويش أراضي الرياض هو الخطوة الأولى التي تضمن…",
    image: "https://images.unsplash.com/photo-1597476392583-97ef0d4b8815?q=80&w=800",
    link: "/fencing",
  },
  {
    title: "تلبيس أبواب بديل الخشب في الرياض",
    description: "تلبيس أبواب بديل الخشب في الرياض: اجعل باب منزلك عامرًا بالفن والأناقة يُعتبر تلبيس الأبواب…",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800",
    link: "/doors",
  },
  {
    title: "سواتر الرياض تركيب سواتر قماش وحديد جودة عالية",
    description: "سواتر الرياض: تركيب سواتر قماش وحديد وبلاستيك وخشب بأعلى جودة تُعتبر سواتر الرياض من أهم…",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
  },
  {
    title: "مظلات سيارات الرياض أفضل مظلات سيارات متحركة",
    description: "مظلات سيارات الرياض: أفضل مظلات سيارات متحركة وحديد ومودرن بأسعار تنافسية تُعتبر مظلات سيارات الرياض…",
    image: "https://images.unsplash.com/photo-1582737064290-5e3c7e6d2969?q=80&w=800",
  },
  {
    title: "هناجر الرياض الشركة الرائدة في بناء وتركيب هناجر ومستودعات عالية الجودة",
    description: "هناجر الرياض: الشركة الرائدة في بناء وتركيب هناجر ومستودعات عالية الجودة تُعد هناجر الرياض من…",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
  },
];

export const Projects = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* الخلفية نفسها مثل Features */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4 text-shadow">
            من أعمالنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CardContent = (
              <Card
                className="group overflow-hidden cursor-pointer border-2 border-primary-foreground/20 bg-background/90 backdrop-blur-md shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-2xl animate-scale-in hover:scale-105 transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* الصورة - ارتفاع ثابت */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                
                {/* المحتوى - يأخذ المساحة المتبقية */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* العنوان - ارتفاع ثابت مع تحديد عدد الأسطر */}
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 min-h-[3.5rem] flex items-start">
                    {project.title}
                  </h3>
                  
                  {/* الوصف - ارتفاع ثابت مع تحديد عدد الأسطر */}
                  <p className="text-muted-foreground mb-4 text-base leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* الزر - ثابت في الأسفل */}
                  <div className="mt-auto pt-4">
                    <Button variant="link" className="p-0 gap-2 font-bold text-base hover:scale-105 transition-transform">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Button>
                  </div>
                </div>
              </Card>
            );

            return project.link ? (
              <Link key={index} to={project.link} className="block h-full">
                {CardContent}
              </Link>
            ) : (
              <div key={index} className="h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};