const { Types, Schema } = require('mongoose')
// Although it is under the models folder, this file is technically not a model due to the Types, Schema const thereabove.
// It was never declared as a model.

const reactionsSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: format_time,
        required: true,
      },
      username: {
        type: String,
        required: true,
      }
}
)


// PUT GETTER METHOD HERE
reactionsSchema.virtual('timeStamp').get(function () {
  return this.createdAt;
})

module.exports = reactionsSchema;