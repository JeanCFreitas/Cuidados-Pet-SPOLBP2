package com.cuidadospet.servlet;

import com.cuidadospet.model.Tutor;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/api/tutores")
public class TutorServlet extends CrudServlet<Tutor> {
    public TutorServlet() {
        super(Tutor.class, "tutores.json");
    }
}
