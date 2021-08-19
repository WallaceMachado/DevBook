package controllers

import "net/http"

// FazerLogin utiliza o e-mail e senha do usuário para autenticar na aplicação
func CarregarTelaDeLogin(w http.ResponseWriter, r *http.Request) {
	w.Write(([]byte("Tela de login")))
}
