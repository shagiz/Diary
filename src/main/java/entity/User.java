package entity;

import javax.persistence.*;

/**
 * Created by Shagi on 21.04.2016.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(length = 30)
    private String login;
    @Column(nullable = false, length = 30)
    private String password;

    public User() {
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
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
