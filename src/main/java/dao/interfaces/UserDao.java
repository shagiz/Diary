package dao.interfaces;

import java.io.Serializable;

/**
 * Created by Shagi on 23.04.2016.
 */
public interface UserDao<T, Login extends Serializable> {
    void persist(T user);
    T findUserByLogin(Login login);
}
