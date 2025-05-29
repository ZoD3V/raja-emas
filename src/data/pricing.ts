export interface JewelryTable {
  kadarKarat: string;
  hargaPerGram: string;
}

export interface LmCertificateTable {
  jenisLogamMulia: string;
  kadar: string;
  hargaPerGram: string;
  karat: string;
}

export const jewelryData: JewelryTable[] = [
  { kadarKarat: "K24*", hargaPerGram: "Rp 1.715.000" },
  { kadarKarat: "K24", hargaPerGram: "Rp 1.605.000" },
  { kadarKarat: "K23", hargaPerGram: "Rp 1.408.000" },
  { kadarKarat: "K22", hargaPerGram: "Rp 1.345.000" },
  { kadarKarat: "K21", hargaPerGram: "Rp 1.285.000" },
  { kadarKarat: "K20", hargaPerGram: "Rp 1.224.000" },
  { kadarKarat: "K19", hargaPerGram: "Rp 1.163.000" },
  { kadarKarat: "K18", hargaPerGram: "Rp 1.103.000" },
  { kadarKarat: "K17", hargaPerGram: "Rp 1.040.000" },
  { kadarKarat: "K16", hargaPerGram: "Rp 980.000" },
  { kadarKarat: "K15", hargaPerGram: "Rp 919.000" },
  { kadarKarat: "K14", hargaPerGram: "Rp 858.000" },
  { kadarKarat: "K13", hargaPerGram: "Rp 795.000" },
  { kadarKarat: "K12", hargaPerGram: "Rp 735.000" },
  { kadarKarat: "K11", hargaPerGram: "Rp 674.000" },
  { kadarKarat: "K10", hargaPerGram: "Rp 612.000" },
  { kadarKarat: "K9", hargaPerGram: "Rp 552.000" },
  { kadarKarat: "K8", hargaPerGram: "Rp 490.000" },
  { kadarKarat: "K7", hargaPerGram: "Rp 430.000" },
  { kadarKarat: "K6", hargaPerGram: "Rp 370.000" },
  { kadarKarat: "K5", hargaPerGram: "Rp 308.000" },
];

export const lmCertificateData: LmCertificateTable[] = [
  {
    jenisLogamMulia: "LM ANTAM BARU",
    kadar: "99.99%",
    hargaPerGram: "Rp 1.755.000",
    karat: "K24",
  },
  {
    jenisLogamMulia: "LM ANTAM LAMA",
    kadar: "99.99%",
    hargaPerGram: "Rp 1.715.000",
    karat: "K24",
  },
  {
    jenisLogamMulia: "RHODIUM (Rh)",
    kadar: "99.99%",
    hargaPerGram: "Rp 705.000",
    karat: "K24",
  },
  {
    jenisLogamMulia: "PALADIUM (Pd)",
    kadar: "99.99%",
    hargaPerGram: "Rp 285.000",
    karat: "K24",
  },
  {
    jenisLogamMulia: "PLATINUM (Pt)",
    kadar: "99.99%",
    hargaPerGram: "Rp 285.000",
    karat: "",
  },
  {
    jenisLogamMulia: "JASA LAB XRF LOGAM",
    kadar: "",
    hargaPerGram: "Rp 200.000",
    karat: "K24",
  },
  {
    jenisLogamMulia: "PERAK",
    kadar: "99.99%",
    hargaPerGram: "Rp 11.000",
    karat: "K24",
  },
];

export const pricingGold = {
  heading: "Harga Beli Emas Hari Ini di Raja Emas Indonesia",
  data: lmCertificateData,
  backgroundImage: "/images/pricing/background-gradient.webp",
};
