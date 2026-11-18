# Plano de Testes de Usabilidade — INTEGRA Portaria

> **Status:** plano preparado. **Nenhum teste foi realizado ainda.** Todas as tabelas de resultado estão em branco e devem ser preenchidas somente com dados observados nas sessões reais.

## 1. Objetivo

Avaliar se profissionais de SST conseguem utilizar o módulo **Portaria — Controle de Acesso** do INTEGRA para consultar trabalhadores, verificar requisitos e compreender os resultados de liberação (APTO / NÃO APTO / alertas).

O que está sendo avaliado é a **interface**, e não o participante. Se algo for difícil de entender, o problema é do protótipo.

## 2. Escopo e limites do protótipo

- Protótipo de demonstração acadêmica, com **dados fictícios** (trabalhadores, empresas, matrículas, documentos).
- Sem integração com Suape, catracas, biometria, sistemas corporativos ou APIs externas.
- Autenticação simulada; histórico salvo apenas no navegador (localStorage).
- Os resultados do teste valem para este protótipo. Não representam validação do produto em operação real.

## 3. Participantes

| Item | Proposta |
|---|---|
| Perfil | Técnicos de Segurança do Trabalho, profissionais de SST, supervisores com experiência em ambientes industriais ou portuários |
| Quantidade inicial | 3 a 5 participantes |
| Natureza | **Teste exploratório.** O número é uma proposta para identificar problemas de usabilidade, não uma amostra estatística; não permite generalizar percentuais |
| Recrutamento | Contatos locais da equipe; participação voluntária |

**Cuidados éticos (ajustar às regras da disciplina):**
- Explicar o objetivo acadêmico e que a participação é voluntária e pode ser interrompida a qualquer momento.
- Registrar o consentimento (verbal ou escrito) antes de iniciar. Gravar tela ou áudio apenas com autorização.
- Identificar participantes por código (P1, P2, ...) nos relatórios; não publicar nomes ou empresas sem autorização.
- Informar que os dados exibidos no sistema são fictícios.

## 4. Preparação do ambiente

- [ ] Abrir o protótipo em **janela anônima** (ou limpar o histórico antes de cada participante).
- [ ] Endereço direto do modo Portaria: `.../integra-seguranca-operacional-projeto/#portaria`
- [ ] Dispositivo usado: ☐ monitor ☐ tablet ☐ notebook — anotar na ficha.
- [ ] Para restaurar o estado inicial entre participantes: abrir `#sst` → **Pendências** → *Limpar solicitações*; **Histórico** → *Restaurar histórico de exemplo*.
- [ ] Facilitador e observador definidos; ficha de observação impressa ou aberta.
- [ ] Participante **não** recebe manual nem demonstração prévia.

## 5. Roteiro da sessão (≈ 20 a 25 min)

1. **Acolhida (3 min):** explicar objetivo, consentimento, dados fictícios, pensar em voz alta.
2. **Contexto (1 min):** "Você está na portaria de uma obra industrial/portuária e usará um sistema novo para verificar se trabalhadores podem entrar."
3. **Tarefas (10 a 15 min):** ler uma tarefa por vez, sem dar instruções de navegação.
4. **Questionário pós-teste (5 min).**
5. **Encerramento:** agradecer e perguntar se há algo mais a comentar.

**Regras do facilitador:** não explicar a interface; se o participante pedir ajuda, responder "O que você faria se eu não estivesse aqui?"; só intervir após impasse claro (anotar como "ajuda necessária"); não induzir respostas.

## 6. Tarefas

Entregar o texto abaixo ao participante. **Não** informar quais botões ou telas usar.

| # | Enunciado para o participante |
|---|---|
| T1 | "O trabalhador **Carlos Mendes** chegou para realizar a **substituição de peles de vidro na Torre B — Fachada norte**. Verifique se ele pode entrar." |
| T2 | "Entre os trabalhadores cadastrados, **encontre alguém que esteja com um documento vencido** para a substituição de peles de vidro na Torre B e **explique por que essa pessoa não está apta**." |
| T3 | "Para a mesma atividade, **identifique um trabalhador que esteja apto, mas com algum documento perto de vencer**. Diga qual documento é." |
| T4 | "**Verifique um trabalhador que esteja sem um requisito obrigatório** e diga qual requisito falta." |
| T5 | "**Consulte o registro de uma das verificações que você fez** e diga o resultado e a data/horário." |

