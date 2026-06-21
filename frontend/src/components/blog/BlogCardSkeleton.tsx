import Skeleton from "../ui/Skeleton";

export default function BlogCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-lg">

      <Skeleton className="h-8 w-3/4 mb-4" />

      <Skeleton className="h-4 w-full mb-2" />

      <Skeleton className="h-4 w-5/6 mb-2" />

      <Skeleton className="h-4 w-2/3" />

    </div>
  );
}