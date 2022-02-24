## Git
Aparentemente foram adicionadas três páginas: pg1, pg2 e pg3, respectivamente, no commit com a seguinte mensagem: "juwupiter web e vários textos". 
 - id do commit: cc6f9a63fe2c6160a4260221a932e112af478951
 - autor: Anemaygi
 - data: 28/01/2022, 23:11 GMT-3

 ## Docker
 Para efetuar a build da imagem (e adicionar uma tag a ela) basta utilizar o seguinte comando:
 - docker build -t gsp-ep1 .
 
 Para fazer com que a porta 3000 do contêiner seja exposta na porta 8080 do hospedeiro basta utilizar o seguinte comando:
 - docker run -dp 8080:3000 gsp-ep1