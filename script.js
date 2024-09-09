$(function(){
    // Defina a senha correta
    const correctPassword = "pbsapmn";
    // Defina a URL para redirecionamento
    const redirectUrl = "https://lusquiinhaa.github.io/photos/"; // Corrigido o caminho

    $("#login").submit(function(e){
        e.preventDefault();
        
        // Obtenha o valor da senha
        const enteredPassword = $(".pass").val();

        if (enteredPassword === correctPassword) {
            // Redirecionar para a nova página
            window.location.href = redirectUrl;
        } else {
            alert("Senha incorreta. Tente novamente.");
            $(".login").addClass("init-shake");
            setTimeout(function(){
                $(".login").removeClass("init-shake");
            }, 1000);
        }
    });
    
    $(".pass").on("keypress", function(){
        $(".arrow").css("opacity", "1");
    });
});
