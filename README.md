# INTEGRA — Segurança Operacional Conectada (PoC)

PoC acadêmica que demonstra a verificação de requisitos de segurança antes de liberar um trabalhador para uma atividade em ambiente industrial ou portuário:

**Trabalhador → empresa → qualificações e documentos → área → atividade → verificação → APTO / NÃO APTO**

> Todos os dados são **fictícios**. A PoC **não** está integrada a Suape, catracas, biometria, sistemas corporativos ou APIs externas.

**Demo publicada:** https://arthurmedeiiros3-alt.github.io/integra-seguranca-operacional-projeto/

## Como executar

É um único arquivo (`index.html`), sem dependências e sem backend.

- **Local:** baixe o repositório e dê duplo clique em `index.html` (ou rode `python -m http.server 8000` na pasta e abra `http://localhost:8000`).
- **GitHub Pages:** *Settings → Pages → Deploy from a branch → main / root*.

### Links diretos (pulam a tela de entrada)

| Endereço | Abre |
|---|---|
| `.../#sst` | Módulo administrativo / SST |
| `.../#portaria` | Módulo Portaria — Controle de Acesso |

## Módulos

**SST / Supervisor (administrativo)**
- Painel, Verificação de Segurança, Pendências e Histórico.
- Verificação por trabalhador + atividade, com tabela de requisitos e alertas de vencimento.
- Solicitação simulada de renovação ou regularização (modal de confirmação, status "Renovação solicitada", lista em Pendências).

**Portaria — Controle de Acesso** (fluxo próprio, sem funções administrativas)
- Busca de trabalhador por nome ou matrícula, seleção de área e atividade.
- Resultado em tela cheia: **APTO / Acesso autorizado** ou **NÃO APTO / Acesso não autorizado**, com trabalhador, empresa, área, atividade e horário.
- Motivo do bloqueio com distinção entre **REQUISITO AUSENTE** e **DOCUMENTO VENCIDO**.
- **ATENÇÃO** para documento próximo do vencimento (não bloqueia).
- Mostra se existe **RENOVAÇÃO / REGULARIZAÇÃO SOLICITADA**, sem poder aprovar nada.
- Histórico recente e completo, com detalhe de cada verificação.

Os dois módulos usam **a mesma função de verificação** e compartilham histórico e solicitações no navegador (localStorage).

## Regras de verificação

- Requisito **ausente** ou **vencido** → NÃO APTO.
- Documento que vence em até 30 dias → continua APTO, com alerta de atenção.
- Uma solicitação de renovação/regularização **não** muda o resultado; só a regularização do documento libera.

## Dados fictícios

| Trabalhador | Matrícula | Empresa | Situação |
|---|---|---|---|
| Carlos Mendes | MAT-20418 | Vidraça Norte Engenharia | Tudo válido |
| Marina Souza | MAT-20431 | Vidraça Norte Engenharia | ASO vencido |
| Paulo Lima | MAT-30207 | Estrutura Sul Serviços | Sem NR-35 |
| Ana Beatriz Costa | MAT-20399 | Vidraça Norte Engenharia | ASO próximo do vencimento |

| Área | Atividade |
|---|---|
| Torre B — Fachada norte | Substituição de peles de vidro (completa) · Inspeção visual de fachada em solo |
| Torre C — Fachada sul | Substituição de peles de vidro (faltam PT e Plano de Resgate) |

As datas são calculadas a partir do dia atual, então os cenários continuam válidos em qualquer data.

## Roteiro de demonstração (Portaria)

1. **Carlos** → Torre B → Substituição de peles de vidro → **APTO**.
2. **Marina** → mesma atividade → **NÃO APTO**, ASO vencido.
3. **Paulo** → mesma atividade → **NÃO APTO**, NR-35 ausente (na *Inspeção visual em solo* ele fica APTO).
4. **Ana** → mesma atividade → **APTO** com ATENÇÃO (ASO perto de vencer).
5. **Carlos** → Torre C → **NÃO APTO**, PT e Plano de Resgate ausentes.
6. Abrir o histórico e o detalhe de uma verificação.

## Testes de usabilidade

Plano, roteiro de tarefas, ficha de observação, questionário e tabela de melhorias: [`USABILIDADE.md`](USABILIDADE.md). Os resultados ainda **não** foram coletados.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Aplicação completa (HTML, CSS e JavaScript) |
| `USABILIDADE.md` | Plano de Testes de Usabilidade — INTEGRA Portaria |
| `README.md` | Este arquivo |

## Limitações

- Dados fictícios e estáticos; sem backend, banco de dados ou autenticação real.
- Histórico e solicitações ficam só no navegador (limpar dados do navegador apaga tudo).
- Sem upload de certificados, OCR, biometria, catraca ou integração externa.
- A portaria apenas consulta; não há fluxo de aprovação nem de baixa de pendências.
- Não validado com usuários reais até a conclusão dos testes de usabilidade.

## Próximos passos (após os testes com técnicos de SST)

- Priorizar na tabela de melhorias os problemas observados e implementar os de maior impacto.
- Reavaliar os textos de status (APTO, ATENÇÃO, REQUISITO AUSENTE, DOCUMENTO VENCIDO) com a linguagem usada pelos técnicos.
- Avaliar leitura de QR code ou crachá como alternativa à busca manual, se os participantes pedirem.
- Definir o fluxo de baixa de pendência: quem confirma a regularização e como o resultado passa a APTO.
