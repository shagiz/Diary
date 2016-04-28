package dao;

import dao.interfaces.NoteDao;
import entity.Note;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import java.util.List;

/**
 * Реализация NoteDAO
 */
public class NoteDaoImpl implements NoteDao<Note, Long> {

    // Получаем EntityManager по еденице "persistence-unit" - "MyPersist"
    public EntityManager em = Persistence.createEntityManagerFactory("MyPersist").createEntityManager();

    public void persist(Note note) {
        em.getTransaction().begin();
        em.persist(note);
        em.getTransaction().commit();
    }

    public void delete(Long id) {
        em.getTransaction().begin();
        em.remove(getNote(id));
        em.getTransaction().commit();
    }

    public void update(Note note) {
        em.getTransaction().begin();
        em.merge(note);
        em.getTransaction().commit();
    }

    public Note getNote(Long id) {
        return em.find(Note.class, id);
    }

    public List<Note> getUserNotes(String login) {
        return em.createNamedQuery("Note.getAll", Note.class)
                .setParameter("login", login)
                .getResultList();
    }
}
