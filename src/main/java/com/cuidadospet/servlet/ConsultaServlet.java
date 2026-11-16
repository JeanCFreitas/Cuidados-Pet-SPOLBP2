package com.cuidadospet.servlet;

import com.cuidadospet.model.Consulta;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/api/consultas")
public class ConsultaServlet extends CrudServlet<Consulta> {
    public ConsultaServlet() {
        super(Consulta.class, "consultas.json");
    }
}
