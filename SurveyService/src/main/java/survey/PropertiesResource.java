package survey;

import java.util.List;
import java.util.ArrayList;
import java.util.Properties;
import javax.ws.rs.*;
import java.io.File;
import java.io.*;
import javax.ws.rs.core.MediaType;
import javax.json.JsonObjectBuilder;
import javax.json.JsonObject;
import javax.json.Json;
import javax.ws.rs.core.Response;

@Path("surveys")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PropertiesResource {

    @GET
    public Response getSurveys() {
	    System.out.println("CALLED");
            JsonObjectBuilder survey=Json.createObjectBuilder();
	    survey.add("user","Andy");
	    survey.add("question", "Beans or no?");
	    JsonObject built=survey.build();
	    return Response.ok(built,MediaType.APPLICATION_JSON).build();
    }

    @POST
    public String addSurvey(String surveyJSON) { return "test1"; }

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
