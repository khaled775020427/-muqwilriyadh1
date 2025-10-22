const galleryImages = [
  {
    image: "/Gallery/1.webp",
  },
  {

    image: "/Gallery/2.webp",
  },
  {
    
    image: "/Gallery/3.webp",
  },
  {
   
    image: "/Gallery/4.webp",
  },
  {
    image: "/Gallery/5.webp",
  },
  {
 
    image: "/Gallery/6.webp",
  },
  {
   
    image: "/Gallery/7.webp",
  },
  {
   
    image: "/Gallery/8.webp",
  },
  {

    image: "/Gallery/9.webp",
  },
  {
    
    image: "/Gallery/10.webp",
  },
  {
    
    image: "/Gallery/11.webp",
  },
  {
    
    image: "/Gallery/12.webp",
  },


];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            اعمالنا بالصور
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            نحن مؤسسة مقاولات متخصصة في <strong>تنفيذ أعمال الهناجر، المستودعات، المظلات، السواتر ليزر </strong> في الرياض وجميع مناطق المملكة. نمتلك خبرة طويلة وفريق عمل محترف، يضم مهندسين وفنيين مهرة يقدمون أفضل الحلول الإنشائية باستخدام <strong>خامات عالية الجودة وتقنيات حديثة</strong>.
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
                          alt=""

                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
