import { useSearchParams } from "react-router-dom";

export default function EmptyData() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <div className="mt-12 py-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">
        {searchQuery !== null ? "Informasi daerah yang Anda cari tidak ditemukan" : "Cari Daerah di Indonesia"}
      </h2>
      <p className="text-gray-600 mt-2">
        {searchQuery !== null
          ? "Masukkan nama daerah atau wilayah lain yang ingin Anda cari untuk melihat detail informasi"
          : "Masukkan nama daerah atau wilayah yang ingin Anda cari untuk melihat detail informasi"}
      </p>
    </div>
  );
}
