package server

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"treino-certo/model"
)

func CalculateIMCHandler(w http.ResponseWriter, r *http.Request) {
	body, _ := ioutil.ReadAll(r.Body)
	fmt.Println("Corpo da solicitação:", string(body))
	r.Body = ioutil.NopCloser(bytes.NewBuffer(body))

	var req model.IMCRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		fmt.Println("Erro na decodificação:", err)
		http.Error(w, "Erro ao decodificar a solicitação", http.StatusBadRequest)
		return
	}

	imc := CalculateIMC(req.Weight, req.Height)
	res := model.IMCResponse{IMC: imc}
	err := json.NewEncoder(w).Encode(res)
	if err != nil {
		return
	}
}
