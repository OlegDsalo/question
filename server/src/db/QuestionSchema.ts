import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
    question: string;
    answer: string;
    isBeingEdited: boolean;
}

const QuestionSchema: Schema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, default: '' },
    isBeingEdited: { type: Boolean, default: false }
});

export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
