const mSqlHelper = require('../SqlHelper')

//  Method to confirm User Email
exports.SignUp = async (req, res, next) => {
    try {
        var result_select = await mSqlHelper.Execute('SELECT * FROM ADSP010')
        return res.status(200).send(result_select)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}