import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = '', hover = false, glow = false }: CardProps) {
  return (
    <div
      className={`
        bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-[20px] overflow-hidden
        ${hover ? 'transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1' : ''}
        ${glow ? 'hover:border-[#D4FF4F]/30 hover:shadow-[0_0_30px_rgba(212,255,79,0.1)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  overlay?: boolean;
}

export function CardImage({ src, alt, aspectRatio = 'video', overlay = true }: CardImageProps) {
  const aspectStyles = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[2/1]',
  };

  return (
    <div className={`relative ${aspectStyles[aspectRatio]} bg-[#111114] overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030304]/80 via-transparent to-transparent" />
      )}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-white group-hover:text-[#D4FF4F] transition-colors ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`text-sm text-white/50 leading-relaxed ${className}`}>{children}</p>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 bg-white/[0.02] border-t border-white/5 ${className}`}>
      {children}
    </div>
  );
}

// Convenience component for menu items
interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  dietary?: string[];
  featured?: boolean;
}

export function MenuCard({
  name,
  description,
  price,
  calories,
  image,
  dietary = [],
  featured = false,
}: MenuCardProps) {
  return (
    <Card hover glow className={`group relative ${featured ? 'ring-1 ring-[#D4FF4F]/30' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4FF4F] text-[#030304] text-xs font-bold uppercase tracking-wider rounded-full">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Featured
          </span>
        </div>
      )}
      <CardImage src={image} alt={name} />
      <CardContent>
        <div className="flex justify-between items-start gap-4 mb-3">
          <CardTitle>{name}</CardTitle>
          <span className="text-lg font-bold text-[#D4FF4F] whitespace-nowrap">${price.toFixed(2)}</span>
        </div>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/30">{calories} cal</span>
          {dietary.length > 0 && (
            <div className="flex gap-1.5">
              {dietary.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
