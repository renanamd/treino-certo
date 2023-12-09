package main

import (
	"encoding/json"
	"log"
	"net/http"
	_ "strconv"
)

// STRUCT para receber os dados de entrada
type Input struct {
	Weight float64 `json:"peso"`   // peso em kg
	Height float64 `json:"altura"` // altura em metros
}

// STRUCT para enviar a resposta
type Output struct {
	IMC float64 `json:"imc"` //IMC calculado
}

func calculateBMI(weight, height float64) float64 {
	return weight / (height * height)
}

func imcResponse(w http.ResponseWriter, r *http.Request) {
	var input Input

	// Decodifica o corpo da request
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Calcula o IMC
	imc := calculateBMI(input.Weight, input.Height)

	// Envia a resposta
	json.NewEncoder(w).Encode(Output{IMC: imc})
}

func main() {
	http.HandleFunc("/calculateIMC", imcResponse)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
