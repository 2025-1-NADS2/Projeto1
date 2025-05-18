# 🧩 Design System do Projeto

Este Design System tem como objetivo padronizar a identidade visual e a experiência do usuário ao longo de todas as interfaces do projeto. Ele define diretrizes para cores, tipografia, espaçamentos, estilos e componentes reutilizáveis, assegurando consistência visual e facilidade de manutenção.



---

## 🎨 Paleta de Cores

| Cor                       | Código Hex | Visual                                      |
|--------------------------|------------|---------------------------------------------|
| Amarelo                  | `#FFE910`  | <span style="background-color:#FFE910; padding: 5px 20px; display:inline-block;"></span> |
| Dourado                  | `#D3C00D`  | <span style="background-color:#D3C00D; padding: 5px 20px; display:inline-block;"></span> |
| Verde Água Claro         | `#BBFBF9`  | <span style="background-color:#BBFBF9; padding: 5px 20px; display:inline-block;"></span> |
| Verde Água               | `#1CEAE4`  | <span style="background-color:#1CEAE4; padding: 5px 20px; display:inline-block;"></span> |
| Verde Claro              | `#D1EDDA`  | <span style="background-color:#D1EDDA; padding: 5px 20px; display:inline-block;"></span> |
| Amarelo Pastel           | `#FFFAC5`  | <span style="background-color:#FFFAC5; padding: 5px 20px; display:inline-block;"></span> |
| Amarelo Muito Claro      | `#FFFBDE`  | <span style="background-color:#FFFBDE; padding: 5px 20px; display:inline-block;"></span> |
| Cinza Escuro             | `#4F4F4F`  | <span style="background-color:#4F4F4F; padding: 5px 20px; display:inline-block;"></span> |
| Cinza                    | `#B3B3B3`  | <span style="background-color:#B3B3B3; padding: 5px 20px; display:inline-block;"></span> |
| Verde Acinzentado        | `#B7D2C1`  | <span style="background-color:#B7D2C1; padding: 5px 20px; display:inline-block;"></span> |
| Rosa                     | `#FF254A`  | <span style="background-color:#FF254A; padding: 5px 20px; display:inline-block;"></span> |
| Rosa Claro               | `#F4C2CB`  | <span style="background-color:#F4C2CB; padding: 5px 20px; display:inline-block;"></span> |

---

## 🔤 Tipografia

### Fontes Utilizadas

- **Fonte Principal:** `Poppins`, sans-serif
- **Fonte Secundária:** `Open Sans`, sans-serif

### Tamanhos e Estilos

| Elemento                  | Tamanho | Peso | Altura da Linha |
|---------------------------|---------|------|-----------------|
| Título Principal          | 32px    | 700  | 43.2px          |
| Título Destaque           | 64px    | 600  | 96px            |
| Subtítulo de Seção        | 32px    | 600  | 43.2px          |
| Subtítulo                 | 16px    | 400  | 24px            |
| Parágrafo                 | 18px    | 400  | 27px            |
| Subtítulo Pequeno         | 15px    | 400  | 22.5px          |
| Texto Pequeno             | 10px    | 400  | 15px            |

---

## 🧱 Espaçamentos e Bordas

| Variável         | Valor |
|------------------|-------|
| `--radius-s`     | 4px   |
| `--radius-m`     | 8px   |
| `--radius-l`     | 16px  |
| Spacing Médio    | 48px  |

---

## 🖋️ Exemplo de Uso das Classes CSS

```css
.titulo-principal {
  font-family: var(--fonte-principal);
  font-size: var(--tamanho-titulo-principal);
  font-weight: var(--peso-font-destaque);
  line-height: var(--linha-altura-titulo-principal);
}

.paragrafo {
  font-family: var(--fonte-secundaria);
  font-size: var(--tamanho-paragrafo);
  font-weight: var(--peso-font-normal);
  line-height: var(--linha-altura-paragrafo);
}


```markdown
👉 [Visualize o Design System no Figma](https://www.figma.com/design/O8lefEx2SXvh5b3sKo37zh/Instituto-Criativo?node-id=441-7&t=9R5WzpgDGr8Wdghz-1)
