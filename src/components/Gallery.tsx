const galleryImages = [
  {
    title: "دهانات خارجية بالرياض احدث انواع والوان واجهات عمائر",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
  },
  {
    title: "دليل شامل لاختيار أفضل دهانات خارجية للمنازل",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    title: "معلم دهانات  - تركيب ديكور شيبورد",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
  },
  {
    title: " الشاشات - لمسة عصرية وفخمة",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
  },
  {
    title: "أفضل  شاشات الرياض مودرن وخشب",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
  },
  {
    title: "ديكور شاشة تلفزيون 2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
  },
  {
    title: "تصميم وتنفيذ ديكور خلفيات شاشات جبس بورد",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
  },
  {
    title: "تصاميم  شاشات تلفزيون مودرن وعصرية",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800",
  },
  {
    title: "ديورات شاشات خشب الشيبورد",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
  },
  {
    title: "ديكور شاشة مودرن الرياض بأحدث التصاميم",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800",
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            اعمالنا بالصور
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            نحن مؤسسة مقاولات متخصصة في <strong>تنفيذ أعمال الهناجر، المستودعات، المظلات، السواتر، </strong> في الرياض وجميع مناطق المملكة. نمتلك خبرة طويلة وفريق عمل محترف، يضم مهندسين وفنيين مهرة يقدمون أفضل الحلول الإنشائية باستخدام <strong>خامات عالية الجودة وتقنيات حديثة</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer animate-fade-in-up hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-primary-foreground font-bold text-lg md:text-xl text-shadow transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
