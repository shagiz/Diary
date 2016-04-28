package dao.interfaces;

import java.io.Serializable;

/**
 * Этот интерфейс содержит операции связанные с классом User
 * Создание, чтение.
 *
 * @author shagi
 */
public interface UserDao<T, Login extends Serializable> {
    void persist(T user);

    T findUserByLogin(Login login);
}
