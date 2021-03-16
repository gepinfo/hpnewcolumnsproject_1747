
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   email: String,
   department: { type: Schema.Types.String, ref: 'department' },
   college: { type: Schema.Types.String, ref: 'college' },
   place: { type: Schema.Types.String, ref: 'place' }
})

const studentModel = mongoose.model('student', studentSchema, 'student');
export default studentModel;
