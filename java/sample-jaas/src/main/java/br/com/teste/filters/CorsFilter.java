package br.com.teste.filters;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class CorsFilter implements ContainerResponseFilter, ContainerRequestFilter {

	@Override
	public void filter(ContainerRequestContext requestContext, ContainerResponseContext response) throws IOException {
		System.out.println("Cors filter response...");
		response.getHeaders().add("Access-Control-Allow-Origin", "http://localhost:4200");
		response.getHeaders().add("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
		response.getHeaders().add("Access-Control-Max-Age", "-1");
		response.getHeaders().add("Access-Control-Allow-Headers", "accept, Authorization, Content-Type");
	}

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		System.out.println("Cors filter request...");
		requestContext.getHeaders().add("Access-Control-Allow-Origin", "http://localhost:4200");
		requestContext.getHeaders().add("Access-Control-Max-Age", "-1");
		requestContext.getHeaders().add("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
		requestContext.getHeaders().add("Access-Control-Allow-Headers", "accept, authorization, Content-Type");
	}

}
