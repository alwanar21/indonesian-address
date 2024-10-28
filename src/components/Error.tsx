import { Button } from "./ui/button";

export default function Error() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex items-center justify-center flex-col mx-auto">
          <p className="text-2xl font-medium ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Kami tidak dapat menemukan halaman tersebut
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <div className="flex items-center mt-6 gap-x-3 sm:w-full">
            <Button
              onClick={() => console.log("wkwkwk")}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm "
              variant={"ghost"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Kembali</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
