export const mainPage = (req, res) => {
    res.json({
        message: "Welcome to first test ✨🎉",
        data: [{
            name: "Kareem",
            email:"kareem12@gmail.com"
        }]
    });
}