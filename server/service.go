package server

func CalculateIMC(weight, height float64) float64 {
	return weight / (height * height)
}
