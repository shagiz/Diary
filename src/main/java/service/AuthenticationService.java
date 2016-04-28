package service;


import dao.UserDaoImpl;
import entity.User;

/**
 * Сервис аутентификации
 */
public class AuthenticationService {

    private static UserDaoImpl userDao;

    public AuthenticationService() {
        userDao = new UserDaoImpl();
    }

    /**
     * Сохраняем нового пользователя, если такой логин еще не зарегестрирован
     *
     * @param user новый пользователь
     * @return false - если пользователь с таким логином уже существует
     */
    public boolean persistNewUser(User user) {

        if (userDao.findUserByLogin(user.getLogin()) == null) {
            userDao.persist(user);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Проверяем введеные данные с данными из бд
     */
    public boolean checkUserData(String login, String password) {
        User user = userDao.findUserByLogin(login);
        return user.getPassword().equals(password);
    }
}
