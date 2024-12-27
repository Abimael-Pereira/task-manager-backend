const notFoundError = (res) => {
    return res
        .status(404)
        .send("Esse dado não foi encontrado no bando de dados");
};

module.exports = {
    notFoundError,
};
