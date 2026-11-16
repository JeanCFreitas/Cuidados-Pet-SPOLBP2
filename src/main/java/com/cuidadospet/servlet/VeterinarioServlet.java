package com.cuidadospet.servlet;

import com.cuidadospet.model.Veterinario;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/api/veterinarios")
public class VeterinarioServlet extends CrudServlet<Veterinario> {
    public VeterinarioServlet() {
        super(Veterinario.class, "veterinarios.json");
    }
}
