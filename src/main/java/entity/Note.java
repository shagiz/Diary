package entity;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

/**
 * Сущность записи
 */
@Entity
@XmlRootElement
// Запрос на получение списка всех записий для определенного юзера
@NamedQuery(name = "Note.getAll", query = "select n from Note n where user=:login")
public class Note {
    @Id
    @GeneratedValue
    private long id;
    @Column(nullable = false)
    private String title;
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;
    @Temporal(TemporalType.TIMESTAMP)
    private Date updated;
    @Column(length = 2000)
    private String text;
    @Column(name = "user_fk", nullable = false)
    private String user;

    public Note() {
    }

    public Note(String title, String text, String user_login) {
        this.title = title;
        this.text = text;
        this.user = user_login;
    }

    /**
     * Устанавливаем текущую дату при создании сущности
     */
    @PrePersist
    public void setCurrentDate() {
        created = new Date();
        updated = created;
    }

    /**
     * Устанавливаем текущую дату при обновлении сущности
     */
    @PreUpdate
    public void setUpdateDate() {
        updated = new Date();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}