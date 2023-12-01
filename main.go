package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"treino-certo/model"
	"treino-certo/server"
)

func main() {

	requestBody, err := json.Marshal(model.IMCRequest{Weight: 70, Height: 50})
	if err != nil {
		fmt.Println("Erro ao codificar a requisição:", err)
		return
	}

	server.Provedor()
	resp, err := http.Post("http://localhost:8080/treino-certo", "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		fmt.Println("Erro ao fazer a solicitação:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Erro ao ler a resposta:", err)
		return
	}

	var imcResponse model.IMCResponse
	if err := json.Unmarshal(body, &imcResponse); err != nil {
		fmt.Println("Erro ao decodificar a resposta:", err)
		return
	}

	fmt.Printf("IMC calculado: %.2f\n", imcResponse.IMC)
}
