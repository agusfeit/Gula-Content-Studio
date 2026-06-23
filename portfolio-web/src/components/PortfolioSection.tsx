import { useEffect, useRef, useState } from "react";
import { Eye, Heart, Send } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface VideoItem {
  id: string;
  youtubeId: string;
  category: string;
  views: string;
  likes: string;
  shares: string;
}

const videos: VideoItem[] = [
  { id: "2", youtubeId: "x1vjhefUKEg", category: "Educativo", views: "2.5M", likes: "60K", shares: "11K" },
  { id: "1", youtubeId: "KV8WYWgEPnE", category: "Educativo · Tonipets", views: "50K", likes: "2K", shares: "600" },
  { id: "6", youtubeId: "8TRd-RBFmoM", category: "Educativo · Tonipets", views: "50K", likes: "2K", shares: "1.2K" },
  { id: "7", youtubeId: "Q9VNoe5dMmo", category: "Colaboración · Happet", views: "35K", likes: "200", shares: "44" },
  { id: "4", youtubeId: "zOV33s2onh0", category: "Colaboración · Lavakan", views: "10K", likes: "340", shares: "20" },
  { id: "8", youtubeId: "oqvtV_z6UvU", category: "Colaboración · Tonipets", views: "8K", likes: "250", shares: "47" },
  { id: "3", youtubeId: "ysu4_eSKUcQ", category: "Colaboración · Beepex", views: "5K", likes: "175", shares: "15" },
  { id: "5", youtubeId: "b2PQ273DsVg", category: "Colaboración · Happet", views: "4K", likes: "100", shares: "20" },
];

const VideoCard = ({ video }: { video: VideoItem }) => {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
  );

  return (
    <div>
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-foreground/5 border-2 border-border shadow-brutalist-sm cursor-pointer group"
        style={{ aspectRatio: "9/16" }}
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&loop=1&playlist=${video.youtubeId}&controls=1&modestbranding=1&rel=0&showinfo=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumbSrc}
              alt={video.category}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={() => setThumbSrc(`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
              <div className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-border transition-transform duration-200 group-hover:scale-110">
                <svg className="w-6 h-6 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <span className="inline-block font-display text-[11px] uppercase tracking-[2px] bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full border border-border">
          {video.category}
        </span>
        <div className="flex items-center gap-3 text-muted-foreground text-xs font-body">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {video.views}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {video.likes}
          </span>
          <span className="flex items-center gap-1">
            <Send className="w-3.5 h-3.5" />
            {video.shares}
          </span>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="bg-card px-6 md:px-20 py-20 md:py-24"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
			<div className="flex justify-center md:justify-start mb-4"><div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground">Portfolio</div></div>
        <h2 className="text-center md:text-left font-display text-3xl md:text-[3.2rem] leading-tight text-foreground mb-12">
          Contenido que hicimos
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <VideoCard video={video} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioSection;
