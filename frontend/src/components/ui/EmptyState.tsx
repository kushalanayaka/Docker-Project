interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionText,
  actionLink,
}: EmptyStateProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-10 text-center rounded-lg">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mb-2 text-white">
        {title}
      </h2>

      <p className="text-white/60 max-w-md mx-auto">
        {description}
      </p>

      {actionText && actionLink && (
        <a
          href={actionLink}
          className="inline-block mt-6 border border-white px-6 py-3 hover:bg-white hover:text-black transition-all"
        >
          {actionText}
        </a>
      )}

    </div>
  );
}