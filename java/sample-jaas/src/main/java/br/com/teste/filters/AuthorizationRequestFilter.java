package br.com.teste.filters;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.SecurityContext;

public class AuthorizationRequestFilter implements ContainerRequestFilter {

	@Override

	public void filter(ContainerRequestContext requestContext) throws IOException {

		final SecurityContext securityContext = requestContext.getSecurityContext();

        String fullUri = requestContext.getUriInfo().getAbsolutePath().toString();
        System.out.println("Verificando autorizao para uri=" + fullUri + " com usuÃ¡rio " + securityContext.getUserPrincipal());
        System.out.println(fullUri);

       /* if (securityContext == null || securityContext.getUserPrincipal() == null || !securityContext.isUserInRole("auth"))
        {
        	JsonObjectBuilder jsonObjBuilder = Json.createObjectBuilder();
    		jsonObjBuilder.add("Erro de AutenticaÃ§Ã£o", "VocÃª nÃ£o estÃ¡ autorizado acessar este recurso, Entre no sistema por favor.");
    		JsonObject jsonObj = jsonObjBuilder.build();
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity(jsonObj).build());
        }*/

	}
}
