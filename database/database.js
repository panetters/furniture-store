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

const ModelInfo = mongoose.model('ModelInfo',
  new Schema({
    model: String,
    productId: String,
    price: String,
    image_url: String,
    color: String,
    stock: String
  }), 'furniture');

const getCategories = async () => {
  const res = await Categories.distinct('category');
  return res;
};

const getCategoryFurn = async (cat) => {
  const res = await CategoryFurn.aggregate([
    { $group: {
        _id: '$model',
        category: { $first: '$category' },
        model: { $first: '$model' },
        price: { $first: '$price' },
        image_url: { $first: '$image_url' }
    }},
    { $match: { category: cat }},
  ]);
  return res;
};

const getModelInfo = async (model) => {
  const res = await ModelInfo.find({ model: model });
  return res;
};

const getSearchResults = async (query) => {
  const res = await ModelInfo.aggregate([
    { $group: {
        _id: '$model',
        category: { $first: '$category' },
        model: { $first: '$model' },
        price: { $first: '$price' },
        image_url: { $first: '$image_url' }
    }},
    { $match: {
        $or: [
          {'model': { $regex: query, $options: 'i' }},
          {'category': { $regex: query, $options: 'i' }}
        ]
    }}
  ]);
  return res;
};

const getSlides = async () => {
  const res = await ModelInfo.aggregate([
    { $sample: { size: 15 }} 
  ]);
  return res;
};

module.exports.getCategories = getCategories;
module.exports.getCategoryFurn = getCategoryFurn;
module.exports.getModelInfo = getModelInfo;
module.exports.getSearchResults = getSearchResults;
module.exports.getSlides = getSlides;