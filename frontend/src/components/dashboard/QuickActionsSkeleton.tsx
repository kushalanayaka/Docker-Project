import Skeleton from "../ui/Skeleton";

export default function QuickActionsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white/5 border border-white/10 p-6 rounded-lg"
        >
          <Skeleton className="h-6 w-32 mb-4" />

          <Skeleton className="h-4 w-full mb-2" />

          <Skeleton className="h-4 w-4/5" />
        </div>
      ))}

    </div>
  );
}