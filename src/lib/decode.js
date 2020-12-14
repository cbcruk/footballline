import CryptoJS from 'crypto-js'

const secret = 'zbauem449wuu4x'
const keySize = 8
const iterations = 2

function decode(encodeStr) {
  const salt = CryptoJS.enc.Hex.parse('FF')
  const ciphertext = CryptoJS.enc.Hex.parse(encodeStr.substring(32))
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext
  })
  const key = CryptoJS.PBKDF2(secret, salt, {
    keySize,
    iterations
  })
  const iv = CryptoJS.enc.Hex.parse(encodeStr.substring(0, 32))
  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    iv
  })

  return decrypted.toString(CryptoJS.enc.Utf8)
}

export default decode
