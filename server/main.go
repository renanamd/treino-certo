package server

import (
	"log"
	"net/http"
)

func Provedor() {
	http.HandleFunc("/treino-certo", CalculateIMCHandler)
	log.Println("Servidor iniciado na porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
