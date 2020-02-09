Projeto desenvolvido em ambiente Windows, abaixo seguem as instruçoes de instalação e configuração.

# BackEnd

No back-end foi desenvolvida uma API Rest. Neste projeto foi utilizado o Spring Boot, Maven, JPA e Swagger. No banco de dados foi utilizado o MySql.

### Instalação
 
- __Descompacte o arquivo zip `api-rest` da pasta backend e importe o projeto no eclipse como um projeto Maven existente__

- __Configuração do banco de dados MySql__

No arquivo `application.properties` eu já deixei configurado um banco de dados em um servidor que eu possuo. Se você quiser utilizar outro servidor de banco de dados, é só configurar neste arquivo. 
Eu configurei o Spring Boot para criar as tabelas automaticamente quando subir a aplicação, porém se for necessário eu deixei o sql das tabelas na pasta do backend.

- __Subir o servidor da Api Rest__

Em `src/main/java`, no pacote `com.testebetha.apirest` execute a classe `ApiRestApplication.java` em Run As -> Java Application, para subir a api. 

- __Swagger__

Eu utilizei o Swagger para facilitar a compreensão e visualização da api. Após o servidor estar rodando, você poderá acessar a api através da url `sua_url/swagger-ui.html`, no lugar de `sua_url` coloque a url que a api está rodando.

- __Após esses passos a api já estará rodando__

# FrontEnd

O front-end foi desenvolvido com Angularjs, Bower, Nodejs, Bootstrap, entre outros. 

### Instalação

- __Baixe os arquivos do frontend para uma pasta de sua preferência__

- __Configure a url base da api__

No arquivo:  `js/value/configValue.js`  altere o valor de baseUrl para a url que a api esta rodando, que foi configurada no backend.

- __Instale as dependências do projeto__

Na pasta raiz execute o comando `bower install` para instalar as dependências, caso não tenha o bower na instalado na sua máquina, será necessário instalar.

- __Suba o servidor para a aplicação__

Vamos utilizar o servidor http-server. Na pasta raiz execute o comando `http-server -c-1`, para rodar a aplicação, caso não tenha o http-server instalado na sua máquina, será necessário instala-lo globalmente. 

- __Abra a aplicação no navegador__

Após subir o servidor, o terminal irá informar em qual url o servidor esta rodando. Acesse esse endereço no seu navegador. 



