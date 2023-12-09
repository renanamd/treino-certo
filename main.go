package main

import (
	"encoding/json"
	"log"
	"net/http"
	_ "strconv"
)

// STRUCT para receber os dados de entrada
type Input struct {
	Peso   float64 `json:"peso"`
	Altura float64 `json:"altura"`
}

// STRUCT para enviar a resposta
type Output struct {
	IMC float64 `json:"imc"` //IMC calculado
}

func calculateIMC(peso, altura float64) float64 {
	return peso / (altura * altura)
}

func imcResponse(w http.ResponseWriter, r *http.Request) {
	var input Input

	// Decodifica o corpo da request
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Calcula o IMC
	imc := calculateIMC(input.Peso, input.Altura)

	// Envia a resposta
	json.NewEncoder(w).Encode(Output{IMC: imc})
}

func main() {
	http.HandleFunc("/calculateIMC", imcResponse)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
