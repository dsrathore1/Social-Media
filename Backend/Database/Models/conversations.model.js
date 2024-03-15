import mongoose from "mongoose";

const ConversationsSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const ConversationsModel = mongoose.model("conversation", ConversationsSchema);

export default ConversationsModel;
