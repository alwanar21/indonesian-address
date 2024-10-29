import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export default function TableLoading() {
  return (
    <div className="container mx-auto mt-8">
      <Table>
        <TableCaption>
          <div className="flex gap-3 justify-center">
            <Button disabled={true}>
              <MdNavigateBefore className="text-2xl" />
            </Button>
            <Button variant={"secondary"} disabled={true}></Button>
            <Button disabled={true}>
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
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <Skeleton className="h-4 w-6" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-28" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
