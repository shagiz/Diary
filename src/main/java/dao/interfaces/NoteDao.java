package dao.interfaces;

import java.io.Serializable;
import java.util.List;

/**
 * Этот интерфейс содержит все элементарные операции связанные с классом Note
 * Создание, чтение, добавление, удаление.
 *
 * @author shagi
 */
public interface NoteDao<Entity, ID extends Serializable> {

    void persist(Entity entity);

    void delete(ID id);

    void update(Entity entity);

    Entity getNote(ID id);

    List<Entity> getUserNotes(String login);
}
