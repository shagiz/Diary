package dao;

import dao.interfaces.UserDao;
import entity.User;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/**
 * Created by Shagi on 23.04.2016.
 */
public class UserDaoImpl implements UserDao<User, String> {

    public EntityManager em = Persistence.createEntityManagerFactory("MyPersist").createEntityManager();

    public UserDaoImpl() {
    }

    public void persist(User user) {
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
    }

    public User findUserByLogin(String login) {
        return em.find(User.class,login);
    }

}
