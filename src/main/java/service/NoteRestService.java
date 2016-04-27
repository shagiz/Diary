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
        NoteDaoImpl noteDao = new NoteDaoImpl();
        String res="{ \n" +
                "            'name'  : 'Lisa',  \n" +
                "            'createDate' : '10-23-1234',\n" +
                "            'modifiedDate' : '04-21-2016',\n" +
                "            'noteText' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere odio leo, at mollis libero porta ut. Etiam mauris ipsum, iaculis a imperdiet sit amet, bibendum id urna. Proin tempus lectus nisl, a tristique est tempor quis. Etiam interdum urna dolor, non gravida nulla laoreet a. Donec id velit metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu purus sed nisl commodo malesuada et ut velit. Quisque ut lorem magna. Nulla eget odio est. Sed ultrices turpis quam. Aliquam quis sollicitudin dolor.'\n" +
                "        }";

        return res;
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
