module.exports = mongoose => {
    return mongoose.model(
        'user',
        mongoose.Schema(
            {username: String,
             pw: String,
             name: String,
             telephone: String
            }, { timestamps: true}
        )
    )
}