package com.gro.model;

import com.gro.security.model.User;

import java.io.Serializable;

/**
 * @author karamim
 */
public class LoginModel implements Serializable {

    public String token;

    public User user;

    @Override
    public String toString() {
        return "LoginModel{" +
                "token='" + token + '\'' +
                ", user=" + user.toString() +
                '}';
    }
}
