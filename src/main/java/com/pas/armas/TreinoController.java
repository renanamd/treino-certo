package com.pas.armas;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class TreinoController {
    private ArrayList<Treino> treinos = new ArrayList<>();
    private ArrayList<Aluno> alunos = new ArrayList<>();

    @GetMapping("/treinos/{IMC}")
    public Treino getTreino(@PathVariable int IMC) {

// TODO SUBSTITUIR A VARIAVEL IMC PELO OBJETO ALUNO

        Treino treinoA = new Treino();
        treinoA.setNome("Treino A");
        treinoA.setTipo("Perda de peso");

        Treino treinoB = new Treino();
        treinoB.setNome("Treino B");
        treinoB.setTipo("Hipertrofia");

        Treino treinoC = new Treino();
        treinoC.setNome("Treino C");
        treinoC.setTipo("Saude");

        if (IMC <= 10) {
            return treinoA;
        } else if (IMC >= 11 && IMC <= 20) {
            return treinoB;
        } else {
            return treinoC;
        }

    }


    @PostMapping("/treino")
    public String adicionarTreino(@RequestBody Treino treino) {
        treinos.add(treino);
        return "Adicionado com sucesso";
    }

//    @PutMapping(path="/{nome}")
//    public String atualizarArma(@RequestBody Aluno alunoNova, @PathVariable String nome) {
//        Aluno aluno = new Aluno();
//        aluno.setNome(nome);
//
//        alunos.set(alunos.indexOf(aluno), alunoNova);
//        return "Atualizada com sucesso";
//    }
//
//    @PatchMapping(path="/{nome}")
//    public String atualizarDano(@RequestBody Aluno alunoNova, @PathVariable String nome) {
//        Aluno alunoAntiga = getArma(nome);
//
//        alunoAntiga.setDano(alunoNova.getDano());
//        return "Dano atualizado com sucesso";
//    }
//
//    @DeleteMapping(path="/{nome}")
//    public String deletarArma(@PathVariable String nome) {
//        Aluno aluno = new Aluno();
//        aluno.setNome(nome);
//
//        alunos.remove(aluno);
//
//        return nome + " deletado com sucesso!";
//    }

}
