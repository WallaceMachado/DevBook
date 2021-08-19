package controllers

import (
	"net/http"
	"webapp/src/utils"
)

// FazerLogin utiliza o e-mail e senha do usuário para autenticar na aplicação
func CarregarTelaDeLogin(w http.ResponseWriter, r *http.Request) {
	utils.ExecutarTemplate(w, "login.html", nil)
}
