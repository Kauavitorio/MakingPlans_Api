const mysql = require('../mysql')

//  Method to confirm User Email
exports.SignUp = async (req, res, next) => {
    try {
        var account_id = req.body.account_id_cry
        var verify_id = req.body.verify_id

        var result_select = await mysql.execute('SELECT * FROM tbl_account WHERE account_id = ?', EncryptDep.Decrypt(account_id))
        if(result_select.length > 0){
            var get_verify_id = EncryptDep.Decrypt(result_select[0].verify_id)
            if(get_verify_id == EncryptDep.Decrypt(verify_id)){
                const queryUpdate = `UPDATE tbl_account set verify_id = "Confirmed", verify = 1 WHERE account_id = ?;`
                    await mysql.execute(queryUpdate, EncryptDep.Decrypt(account_id));
                    return res.status(200).send({message: EncryptDep.Encrypto('Confirmed email')})
            }else
                return res.status(203).send({ message: EncryptDep.Encrypto('Invalid code')})
        }else
            return res.status(404).send({ message: EncryptDep.Encrypto('User not found')})
    } catch (error) {
        ServerDetails.RegisterServerError('Validate User Email', error.toString())
        return res.status(500).send({ message: error.toString()})
    }
}