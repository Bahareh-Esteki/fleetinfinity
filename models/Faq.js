import mongoose from 'mongoose';

// Schema for the individual question and answer
const QuestionSchema = new mongoose.Schema({
  q: {
    type: String,
    required: [true, 'Question text is required.'],
  },
  a: {
    type: String,
    required: [true, 'Answer text is required.'],
  },
});

// Schema for the entire FAQ category
const FaqSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Category is required.'],
    unique: true,
  },
  questions: [QuestionSchema],
});

/**
 * This is a best practice for Next.js with Mongoose.
 * It prevents the model from being re-compiled on every hot-reload in development,
 * which would otherwise cause an error.
 */
export default mongoose.models.Faq || mongoose.model('Faq', FaqSchema);
