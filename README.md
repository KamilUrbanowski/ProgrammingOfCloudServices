# Programming Of Cloud Services

Hello to our little ☁ project.

# How to start

## Prerequisites
npm, docker-desktop, kubectl

## Local dev

1. Install dependencies in /server and /client by running "npm i" in them
2. Run docker-compose up --build to build it and deploy containers in docker
3. Access via localhost:3050

## K8s run

1. Verify if kubectl is installed ("kubectl version")
1. Enable Kubernetes in docker-desktop (settings -> kubernetes)
2. In Docker set Kubernetes context to docker-desktop (after that check with "kubectl config get-contexts")
3. After all that command "kubectl get all" should point to default namespace in docker-desktop context 
    and there should be a service/kubernetes resource or something.
4. Run "kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml" to 
    install nginx ingress for routing.
5. In root folder of the project ("ProgrammingOfCloudServices") run "kubectl apply -f manifests"
6. Enjoy on localhost (without the port).


## Common problems

If you are switching from docker-compose to running a kubernetes cluster you have to run "docker-compose down" because ingresses will clash.
The other way around to switch from k8s cluster to docker-compose way you have to run:
"kubectl delete -f manifests" and "kubectl delete -f  https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml".

# Dokumentacja

## Architektura

Każdy element systemu jest kontenerem Docker a do zarządzania nimi jest wykorzystany Kubernetes. System jest zbudowany z następujących elementów:
1.	**Serwera proxy** *nginx* którego zadaniem jest przekierowanie żądań klienta do odpowiednich Podów.
2.	**Frontend** w postaci *Reacta* do iterakcji z użytkownikiem.
3.	**Backend** na silniku *Node.js* z frameworkiem *Express* pozwalającym na łatwe zbudowanie REST API dla frontendu.
4.	**Baza danych** *PostgreSQL* na której przechowywane są wiadomości.

![Diagram architektury](./documentation/DiagramArchitektury.drawio.svg)

## Przypadki użycia

Aplikacja ma służyć do dystrybuowania wiadomości na wspólnym kanale pomiędzy zarejestrowanymi użytkownikami.

![Diagram przypadków użycia](./documentation/255927176_487888469032763_4747737515049667795_n.png)


