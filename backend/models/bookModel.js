import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    publishYear: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
