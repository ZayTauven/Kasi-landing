import { cn } from "@/lib/utils";

/**
 * Wordmark "Kasi" en texte : le point du i est remplacé par le pin
 * de géolocalisation orange du logo. S'adapte à la taille de police héritée.
 */
export const KasiWordmark = ({
  className,
  dotClassName,
}: {
  className?: string;
  dotClassName?: string;
}) => {
  return (
    <span
      aria-label="Kasi"
      role="img"
      className={cn(
        "font-display inline-block leading-none font-bold tracking-tight",
        className,
      )}
    >
      <span aria-hidden="true">
        Kas
        <span className="relative inline-block">
          ı
          <span
            className={cn(
              "bg-kasi absolute top-[0.2em] left-1/2 size-[0.16em] -translate-x-1/2 rounded-full",
              dotClassName,
            )}
          />
        </span>
      </span>
    </span>
  );
};

/**
 * Les traits de vitesse du scooter Kasi — marqueur d'eyebrow.
 */
export const SpeedDashes = ({ className }: { className?: string }) => {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex flex-col items-end gap-[3px]", className)}
    >
      <span className="bg-kasi h-[3px] w-5 rounded-full" />
      <span className="bg-kasi h-[3px] w-3.5 rounded-full opacity-80" />
      <span className="bg-kasi h-[3px] w-2 rounded-full opacity-60" />
    </span>
  );
};
