const notFoundError = (res) => {
    return res
        .status(404)
        .send("Esse dado não foi encontrado no bando de dados");
};

const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("Ocorreu um erro ao recuperar este dado no banco de dados");
};

module.exports = {
    notFoundError,
    objectIdCastError
};
