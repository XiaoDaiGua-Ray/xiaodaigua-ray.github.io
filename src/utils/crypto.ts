import HmacSHA256 from 'crypto-js/hmac-sha256'
import SHA256 from 'crypto-js/sha256'
import AES from 'crypto-js/aes'
import MD5 from 'crypto-js/md5'
import BASE64 from 'crypto-js/enc-base64'

/**
 *
 * @param message 待加密信息
 * @param key 加密key
 *
 * HmacSHA256 加密
 */
export const useHmacSHA256 = (
  message: WordArray | string,
  key: WordArray | string,
) => {
  return new Promise((resolve) => {
    const cry = HmacSHA256(message, key)

    resolve(cry)
  })
}

/**
 *
 * @param message 待加密信息
 *
 * SHA256 加密
 */
export const useSHA256 = (message: WordArray | string) => {
  return new Promise((resolve) => {
    const cry = SHA256(message)

    resolve(cry)
  })
}

/**
 *
 * @param message 待加密信息
 * @param key 加密key
 * @param cfg 加密配置信息
 *
 * AES 加密
 */
export const useAESEncrypt = (
  message: WordArray | string,
  key: WordArray | string,
  cfg?: CipherOption,
) => {
  return new Promise((resolve) => {
    const cry = AES.encrypt(message, key, cfg)

    resolve(cry)
  })
}

/**
 *
 * @param ciphertext 待解密信息
 * @param key 解密key
 * @param cfg 解密配置信息
 *
 * AES 解密
 */
export const useAESDecrypt = (
  ciphertext: CipherParams | string,
  key: WordArray | string,
  cfg?: CipherOption,
) => {
  return new Promise((resolve) => {
    const cry = AES.decrypt(ciphertext, key, cfg)

    resolve(cry)
  })
}

/**
 *
 * @param message 待加密信息
 * @param cfg md5 加密配置
 *
 * md5 加密
 */
export const useMD5 = (message: WordArray | string, cfg?: object) => {
  return new Promise((resolve) => {
    const cry = MD5(message, cfg)

    resolve(cry)
  })
}

/**
 *
 * @param wordArray 待转为 base64 信息
 *
 * base64 加密
 */
export const useBase64Stringify = (wordArray: WordArray) => {
  return new Promise((resolve) => {
    const cry = BASE64.stringify(wordArray)

    resolve(cry)
  })
}

/**
 *
 * @param str 待转为 base64 信息
 *
 * base64 解密
 */
export const useBase64Parse = (str: string) => {
  return new Promise((resolve) => {
    const cry = BASE64.parse(str)

    resolve(cry)
  })
}
