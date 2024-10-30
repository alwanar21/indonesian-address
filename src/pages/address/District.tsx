import { getAllDistricts } from "@/services/address-service";
import { useQuery } from "@tanstack/react-query";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddressLoading from "@/components/AddressLoading";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EmptyData from "@/components/EmptyData";

type Address = {
  id: string;
  text: string;
};

export default function District() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["province"],
    queryFn: () => getAllDistricts(id ?? ""),
    enabled: true,
  });
  return (
    <>
      <div className="container px-4 sm:px-0 mx-auto">
        <Button className="" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      <div className="mx-auto text-center text-3xl mt-8 mb-6 font-semibold">Kecamatan</div>
      <div className="container mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8 px-4 sm:px-0">
        {isLoading ? (
          <AddressLoading />
        ) : (
          data?.result.length >= 1 &&
          data?.result.map((item: Address, index: number) => (
            <Card key={item.id} className="cursor-pointer" onClick={() => navigate(`/address/deskel/${item.id}`)}>
              <CardHeader>
                <CardTitle>{index + 1}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
      {data?.result.length == 0 && <EmptyData type="address" />}
    </>
  );
}
