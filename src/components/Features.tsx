import { Card } from "./ui/card";
import { Warehouse, Car, DoorOpen, Layers, Home, Shield, Fence, Building2 ,Scissors} from "lucide-react";

const features = [
  {
    icon: Warehouse,
    title: "تصميم وتنفيذ هناجر ومستودعات",
    description: "بأنواعها (صناعية – تجارية – زراعية)"
  },
  {
    icon: Car,
    title: "تركيب مظلات مواقف سيارات",
    description: "(قماش، حديد، ألمنيوم، ساندوتش بانل)"
  },
  {
    icon: DoorOpen,
    title: "حدادة أبواب وشبابيك",
    description: "بتصاميم حديثة ومتينة"
  },
  {
    icon: Layers,
    title: "تلبيس أبواب بديل الخشب",
    description: "بتشطيبات أنيقة وعزل ممتاز"
  },

  {
    icon: Building2,
    title: "تركيب تكسيات خارجية وداخلية",
    description: "بأشكال وخامات متعددة"
  },
  {
    icon: Shield,
    title: "سواتر شرائح حديد ومجلفن",
    description: "لحماية الخصوصية بأشكال عصرية"
  },
  {
    icon: Fence,
    title: "تحويش أراضي",
    description: "بأسوار خرسانية أو معدنية مع ضمان الجودة"
  },
  {
    icon: Scissors,
    title: "سواتر ليزر حديثة",
    description: "خصوصية وأناقة تجمعها سواتر الليزر العصرية"
  }
];

export const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
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
            نتميز بـ..
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-2 border-primary-foreground/20 bg-background/90 backdrop-blur-md shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-2xl group animate-scale-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm border-2 border-primary-foreground/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
