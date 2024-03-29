const dbReadErrMsg = globalThis.Status[2]
/**
 * @description 数据库读取
 */
function dbRead(req, res, next) {
    const name = req.body.name
    globalThis.DB.read(name, (err, content) => {
        if (err) {
            // 数据库读取出错
            console.warn(err)
            res.send(dbReadErrMsg)
        } else { //         server ver: *** .json
            res.locals.noteContent = content
            next()
        }
    })
}
module.exports = dbRead