package service;

import dao.NoteDaoImpl;
import entity.Note;

import javax.ws.rs.*;

/**
 * Created by Shagi on 27.04.2016.
 */
@Path("/notes")
public class NoteRestService {
    @GET
    @Produces("application/json")
    public String getNotes(){

        return "TEST";
    }

    @POST
    @Consumes("application/json")
    public void postNote(){

    }

    @PUT
    @Consumes("application/json")
    public void updateNote(){

    }

    @DELETE
    public void deleteNote(){

    }


}
