import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className=" min-h-[calc(100vh-52px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="text-center font-bold text-3xl"
        >
          Indonesian Address
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "linear" }}
          className="max-w-5xl mt-3 mb-6 px-3 lg:px-0"
        >
          aplikasi yang memudahkan Anda menelusuri struktur wilayah Indonesia dari provinsi hingga kecamatan. Dengan
          tampilan sederhana, temukan daftar lengkap daerah mulai dari Sabang hingga Merauke. Semua informasi wilayah
          tersaji dengan ringkas, mempermudah Anda memahami hierarki administrasi di Indonesia. Jelajahi setiap daerah
          dengan cepat dan praktis hanya di Indonesian Address.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "linear" }}
        >
          <Button asChild>
            <Link to="/address" className="flex items-center">
              Jelajahi Sekarang <FaArrowRight />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
