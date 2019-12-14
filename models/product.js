import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type : String,
        required: [true, 'Product name is required']
    },
    price:{
        type: Number,
        required: [true, 'Product price is required'],
        min: 1
    },
    description:{
        type: String,
        maxlength : 200
    },
    color:{
        type: String,
    }
});

export default mongoose.model("Product", productSchema);


