------> BackEnd

No back-end foi desenvolvida uma API Rest. Neste projeto foi utilizado o Spring Boot, Maven, JPA e Swagger. No banco de dados foi utilizado o MySql.

Instala��o
 
- Importe o projeto `api-rest` no eclipse como um projeto Maven existente. 


- Configura��o do banco de dados MySql

No arquivo `application.properties` eu j� deixei configurado um banco de dados em um servidor que eu possuo. Se voc� quiser utilizar outro servidor de banco de dados, � s� configurar neste arquivo. 
Eu configurei o Spring Boot para criar as tabelas automaticamente quando subir a aplica��o, por�m se for necess�rio eu deixei o sql das tabelas na pasta do backend.

- Subir o servidor da Api Rest

Em `src/main/java`, no pacote `com.testebetha.apirest` execute a classe `ApiRestApplication.java` em Run As -> Java Application, para subir a api. 

- Swagger

Eu utilizei o Swagger para facilitar a compreens�o e visualiza��o da api. Ap�s o servidor estar rodando, voc� poder� acessar a api atrav�s da url `sua_url/swagger-ui.html`, no lugar de `sua_url` coloque a url que a api est� rodando.


- Ap�s esses passos a api j� estar� rodando.

------------------------------------------------------------------------


------> FrontEnd

O front-end foi desenvolvido com Angularjs, Bower, Nodejs, Bootstrap, entre outros. 

Instala��o

- Baixe os arquivos do frontend para uma pasta de sua prefer�ncia.

- Configure a url base da api:

No arquivo:  `js/value/configValue.js`  altere o valor de baseUrl para a url que a api esta rodando, que foi configurada no backend.

- Instale as depend�ncias do projeto

Na pasta raiz execute o comando `bower install` para instalar as depend�ncias, caso n�o tenha o bower na instalado na sua m�quina, ser� necess�rio instalar.

- Suba o servidor para a aplica��o

Vamos utilizar o servidor http-server. Na pasta raiz execute o comando `http-server -c-1`, para rodar a aplica��o, caso n�o tenha o http-server instalado na sua m�quina, ser� necess�rio instala-lo globalmente. 

- Abra a aplica��o no navegador

Ap�s subir o servidor, o terminal ir� informar em qual url o servidor esta rodando. Acesse esse endere�o no seu navegador. 



