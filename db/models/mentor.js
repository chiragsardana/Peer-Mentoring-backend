const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");
const { SchemaType } = require("mongoose");
const mentorSchema = new Schema(
  {
    // Mentor Id
    emailId: { type: SchemaTypes.String, required: true},
    // Mentee List: Student Names or Email Id's
    menteeList: { type: SchemaTypes.Array, required: false},
    // School Name Like SOET etc.
    schoolName: { type: SchemaTypes.String,required: true},
    // Course Name Like CSE etc.
    courseName: { type: SchemaTypes.String, required: true},
    // Subject Name Like TOC, SEPM etc.
    subjectName: { type: SchemaTypes.String, required: true},
    // Topic Name Like BlackBox Testing, JAVA OOPS Principles etc.
    topicName: { type: SchemaTypes.String, required: true},
    // Context of Topic what has to be taught in the topic Like in OOPS 4 Principles were taught
    topicContext: { type: SchemaTypes.String, required: true},
    // Date And Time 
    date: { type: SchemaTypes.Date, required: true},
    // No of Hours
    duration: { type: SchemaTypes.Number, required: true},
    // Class Status whether canceled or completed or has to be occured
    // Not Done , Has to Done, Completed, Canceled
    status: { type: SchemaTypes.String, required: true},
    // Faculty assigned to help the students if there is some issue
    assignedFaculty: { type: SchemaTypes.String, required: false},
    // Room no is string just New Building Room No. Starts With N
    roomNo: { type: SchemaTypes.String, required: false},
    // In case of Virtual Meeting Link is Provided
    link: { type: SchemaTypes.String, required: false},
    // Feedback for Mentee, Make Separate Module for feedback.
    // feedback: { type: SchemaTypes.Array, required: false}
  },
    //   Time Stamp when entry is created
  { timestamps: true }
);
const mentorModel = mongoose.model(SCHEMAS.MENTORS, mentorSchema);
module.exports = mentorModel;
