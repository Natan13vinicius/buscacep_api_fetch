// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Busca Cep</title>
//     <link rel="stylesheet" href="./node_modules/bootstrap/comp/bootstrap.css">
//     <link rel="stylesheet" href="./build/main.css">
// </head>
// <body>
//     <header id="cabecalho">
//         <div class="navbar navbar-expand-lg">
//             <div class="container">
//                 <h1>Busca Cep</h1>
//                 <button data-bs-toggle="collapse" data-bs-target="#menu" class="navbar-toggler" type="button">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <nav class="collapse navbar-collapse justify-content-end" id="menu">
//                     <ul class="nav nav-pills navbar-nav">
//                         <li class="nav-item">
//                             <a class="nav-link active" href="#sobre">Sobre</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#buscacep">Buscar cep</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     </header>

//     <section class="main container mt-4">
//         <label for="">Encontre endereços pela plataforma Busca CEP</label>
//         <input type="number" id="cep">
//         <button class="btn btn-primary" onclick="consultaEndereco()">Consultar</button>

//         <!-- resultado -->
//         <table class="mt-3 resultado table table-bordered table-striped">
//             <thead>
                
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Rua</td>
//                     <td id="resRua"></td>
//                 </tr>
//                 <tr>
//                     <td>Bairro</td>
//                     <td id="resBairro"></td>
//                 </tr>
//                 <tr>
//                     <td>Localidade</td>
//                     <td id="resLocalidade"></td>
//                 </tr>
//                 <tr>
//                     <td>UF</td>
//                     <td id="resUf"></td>
//                 </tr>
//             </tbody>
//         </table>
//     </section>

//     <script>
//         function consultaEndereco() {
//             // pegue o valor digitado em 'cep'
//             var cep = document.querySelector('#cep').value;

//             // nao permita que o codigo continue se a quantidade digitada for diferente que 8
//             if (cep.length !== 8) {
//                 alert('CEP inválido');
//                 return;
//             }

//             // crie uma variavel com o link da api e o numero digitado já concatenado
//             var url = `https://viacep.com.br/ws/${cep}/json/`;

//             // Fazer requisição na api para ter a resposta promise
//             fetch(url)
//                 .then(function(response) {
//                     // converter os dados para json e pegá-los para tratar
//                     response.json()
//                         .then(function(data) {
//                             console.log(data);
//                             mostrarEndereco(data);
//                         })
//                         .catch(function(error) {
//                             console.error('Erro ao converter resposta para JSON:', error);
//                         });
//                 })
//                 .catch(function(error) {
//                     console.error('Erro na requisição:', error);
//                 });
//         }

       

//         // mostrar endereço
//         function mostrarEndereco(dados) {
//             // pegar os elementos HTML que mostram o resultado
//             var resRua = document.querySelector('#resRua');
//             var resBairro = document.querySelector('#resBairro');
//             var resLocalidade = document.querySelector('#resLocalidade');
//             var resUf = document.querySelector('#resUf');

//              // tratar o erro
//         if(dados.erro){
//             alert("Não foi possivel identificar este cep")
//         }

//             // imprimir os dados na tela
//             resRua.textContent = dados.logradouro ;
//             resBairro.textContent = dados.bairro;
//             resLocalidade.textContent = dados.localidade ;
//             resUf.textContent = dados.uf;
//         }
//     </script>


// <!-- resRua.textContent = dados.logradouro ; -->

    
// </body>
// </html>
