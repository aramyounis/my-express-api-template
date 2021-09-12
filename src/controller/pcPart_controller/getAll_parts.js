const fs = require("fs");
const path = require("path");
const pcPart_service = require("@/services/pcPart_service");
const getAll_parts = (req, res, next) => {
  res.json(pcPart_service.getAll_parts(req.params.part));
};

module.exports = getAll_parts;
