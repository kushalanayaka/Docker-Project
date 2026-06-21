import Skeleton from "../ui/Skeleton";

export default function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-white/5 border border-white/10 p-6 rounded-lg"
        >
          <Skeleton className="h-4 w-20 mb-4" />

          <Skeleton className="h-10 w-12" />
        </div>
      ))}

    </div>
  );
}