# 🚀 Food Explorer

### 🔨 Visão Geral

*O projeto "Food Explorer" é uma iniciativa que visa criar um sistema de cardápio digital para estabelecimentos de alimentação. Baseado no conhecimento adquirido durante o curso Explorer oferecido pela plataforma de ensino Rocketseat, o projeto será composto por duas partes essenciais: o back-end e o front-end.*

**Descrição do Projeto:**

*O "Food Explorer" é uma solução desenvolvida para aprimorar a experiência dos clientes em restaurantes, lanchonetes e estabelecimentos similares, tornando o processo de escolha de pratos mais simples e prático.*

**Funcionalidades para os Clientes:**

- ``Cadastro de Clientes:`` *Os clientes têm a possibilidade de criar contas pessoais, permitindo uma experiência personalizada e a retenção de informações sobre seus pedidos anteriores.*
- ``Visualização do Cardápio:`` *Os clientes podem navegar facilmente pelo cardápio digital, onde encontrarão informações detalhadas sobre os pratos, incluindo descrições, preços e imagens.*

**Funcionalidades para o Administrador:**

- ``Cadastro de Pratos:`` *Os administradores têm a capacidade de adicionar novos pratos ao cardápio, especificando informações como nome, descrição, preço e a opção de anexar imagens ilustrativas.*
- ``Atualização de Pratos:`` *É possível realizar atualizações no cardápio, permitindo ao administrador ajustar preços, descrições ou outras informações conforme necessário.*
- ``Exclusão de Pratos:`` *Pratos que não estejam mais disponíveis podem ser removidos do cardápio.*

**Benefícios Esperados:**

- ``Melhoria da Experiência do Cliente:`` *O "Food Explorer" simplifica o processo de pedido, oferecendo aos clientes uma visão completa do cardápio e a capacidade de personalização.*
- ``Eficiência Operacional:`` *Para os estabelecimentos, a plataforma simplifica a gestão do cardápio, permitindo atualizações em tempo real.*
- ``Redução de Uso de Papel:`` *Contribui para a redução do desperdício de papel, uma vez que o cardápio é digital.*

## Back-End:

O back-end é uma aplicação Node.js que permite aos usuários cadastrar informações sobre pratos. Os recursos do back-end incluem:

- Criação, leitura, atualização e exclusão de informações de pratos.
- Autenticação de usuários com geração e validação de tokens JWT (JSON Web Tokens) para garantir a segurança das rotas e dados sensíveis.
- Gerenciamento de usuários, incluindo apenas o cadastro. futuramente atualização de informações.
- Utilização do Express para roteamento de requisições HTTP.
- Uso do Knex para automatizar comandos DDL no banco de dados.
- Suporte ao upload de imagens dos pratos com Multer.
- Implantação do serviço na plataforma Render.

## 🔐Requisições:
![Requisições](https://github.com/VictorrMatt/Rocket-Movies-Api/assets/98140122/b5e6dd8b-3cb5-4aca-a28f-0334d069d272)

### Sessions:
``POST / Create`` (Criação de um novo token Jwt que será necessário para as requisições):  
> {  
  >&nbsp;&nbsp;"email": "seu_email",  
   &nbsp;&nbsp;"password": "sua_senha"  
}  

### Users:  
``PATCH / Avatar:``  
> *Recebe a imagem do avatar que será salva no banco*  

``POST / Create`` (Criação de usuários):  
> {  
  &nbsp;&nbsp;"name": "seu_nome",  
  &nbsp;&nbsp;"email": "seu_email",  
  &nbsp;&nbsp;"password": "sua_senha"  
}  

``PUT / Update`` (Atualiza dados do usuário):  
> {  
  &nbsp;&nbsp;"name": "novo_nome",  
  &nbsp;&nbsp;"email": "novo_email",  
  &nbsp;&nbsp;"password": "nova_senha",  
  &nbsp;&nbsp;"old_password": "senha_antiga"  
}  

### Notes:  
``GET / Index`` (Retorna notas referentes a title):  
> *Queries: Title.*  

``DELETE / Delete`` (Deleta uma nota):  
> *Recebe o ID da nota por meio do route params.*  

``GET / Read`` (Retorna a nota e as suas tags):  
> *Recebe o ID da nota por meio do route params.*  

``POST / Create`` (Cria uma nova nota):  
> {  
  &nbsp;&nbsp;"title": "jegarne",  
  &nbsp;&nbsp;"description": "Massa",  
  &nbsp;&nbsp;"rating": 6,  
  &nbsp;&nbsp;"tags": ["Pamonha", "raimundo"]  
}  

### Tags:  
``GET / Index:``  
> *Retorna as tags que foram criadas nas notas pelo usuário.*  

### Files:  
``GET / ?`` (Recebe o nome da imagem cadastrada no banco e a retorna):    
> *Recebe o nome da imagem por meio do route params.*  

## ✔️ Tecnologias Utilizadas

### Back-End (Tecnologias comuns em projetos Node.js):

- ``Node.js``: Plataforma de execução JavaScript.
- ``Express``: Framework Node.js para a criação de APIs RESTful.
- ``Banco de Dados`` (SqLite): Armazenamento de informações de usuários e filmes.
- ``JWT`` (JSON Web Tokens): Autenticação e segurança.
- ``Multer``: Manipulação de uploads de imagens, como imagens de perfil.
- ``Cors``: Habilitação de requisições entre origens (CORS) no servidor.

### 📝 Resumo

*"Food Explorer" é um projeto completo que consiste em uma aplicação de gerenciamento de pratos, composta por um back-end desenvolvido em Node.js e um front-end construído em React.js e Styled-components. O projeto oferece recursos de autenticação, gerenciamento de usuários e pratos, segurança, e armazenamento de informações. "Food Explorer" é uma solução eficaz para armazenar e gerenciar informações sobre pratos, e é resultado do curso Explorer da Rocketseat.*

Para acessar o site do "Food Explorer", você pode [clicar aqui](https://github.com/VictorrMatt).

## 🤝Desenvolvedores
<table align="center">
  
  <tr>
    <td align="center">
      <a href="https://github.com/victorrmatt">
        <img src="https://github.com/victorrmatt.png" width="100px;" alt="Foto do Victor Mateus no GitHub"/><br>
        <p align="center">
          <a href="https://www.linkedin.com/in/victor-mateus/" alt="LinkedIn">
          <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=#"/></a>
          <a href="https://api.whatsapp.com/send?phone=5587988278980&text=Olá%20Tudo%20Bem?%0DVenho%20pelo%20GitHub." alt="WhatsApp">
          <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=flat-square&labelColor=25d366&logo=whatsapp&logoColor=white&link=#"/></a>
        </p>
      </a>
    </td>
    <td>
      <img width="300" src="https://i2.wp.com/allhtaccess.info/wp-content/uploads/2018/03/programming.gif?fit=1281%2C716&ssl=1" />
    </td>
  </tr>
</table>

<p align="center">
  <img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
