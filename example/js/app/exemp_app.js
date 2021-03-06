app_id = 229992460513152;

ModuloTonFaceJS.controller('AcoesFBCtrl', function ($scope, $http) {
    // Executa as funções básicas do FB e do Framework para 
    $scope.SetUp = function() {
            // Configuração da função a ser executada após o SetUp
            func_executada_onSetUp = function(response) {
                if (response.status === 'connected') {
                    $('#acoes_fb').hide();
                    $('#resultado_fb').show();
                    get_user_admin_pages();
                }else FB.login();

                get_current_user();
            }
            
            setUpFB(app_id);
    }

    // SignUp the user
	$scope.SignUpApp = function() {
            // url_redirect = 'tonjs.herokuapp.com/';
            url_redirect = 'localhost/TonFaceJS/example/';
            escopo = 'email, publish_stream, manage_pages';
            
            signup_app(app_id, escopo, url_redirect);
	}

    // LogOut user from FB
	$scope.LogOut = function() {
		signout_app();
	}

    // Send msg to the user feed
    $scope.PubFeed = function() {
        set_feed_msg(mensagem='testando', link='http://google.com.br');
    }
});