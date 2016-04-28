package util;

import org.apache.commons.codec.digest.DigestUtils;

/**
 * Генерирует MD5-Hash пароля с солью
 */
public class MD5Util {
    public static String md5HashWithSalt(String pass) {
        String salt = "jdPrkVH4su";
        return DigestUtils.md5Hex(pass + salt);
    }
}
