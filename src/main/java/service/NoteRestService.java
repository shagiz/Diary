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
 * RESTful сервис для CRUD операций над Note
 */
@Path("/notes")
public class NoteRestService {
    @Context
    private UriInfo uriInfo;
    @Context
    private HttpServletRequest request;

    private NoteDaoImpl noteDao = new NoteDaoImpl();

    /**
     * Получаем список всех записий пользователя
     * @return note-list в формате json
     */
    @GET
    @Produces("application/json")
    public String getNotes() {
        String login = request.getSession(true).getAttribute("login").toString();
        List<Note> notes = noteDao.getUserNotes(login);
        return new Gson().toJson(notes);
    }

    /**
     * Сохраняем новую запись
     *
     * @return код 201 - created
     */
    @POST
    @Consumes("application/json")
    public Response postNote(Note note) {
        String login = request.getSession(true).getAttribute("login").toString();
        note.setUser(login);
        noteDao.persist(note);
        URI noteUri = uriInfo.getAbsolutePathBuilder().path(Long.toString(note.getId())).build();
        return Response.created(noteUri).build();
    }
    /**
     * Обновляем запись
     *
     * @return код 200 - OK
     */
    @PUT
    @Path("{id}")
    @Consumes("application/json")
    public Response updateNote(@PathParam("id") String id, Note note) {
        String login = request.getSession(true).getAttribute("login").toString();
        Note editNote = noteDao.getNote(Long.parseLong(id));
        note.setCreated(editNote.getCreated());
        note.setUser(login);
        noteDao.update(note);
        return Response.ok().build();
    }
    /**
     * Удаляем запись
     */
    @GET
    @Path("{id}")
    public Response deleteNote(@PathParam("id") String id) {
        Note note = noteDao.getNote(Long.valueOf(id));
        if (note == null) {
            throw new NotFoundException();
        }
        noteDao.delete(Long.parseLong(id));
        return Response.noContent().build();
    }

    /**
     * Удаляем запись
     *
     * Метод не работает т.к. Ext JS proxy отправлят вместе с
     * DELETE payload, что дает 400 Bad Requset.
     */
    @DELETE
    @Path("{id}")
    public Response deleteNoteB(@PathParam("id") String id) {
        Note note = noteDao.getNote(Long.valueOf(id));
        if (note == null) {
            throw new NotFoundException();
        }
        noteDao.delete(Long.parseLong(id));
        return Response.noContent().build();
    }
}
