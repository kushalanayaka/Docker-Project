import Skeleton from "../ui/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 overflow-hidden">

      <Skeleton className="aspect-[4/5] w-full" />

      <div className="p-5 space-y-4">

        <Skeleton className="h-8 w-3/4" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-5/6" />

        <div className="flex justify-between">

          <Skeleton className="h-6 w-20" />

          <Skeleton className="h-10 w-32" />

        </div>

      </div>

    </div>
  );
}