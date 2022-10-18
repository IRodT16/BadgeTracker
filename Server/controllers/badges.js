const Badge = require('../models/badgeSchema');

const createBadge = async (req, res) => {
  const badge = await Badge.create(req.body);
  res.status(201).json({ badge });
};
const getAllBadges = async (req, res) => {
  const badges = await Badge.find({});
  res.status(200).json({ badges });
};
const deleteBadge = async (req, res) => {
  const { id: badgeID } = req.params;
  const badge = await Badge.findOneAndDelete({ _id: badgeID });

  res.status(200).json({ badge });
};

module.exports = { getAllBadges, createBadge, deleteBadge };
