import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function AddressLoading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-6" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-6 w-48" />
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
