package model

type IMCRequest struct {
	Weight float64 `json:"weight"`
	Height float64 `json:"height"`
}

type IMCResponse struct {
	IMC float64 `json:"imc"`
}
