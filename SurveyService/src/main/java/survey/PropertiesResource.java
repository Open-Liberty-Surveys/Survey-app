package survey;

import java.util.List;
import java.util.ArrayList;
import java.util.Properties;
import javax.json.*;
import javax.ws.rs.*;
import java.io.File;
import java.io.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("surveys")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PropertiesResource {

    @GET
    public Response getSurveys() {
        System.out.println("CALLED GET");
        System.out.println(System.getProperty("user.dir"));
        InputStream fis=null;
        try
        {
            fis=new FileInputStream("../../../../../src/main/java/survey/surveys.json");
            System.out.println("MADE IT HERE");
        }catch(IOException e){e.printStackTrace();}

        JsonReader reader=Json.createReader(fis);
        JsonArray array = reader.readArray();
        try
        {
            fis.close();
        }catch(IOException e){e.printStackTrace();}
        return Response.ok(array,MediaType.APPLICATION_JSON).build();
    }

    @POST
    public Response postSurvey(JsonObject surveyJSON) {
        System.out.println("CALLED POST");
        OutputStream fos = null;
        try
        {
            fos = new FileOutputStream("../../../../../src/main/java/survey/surveys.json");
        }catch(IOException e){e.printStackTrace();}

        JsonWriter writer = Json.createWriter(fos);

        writer.write(surveyJSON);

        try
        {
            fos.close();
        }catch(IOException e){e.printStackTrace();}
        return Response.ok(surveyJSON,MediaType.APPLICATION_JSON).build();
    }

    @Path("/{user}")
    @GET
    public String getUserSurveys(@PathParam("user") final String user) {
        return user + "'s surveys";
    }

    @Path("/{user}/{key}")
    @GET
    public String getSearchSurveys(@PathParam("user") final String user, @PathParam("key") final String key) {
        return user + "'s surveys with " + key;
    }
}
