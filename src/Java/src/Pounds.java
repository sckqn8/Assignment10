import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

@Path("/convert")
public class Pounds {

	@GET
	@Path("/pounds/{p}")
	@Produces("application/xml")
	public Response calculateKilograms(@PathParam("p")Double p)
	{
		Double Kilograms = p/2.2046;
		Kilograms = (double) Math.round(Kilograms);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("Kilograms", Kilograms);
		String result = ""+jsonObject;
		return Response.status(200).entity(result)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
				.build();
	}
}
