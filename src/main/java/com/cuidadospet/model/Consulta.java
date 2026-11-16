package com.cuidadospet.model;

public class Consulta extends Entidade {
    /** Data no formato ISO (yyyy-MM-dd), simples de serializar em JSON. */
    private String data;
    private String nomeAnimal;
    private String nomeVeterinario;
    private String motivo;
    private float valor;

    public Consulta() {}

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
    public String getNomeAnimal() { return nomeAnimal; }
    public void setNomeAnimal(String nomeAnimal) { this.nomeAnimal = nomeAnimal; }
    public String getNomeVeterinario() { return nomeVeterinario; }
    public void setNomeVeterinario(String nomeVeterinario) { this.nomeVeterinario = nomeVeterinario; }
    public String getMotivo() { return motivo; }
    public void setMotivo(String motivo) { this.motivo = motivo; }
    public float getValor() { return valor; }
    public void setValor(float valor) { this.valor = valor; }
}
