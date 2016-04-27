import dao.NoteDaoImpl;
import entity.Note;

/**
 * Created by shagi on 27.04.16.
 */
public class Main {
    public static void main(String[] args) {
        NoteDaoImpl noteDao = new NoteDaoImpl();
        Note note = new Note("title","test","shagi");
        Note note1 = new Note("qwert","asdf","shagi");
        noteDao.persist(note);
        noteDao.persist(note1);
    }
}
