package com.cuidadospet.model;

/** Classe base: toda entidade possui um id. */
public abstract class Entidade {
    private int id;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
}
