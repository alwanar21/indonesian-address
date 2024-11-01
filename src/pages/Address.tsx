import { getAllProvinces } from "@/services/address-service";
import { useQuery } from "@tanstack/react-query";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddressLoading from "@/components/AddressLoading";
import { useNavigate } from "react-router-dom";

type Address = {
  id: string;
  text: string;
};

export default function Address() {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["province"],
    queryFn: getAllProvinces,
    enabled: true,
  });
  return (
    <>
      <div className="mx-auto text-center text-3xl mt-8 mb-6 font-semibold">Provinsi</div>
      <div className="container mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8 px-4 sm:px-0">
        {isLoading ? (
          <AddressLoading />
        ) : (
          data?.result.map((item: Address, index: number) => (
            <Card key={item.id} className="cursor-pointer" onClick={() => navigate(`kabkota/${item.id}`)}>
              <CardHeader>
                <CardTitle>{index + 1}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
