package com.cuidadospet.model;

public class Animal extends Entidade {
    private String nome;
    private String especie;
    private String raca;
    private int idade;
    private float peso;
    private String nomeTutor;

    public Animal() {}

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEspecie() { return especie; }
    public void setEspecie(String especie) { this.especie = especie; }
    public String getRaca() { return raca; }
    public void setRaca(String raca) { this.raca = raca; }
    public int getIdade() { return idade; }
    public void setIdade(int idade) { this.idade = idade; }
    public float getPeso() { return peso; }
    public void setPeso(float peso) { this.peso = peso; }
    public String getNomeTutor() { return nomeTutor; }
    public void setNomeTutor(String nomeTutor) { this.nomeTutor = nomeTutor; }
}
