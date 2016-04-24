package util;

import org.apache.commons.codec.digest.DigestUtils;

/**
 * Created by shagi on 24.04.16.
 */
public class MD5Util {
    public static String md5HashWithSalt(String pass){
        String salt = "jdPrkVH4su";
        return DigestUtils.md5Hex(pass+salt);
    }
}
