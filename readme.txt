------> BackEnd

No back-end foi desenvolvida uma API Rest. Neste projeto foi utilizado o Spring Boot, Maven, JPA e Swagger. No banco de dados foi utilizado o MySql.

Instalação
 
- Importe o projeto `api-rest` no eclipse como um projeto Maven existente. 


- Configuração do banco de dados MySql

No arquivo `application.properties` eu já deixei configurado um banco de dados em um servidor que eu possuo. Se você quiser utilizar outro servidor de banco de dados, é só configurar neste arquivo. 
Eu configurei o Spring Boot para criar as tabelas automaticamente quando subir a aplicação, porém se for necessário eu deixei o sql das tabelas na pasta do backend.

- Subir o servidor da Api Rest

Em `src/main/java`, no pacote `com.testebetha.apirest` execute a classe `ApiRestApplication.java` em Run As -> Java Application, para subir a api. 

- Swagger

Eu utilizei o Swagger para facilitar a compreensão e visualização da api. Após o servidor estar rodando, você poderá acessar a api através da url `sua_url/swagger-ui.html`, no lugar de `sua_url` coloque a url que a api está rodando.


- Após esses passos a api já estará rodando.

------------------------------------------------------------------------


------> FrontEnd

O front-end foi desenvolvido com Angularjs, Bower, Nodejs, Bootstrap, entre outros. 

Instalação

- Baixe os arquivos do frontend para uma pasta de sua preferência.

- Configure a url base da api:

No arquivo:  `js/value/configValue.js`  altere o valor de baseUrl para a url que a api esta rodando, que foi configurada no backend.

- Instale as dependências do projeto

Na pasta raiz execute o comando `bower install` para instalar as dependências, caso não tenha o bower na instalado na sua máquina, será necessário instalar.

- Suba o servidor para a aplicação

Vamos utilizar o servidor http-server. Na pasta raiz execute o comando `http-server -c-1`, para rodar a aplicação, caso não tenha o http-server instalado na sua máquina, será necessário instala-lo globalmente. 

- Abra a aplicação no navegador

Após subir o servidor, o terminal irá informar em qual url o servidor esta rodando. Acesse esse endereço no seu navegador. 



