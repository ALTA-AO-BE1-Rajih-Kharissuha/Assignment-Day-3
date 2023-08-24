const datas = require("../models");

const findParams = async (req, res) => {
  const { nama, location } = req.params;
  const User = await datas;

  // Cari buku berdasarkan nama
  const searchByName = User.filter((user) =>
    user.name.toLowerCase().includes(nama.toLowerCase())
  );

  // Cari buku berdasarkan penerbit
  const searchByLocation = User.filter((user) =>
    user.location.toLowerCase().includes(location.toLowerCase())
  );

  let searchResult = [];
  if (searchByName.length > 0) {
    searchResult = searchByName;
  } else if (searchByLocation.length > 0) {
    searchResult = searchByLocation;
  }

  if (searchResult.length > 0) {
    res.status(200).json(searchResult);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
};

const findQuery = async (req, res) => {
  const { name, age, location, language, interests } = req.query;
  const User = await datas;

  const find = User.find(
    (user) =>
      user.name.toString().toLowerCase() === name.toString().toLowerCase() &&
      user.age.toString().toLowerCase() === age.toString().toLowerCase() &&
      user.location.toString().toLowerCase() ===
        location.toString().toLowerCase() &&
      user.language.toString().toLowerCase() ===
        language.toString().toLowerCase() &&
      user.interests.some(
        (item) => item.toLowerCase() === interests.toLowerCase()
      )
  );
  if (find === undefined) {
    return res.status(404).json({ message: "Not Found" });
  } else {
    return res.status(200).json(find);
  }
};

module.exports = { findParams, findQuery };
