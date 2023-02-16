exports.lPersegi = function (sisi) {
  console.log("Luas persegi dengan nilai sisi sebesar " + sisi + " adalah : ");
  return sisi * sisi;
};

exports.kPersegi = function (sisi) {
  console.log("Keliling persegi dengan nilai sisi sebesar " + sisi + " adalah : ");
  return 4 * sisi;
};

exports.lPersegiPanjang = function (panjang, lebar) {
  console.log("Luas persegi panjang dengan nilai panjang sebesar " + panjang + " dan lebar " + lebar + " adalah : ");
  return panjang * lebar;
};

exports.kPersegiPanjang = function (panjang, lebar) {
  console.log("Keliling persegi panjang dengan nilai panjang sebesar " + panjang + " dan lebar " + lebar + " adalah : ");
  return 2 * (panjang + lebar);
};
