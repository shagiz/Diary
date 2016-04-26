package entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Shagi on 21.04.2016.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(length = 30)
    private String login;
    @Column(nullable = false, length = 127)
    private String password;
    @OneToMany
    @JoinColumn(name = "user_fk", referencedColumnName = "login")
    private List<Note> notes;

    public User() {}

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
