import clsx from "clsx";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-white px-10 py-4 drop-shadow-xl",
        className
      )}
      suppressHydrationWarning={true}
    >
      {children}
    </div>
  );
};

export default Card;
