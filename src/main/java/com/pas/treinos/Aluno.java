package com.pas.treinos;

public class Aluno {
    private String nome;
    private int idade;
    private String sexo;
    private int IMC;

    public Aluno() {
    }

    public Aluno(String nome, int idade, String sexo, int IMC) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.IMC = IMC;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIMC() {
        return IMC;
    }

    public void setIMC(int IMC) {
        this.IMC = IMC;
    }
}
