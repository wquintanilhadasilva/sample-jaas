package br.com.teste.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class EverythingFilter implements Filter {
/*
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
*/
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain filter)
			throws IOException, ServletException {
		System.out.printf("Access-Control-Allow-Origin=%s", "http://localhost:4200");
		System.out.printf("Access-Control-Allow-Methods=%s", "OPTIONS, GET, POST, PUT, DELETE");
		System.out.printf("Access-Control-Max-Age=%s", "-1");
		System.out.printf("Access-Control-Allow-Headers=%s", "accept, Authorization, Content-Type");

		filter.doFilter(arg0, arg1);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
