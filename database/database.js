const mongoose = require('mongoose');

const mongoPath = process.env.MONGO_URL;

mongoose.connect(mongoPath, { useNewUrlParser: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.once('open', function() {
  console.log('Database Connected');
});

const Categories = mongoose.model('Categories',
  new Schema({ category: String }), 'furniture');

const CategoryFurn = mongoose.model('CategoryFurn',
  new Schema({ model: String, price: String, image_url: String }), 'furniture');

const getCategories = async () => {
  let res = await Categories.distinct('category');
  return res;
};

const getCategoryFurn = async (cat) => {
  let res = await CategoryFurn.find({ category: cat });
  return res;
}

module.exports.getCategories = getCategories;
module.exports.getCategoryFurn = getCategoryFurn;