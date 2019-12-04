package survey;

import javax.ws.rs.core.Application;
import javax.ws.rs.ApplicationPath;

// tag::applicationPath[]
@ApplicationPath("Database")
// end::applicationPath[]
// tag::systemApplication[]
public class SystemApplication extends Application {

}
