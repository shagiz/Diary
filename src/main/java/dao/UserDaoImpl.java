package dao;

import dao.interfaces.UserDao;
import entity.User;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/**
 * Реализация NoteDAO
 */
public class UserDaoImpl implements UserDao<User, String> {

    // Получаем EntityManager по еденице "persistence-unit" - "MyPersist"
    public EntityManager em = Persistence.createEntityManagerFactory("MyPersist").createEntityManager();

    public UserDaoImpl() {
    }

    public void persist(User user) {
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
    }

    public User findUserByLogin(String login) {
        return em.find(User.class, login);
    }

}
