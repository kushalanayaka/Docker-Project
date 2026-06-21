import Skeleton from "../ui/Skeleton";

export default function RecentActivitySkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

      {[1, 2].map((item) => (
        <div
          key={item}
          className="bg-white/5 border border-white/10 p-6 rounded-lg"
        >
          <Skeleton className="h-6 w-40 mb-6" />

          <Skeleton className="h-4 w-full mb-3" />

          <Skeleton className="h-4 w-5/6 mb-3" />

          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}

    </div>
  );
}