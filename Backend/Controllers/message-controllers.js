import ConversationsModel from "../Database/Models/conversations.model.js";
import ConversationsModel from "../Database/Models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    const conversation = await ConversationsModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await ConversationsModel.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    //! This will run in parallel with same time
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    if (error) throw error;
    res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
};
