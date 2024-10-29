import SearchInput from "@/components/SearchInput";
import EmptyData from "@/components/EmptyData";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAddressBySearch } from "@/services/address-service";
import TableLoading from "@/components/TableLoading";

type Address = {
  negara: string;
  provinsi: string;
  kabkota: string;
  kecamatan: string;
  desakel: string;
  kodepos: string;
};

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { data, isLoading } = useQuery({
    queryKey: [searchQuery],
    queryFn: () => getAddressBySearch(searchQuery ?? ""),
    enabled: !!searchQuery,
  });

  const itemsPerPage = 10;
  const totalItems = data?.result?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Hitung indeks awal dan akhir
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.result?.slice(startIndex, endIndex) || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div>
      <SearchInput />
      {isLoading ? (
        <TableLoading />
      ) : (
        <div className="container mx-auto mt-8">
          {searchQuery && totalItems > 0 ? (
            <Table>
              <TableCaption>
                <div className="flex gap-3 justify-center">
                  <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    <MdNavigateBefore className="text-2xl" />
                  </Button>
                  <Button variant={"secondary"} disabled={true}>
                    {currentPage}
                  </Button>
                  <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    <MdNavigateNext className="text-2xl" />
                  </Button>
                </div>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Negara</TableHead>
                  <TableHead>Provinsi</TableHead>
                  <TableHead className="text-left">Kabupaten/Kota</TableHead>
                  <TableHead className="text-left">Kecamatan</TableHead>
                  <TableHead className="text-left">Desa/Kelurahan</TableHead>
                  <TableHead className="text-left w-[200px]">Kode Pos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((item: Address, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{startIndex + index + 1}</TableCell>
                    <TableCell>{item.negara}</TableCell>
                    <TableCell>{item.provinsi}</TableCell>
                    <TableCell className="text-left">{item.kabkota}</TableCell>
                    <TableCell className="text-left">{item.kecamatan}</TableCell>
                    <TableCell className="text-left">{item.desakel}</TableCell>
                    <TableCell className="text-left">{item.kodepos}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyData />
          )}
        </div>
      )}
    </div>
  );
}
