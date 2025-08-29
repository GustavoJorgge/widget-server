# Deploy - Backend

## 📋 Sobre o Projeto

Este projeto demonstra a aplicação prática de conceitos DevOps para deploy de aplicações backend na AWS, abordando desde containerização até orquestração e segurança.

## 🎯 Objetivos

Aplicar na prática papéis DevOps realizando o deploy completo do backend, incluindo:
- Containerização da aplicação
- Versionamento de imagens
- Automação com CI/CD
- Orquestração de containers
- Configuração de infraestrutura de rede
- Implementação de alta disponibilidade
- Análise de vulnerabilidades

## 🏗️ Arquitetura e Tecnologias

### Container e Registry
- **Docker**: Containerização da aplicação
- **Amazon ECR**: Registry para armazenamento e controle de versões das imagens
- **GitHub Actions**: Pipeline de CI/CD para automação do deploy

### Orquestração e Deploy
- **AWS App Runner**: Serviço inicial para deploy simplificado
- **Amazon ECS**: Orquestrador de containers para maior controle e escalabilidade

### Infraestrutura de Rede
- **VPC**: Virtual Private Cloud para isolamento da rede
- **Subnets**: Divisão da rede em sub-redes públicas e privadas
- **Multi-AZ**: Distribuição em múltiplas zonas de disponibilidade

### Load Balancing e Disponibilidade
- **Application Load Balancer (ALB)**: Distribuição de tráfego
- **Target Groups**: Agrupamento de targets para o load balancer
- **Alta Disponibilidade**: Configuração em múltiplas zonas

### Segurança
- **Trivy**: Scanner de vulnerabilidades para análise de:
 - Vulnerabilidades do código
 - Versões de dependências
 - Segurança das imagens Docker

## 🚀 Processo de Deploy

### 1. Containerização
- Build da Imagem no Docker
- Tag para controlar o ECR
### 2. CI/CD Pipeline
- Push do código para o GitHub
- GitHub Actions executa o pipeline automaticamente
- Build e push da imagem para o ECR
- Deploy automatizado na AWS

### 3. Infraestrutura
- Configuração de VPC com subnets públicas e privadas
- Setup do ECS Cluster
- Configuração do Application Load Balancer
- Definição dos Target Groups

### 4. Segurança
- Scan de vulnerabilidades com Trivy
- Análise de dependências
- Verificação de conformidade de segurança
