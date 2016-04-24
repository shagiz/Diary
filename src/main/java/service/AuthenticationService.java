package service;


import dao.UserDaoImpl;
import entity.User;

/**
 * Created by Shagi on 23.04.2016.
 */
public class AuthenticationService {

    private static UserDaoImpl userDao;

    public AuthenticationService() {
        userDao = new UserDaoImpl();
    }

    public void persistNewUser(User user) {

        if (userDao.findUserByLogin(user.getLogin()) == null) {
            userDao.persist(user);
        }
    }

    public boolean checkUserData(String login, String password) {
        User user = userDao.findUserByLogin(login);
        return user.getPassword().equals(password);
    }
}
