package service;

import com.google.gson.Gson;
import dao.NoteDaoImpl;
import dao.interfaces.NoteDao;
import entity.Note;

import javax.ws.rs.*;
import java.util.List;

/**
 * Created by Shagi on 27.04.2016.
 */
@Path("/notes")
public class NoteRestService {
    private NoteDao noteDao = new NoteDaoImpl();
    @GET
    @Produces("application/json")
    public String getNotes(@QueryParam("login") String login){
        List<Note> notes = noteDao.getUserNotes(login);
        return new Gson().toJson(notes);
    }

    @POST
    @Consumes("application/json")
    public String postNote(){
        return "AAAAAAAAAAAaa";
    }

    @PUT
    @Consumes("application/json")
    public void updateNote(){

    }

    @DELETE
    public void deleteNote(){

    }


}
