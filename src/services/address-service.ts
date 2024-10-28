import { PublicInstance } from "./service";

const getAllProvinces = async () => {
  const result = await PublicInstance(`provinsi/get/`);
  return result.data;
};

const getAllCities = async (provinceId: string) => {
  const result = await PublicInstance(`kabkota/get/?d_provinsi_id=${provinceId}`);
  return result.data;
};

const getAllDistricts = async (kabKotaId: string) => {
  const result = await PublicInstance(`kecamatan/get/?d_kabkota_id=${kabKotaId}`);
  return result.data;
};

const getAllSubDistricts = async (kecamatanId: string) => {
  const result = await PublicInstance(`kelurahan/get/?d_kecamatan_id=${kecamatanId}`);
  return result.data;
};

const getAddressBySearch = async (keyword: string) => {
  const result = await PublicInstance(`cari/index/?keyword=${keyword}`);
  return result.data;
};

export { getAllProvinces, getAllCities, getAllDistricts, getAllSubDistricts, getAddressBySearch };
