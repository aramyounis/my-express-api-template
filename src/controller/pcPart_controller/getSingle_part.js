const pcPart_service = require("../../services/pcPart_service");

const getSingle_part = async (req, res, next) => {
  const itemInfo = await pcPart_service.getSingle_part(
    req.params.part,
    req.params.name
  );
  res.json(itemInfo);
};

module.exports = getSingle_part;