**Referência para o facilitador (não mostrar ao participante):** com os dados fictícios atuais, T1 → Carlos, APTO. T2 → Marina, ASO vencido. T3 → Ana, ASO próximo do vencimento (APTO com atenção). T4 → Paulo, NR-35 ausente (ou Carlos na Torre C, com PT e Plano de Resgate ausentes). T5 → qualquer registro no histórico. Datas são relativas ao dia do teste: o ASO de Marina sempre aparece vencido e o de Ana sempre próximo do vencimento.

**Critério de sucesso por tarefa**
- T1: identifica corretamente APTO e diz que o acesso está autorizado.
- T2: aponta o documento vencido e explica o motivo do bloqueio com as próprias palavras.
- T3: identifica o documento e entende que não bloqueia o acesso.
- T4: aponta o requisito ausente e diferencia de documento vencido.
- T5: abre o registro e informa resultado e horário.

## 7. Métricas de observação (uma ficha por participante)

**Participante:** P__  **Data:** __/__/____  **Dispositivo:** __________  **Facilitador/observador:** __________

| Tarefa | Concluída? (sim / não / com ajuda) | Tempo (opcional) | Dificuldade observada (0 = nenhuma, 3 = alta) | Erros ou confusões | Comentários do participante |
|---|---|---|---|---|---|
| T1 | | | | | |
| T2 | | | | | |
| T3 | | | | | |
| T4 | | | | | |
| T5 | | | | | |

Observações gerais (hesitações, caminhos inesperados, termos que geraram dúvida):

&nbsp;

### Consolidação (preencher após todas as sessões)

| Tarefa | Concluíram sem ajuda | Concluíram com ajuda | Não concluíram | Tempo médio (opcional) | Principais problemas |
|---|---|---|---|---|---|
| T1 | /__ | /__ | /__ | | |
| T2 | /__ | /__ | /__ | | |
| T3 | /__ | /__ | /__ | | |
| T4 | /__ | /__ | /__ | | |
| T5 | /__ | /__ | /__ | | |

> Com 3 a 5 participantes, reporte contagens (ex.: "2 de 4") e problemas qualitativos, não percentuais.

## 8. Questionário pós-teste

**Perfil (opcional, sem identificar a pessoa)**
- Função: ______________  Tempo de experiência em SST: ______ anos
- Já usou sistema digital de controle de acesso ou verificação de documentos? ☐ sim ☐ não

**Perguntas**

1. De 1 a 5, quão fácil foi utilizar a interface? (1 = muito difícil, 5 = muito fácil) ☐1 ☐2 ☐3 ☐4 ☐5
2. As informações estavam claras? ☐ Sim ☐ Em parte ☐ Não — O que não ficou claro? ______________
3. Você compreendeu rapidamente os resultados APTO / NÃO APTO? ☐ Sim ☐ Em parte ☐ Não — Comentário: ______________
4. O sistema seria útil como apoio à verificação na portaria? ☐ Sim ☐ Talvez ☐ Não — Por quê? ______________
5. O que você mudaria na interface? ______________
6. Qual informação você considera indispensável e não está presente? ______________

**Escala de satisfação geral** (marque um)
☐ 1 Muito insatisfeito ☐ 2 Insatisfeito ☐ 3 Neutro ☐ 4 Satisfeito ☐ 5 Muito satisfeito

**Sugestões livres:**

&nbsp;

## 9. Registro das melhorias

Preencher depois das sessões. Registre apenas feedback realmente recebido.

| Feedback recebido | Problema identificado | Prioridade (alta / média / baixa) | Alteração planejada | Alteração implementada (data / versão) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## 10. Como relatar os resultados no trabalho acadêmico

- Descrever o método (participantes, tarefas, ambiente) conforme este plano.
- Apresentar apenas dados coletados: contagens por tarefa, problemas observados, citações autorizadas, respostas do questionário.
- Declarar as limitações: amostra pequena e por conveniência, protótipo com dados fictícios, ambiente fora da portaria real.
- Relacionar cada melhoria implementada ao feedback que a originou (tabela da seção 9).
