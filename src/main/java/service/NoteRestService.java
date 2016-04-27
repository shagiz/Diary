package service;

import com.google.gson.Gson;
import dao.NoteDaoImpl;
import entity.Note;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.net.URI;
import java.util.List;

/**
 * Created by Shagi on 27.04.2016.
 */
@Path("/notes")
public class NoteRestService {
    @Context
    private UriInfo uriInfo;
    @Context
    private HttpServletRequest request;



    private NoteDaoImpl noteDao = new NoteDaoImpl();
    @GET
    @Produces("application/json")
    public String getNotes(){
        String login = request.getSession(true).getAttribute("login").toString();
        List<Note> notes = noteDao.getUserNotes(login);
        return new Gson().toJson(notes);
    }

    @POST
    @Consumes("application/json")
    public Response postNote(Note note){
        String login = request.getSession(true).getAttribute("login").toString();
        note.setUser(login);
        noteDao.persist(note);
        URI noteUri = uriInfo.getAbsolutePathBuilder().path(Long.toString(note.getId())).build();
        return Response.created(noteUri).build();
    }

    @PUT
    @Path("{id}")
    @Consumes("application/json")
    public Response updateNote(@PathParam("id") String id,Note note){
        String login = request.getSession(true).getAttribute("login").toString();
        Note editNote = noteDao.getNote(Long.valueOf(id));
        note.setCreated(editNote.getCreated());
        note.setUser(login);
        noteDao.update(note);
        return Response.ok().build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteNote(@PathParam("id") String id){
        Note note = noteDao.getNote(Long.valueOf(id));
        if (note==null){
            throw new NotFoundException();
        }
        noteDao.delete(Long.valueOf(id));
        return Response.noContent().build();
    }


}
