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
public class AuthenticationController extends HttpServlet {
    private AuthenticationService authenticationService;

    public AuthenticationController() {
        authenticationService = new AuthenticationService();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String loginData = request.getParameter("loginData");
        Gson gson = new Gson();
        User userInfo = gson.fromJson(loginData, User.class);
        String login = userInfo.getLogin();
        String password = userInfo.getPassword();

        //генерируем соленый хэш пароля
        password = MD5Util.md5HashWithSalt(password);

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        JsonObject myObj = new JsonObject();

        //nothing was sent

        if (authenticationService.checkUserData(login, password)) {
            myObj.addProperty("success", true);
            myObj.addProperty("message", "Access granted!");
        } else {
            myObj.addProperty("success", false);
            myObj.addProperty("message", "Looks like you forgot your login information");
        }


        out.println(myObj.toString());
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
