package com.cuidadospet.servlet;

import com.cuidadospet.model.Animal;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/api/animais")
public class AnimalServlet extends CrudServlet<Animal> {
    public AnimalServlet() {
        super(Animal.class, "animais.json");
    }
}
