import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const PostCardSkeleton = () => {
  return (
    <Card className={cn("w-[300px] space-y-2")}>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-1/3" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[120px]" />
      </CardContent>
    </Card>
  );
};

export default PostCardSkeleton;
