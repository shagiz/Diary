package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.User;
import service.AuthenticationService;
import util.MD5Util;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Shagi on 23.04.2016.
 */
public class RegistrationController extends HttpServlet {
    private AuthenticationService authenticationService;

    public RegistrationController(){
        authenticationService = new AuthenticationService();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Gson gson = new Gson();
        String login = gson.fromJson(request.getParameter("login"), String.class);
        String password = gson.fromJson(request.getParameter("password"), String.class);


        //генерируем соленый хэш пароля
        password = MD5Util.md5HashWithSalt(password);

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        JsonObject myObj = new JsonObject();

        //nothing was sent
        if (login == null || password == null) {
            myObj.addProperty("success", false);
            myObj.addProperty("message", "Please enter login and Password!");
        } else {
            User user = new User(login, password);
            authenticationService.persistNewUser(user);
            myObj.addProperty("success",true);
        }

        out.println(myObj.toString());
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
