#!/bin/bash

echo "Digite em qual porta do computador hospedeiro a aplicação deve rodar."

read INPUT
PORT=$INPUT

echo "A porta escolhida foi: ${PORT}."

docker build -t gsp-ep1 .

docker run -dp ${PORT}:3000 gsp-ep1