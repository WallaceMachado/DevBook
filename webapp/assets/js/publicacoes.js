$('#nova-publicacao').on('submit', criarPublicacao);
$(document).on('click', '.curtir-publicacao', curtirPublicacao);


function criarPublicacao(evento) {
    evento.preventDefault();

    console.log("publicacoes")

    $.ajax({
        url: "/publicacoes",
        method: "POST",
        data: {
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val(),
        }
    }).done(function() {
        window.location = "/home";
    }).fail(function() {
        alert("Erro ao criar a publicação!");
    })
}

function curtirPublicacao(evento) {
    evento.preventDefault();

    const elementoClicado = $(evento.target);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

    //loading até que a reqquisição seja concluída
    elementoClicado.prop('disabled', true);
    $.ajax({
        url: `/publicacoes/${publicacaoId}/curtir`,
        method: "POST"
    }).done(function() {
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());

        contadorDeCurtidas.text(quantidadeDeCurtidas + 1);

       
    }).fail(function() {
        alert("Erro ao curtir a publicação!");
    }).always(function() {
        elementoClicado.prop('disabled', false);
        //apos a requisição
    });
}


