package dao.interfaces;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Shagi on 26.04.2016.
 */
public interface NoteDao<Entity, ID extends Serializable> {
    void persist(Entity entity);

    void delete(ID id);

    void update(Entity entity);

    Entity getNote(ID id);

    List<Entity> getUserNotes(String login);
}
