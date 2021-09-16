module.exports = app =>{
    app.route('/')
            .get(app.api.api.hello)
}