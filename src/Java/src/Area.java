import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

@Path("/area")
public class Area {

	@GET
	@Path("/square/{s}")
	@Produces("application/json")
	public Response squareArea(@PathParam("s")int s)
	{
		int area = s*s;
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("SquareArea", area);
		String result = ""+jsonObject;
		return Response.status(200).entity(result)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
				.build();
	}
	
	@GET
	@Path("/rectangle/{l}/{b}")
	@Produces("application/xml")
	public Response squareRectangle(@PathParam("l")int l, @PathParam("b")int b)
	{
		int area = l*b;
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("RectangleArea", area);
		String result = ""+jsonObject;
		return Response.status(200).entity(result)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
				.build();
	}
}
