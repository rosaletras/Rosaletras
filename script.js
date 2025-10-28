//-----------------MENU----------------------------------------------------
const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const categoriasItem = document.getElementById("categoriasItem");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("ativo");
    menuLateral.classList.toggle("ativo");
});

categoriasItem.addEventListener("click", (e) => {
    e.preventDefault();
    categoriasItem.classList.toggle("ativo");
});

//------------------------------CARROSSEL----------------------------------------------------------
const slides = document.getElementById("carrosselSlides");
const bolinhas = document.querySelectorAll(".carrossel-bolinha");
let indiceAtual = 0;
const totalSlides = bolinhas.length;
let intervalo;

function mostrarSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    bolinhas.forEach((b) => b.classList.remove("ativa"));
    bolinhas[index].classList.add("ativa");
    indiceAtual = index;
}

function iniciarCarrossel() {
    intervalo = setInterval(() => {
        indiceAtual = (indiceAtual + 1) % totalSlides;
        mostrarSlide(indiceAtual);
    }, 6000);
}

bolinhas.forEach((b, index) => {
    b.addEventListener("click", () => {
        clearInterval(intervalo);
        mostrarSlide(index);
        iniciarCarrossel();
    });
});

iniciarCarrossel();

/* --------------------------------------------- PESQUISA E CATEGORIAS------------------------------------------*/
const livros = [
  {nome:"Vantagens de ser invisivel", pdf:"https://drive.google.com/file/d/16NkmR2UHJICrQ_gE0QEDm0uueDP6aOhF/view", img:"https://i.pinimg.com/564x/cf/c2/2e/cfc22ef87fcce17cc4edb95afd707e98.jpg", categoria:"Romance"},
  {nome:"Vermelho branco sangue azul", pdf:"https://drive.google.com/file/d/1aOd-abRS6cTiMJ3Uq4ZkT_oYvXFVJ_aP/view", img:"https://i.pinimg.com/564x/56/34/8c/56348c15a52f14e2fe02a096f2007ab9.jpg", categoria:"Romance"},
  {nome:"É assim que acaba", pdf:"https://drive.google.com/file/d/165W9YpdhoN5yj5CDsknizuZ1Hwaaitd0/view", img:"https://i.pinimg.com/564x/91/48/67/9148671f501ebf096c9af965c34a664b.jpg", categoria:"Romance"},
  {nome:"É assim que começa", pdf:"https://drive.google.com/file/d/1lTwbNSA8hl86gSle84IC2fah5cqOG6HZ/view", img:"https://i.pinimg.com/564x/ee/a3/f7/eea3f75a798a5809a7384944883865bf.jpg", categoria:"Romance"},
  {nome:"O príncipe cruel", pdf:"https://drive.google.com/file/d/1ufVP3IunpRavf0Cws6Tl1BlA8xfvbFsC/view", img:"https://i.pinimg.com/564x/85/ec/4b/85ec4bb4d52c3bb54504eac35c13938d.jpg", categoria:"Fantasia"},
  {nome:"O diário de Anne Frank", pdf:"https://drive.google.com/file/d/1uus08XhaGWI7UyOQWRqogz-Jg6eB2MFu/view", img:"https://i.pinimg.com/736x/51/6a/d8/516ad854708ab27a508e1e69ca402bb8.jpg", categoria:"Biografia"},
  {nome:"A biblioteca da Meia-Noite", pdf:"https://drive.google.com/file/d/1pQ89_J4zBQHHvnSMyTwGZnNQJtxCkmaY/view", img:"https://i.pinimg.com/564x/c0/a0/6c/c0a06cbe1513c2b72b240bf27bce1bb5.jpg", categoria:"Fantasia"},
  {nome:"Quem é você, Alasca?", pdf:"https://drive.google.com/file/d/16dOm22ZgsTEkAKVJzmnmIVewnIKOpTj4/view", img:"https://i.pinimg.com/564x/de/6c/1a/de6c1a940956c32dc7b99ab2287d2314.jpg", categoria:"Romance"},
  {nome:"Pessoas normais", pdf:"https://drive.google.com/file/d/166ogsCUXHKRCRQ0jp_LiU176gORboLw2/view", img:"https://i.pinimg.com/564x/e8/a8/d2/e8a8d2a225b62792edade77f467aaa7a.jpg", categoria:"Romance"},
  {nome:"Talvez você deva conversar com alguém", pdf:"https://drive.google.com/file/d/10sG4eI6Qi81gX4wecMlGdAdjH0g0l0Mq/view", img:"https://i.pinimg.com/564x/6c/e3/5d/6ce35d2c7a4b95038cc224a30d776c02.jpg", categoria:"Romance"},
  {nome:"A vampira de karnstein", pdf:"https://drive.google.com/file/d/1FOC6qCNtpBjGMkcdKXz49UtwH7ybHVhq/view", img:"https://i.pinimg.com/564x/97/5e/a2/975ea2ac189028a6d7feac374ae36181.jpg", categoria:"Terror"},
  {nome:"Salem Stephen King", pdf:"https://drive.google.com/file/d/1oZnsWRMGHJr8JnzuXLaCW-8jyd7eNwnL/view", img:"https://i.pinimg.com/564x/ac/0e/46/ac0e46efc5fda604eface26ea0f5b64d.jpg", categoria:"Terror"},
  {nome:"O orfanato da senhora peregrine", pdf:"https://drive.google.com/file/d/116ovslSNxr13t_nCJbkaAgDEFzGUMkls/view", img:"https://i.pinimg.com/564x/9b/98/25/9b9825332dfe4b539239f53184f7f00f.jpg", categoria:"Fantasia"},
  {nome:"Lady Killers", pdf:"https://drive.google.com/file/d/1sm2eWInkQVSF5UMxRrJOE2Kxb9cSeLwa/view", img:"https://i.pinimg.com/736x/1c/cd/99/1ccd99359def423ac1b31a21c1061f6b.jpg", categoria:"Terror"},
  {nome:"Delicioso cadáver", pdf:"https://drive.google.com/file/d/15Y-eeS7eJjDvzuwq6HbSuF94IfcMFw62/view", img:"https://m.media-amazon.com/images/I/714Y-3rNGmL._AC_UF1000,1000_QL80_.jpg", categoria:"Terror"},
  {nome:"Um de nós está mentindo", pdf:"https://drive.google.com/file/d/1lxPkCm6H7ihvIJPVP8pyipsW7dYNWFh2/view", img:"https://i.pinimg.com/736x/f0/57/ce/f057ce74e5f02d13aa95a0fc45b06221.jpg", categoria:"Ficção"},
  {nome:"O homem de giz", pdf:"https://drive.google.com/file/d/1U16zFTg7tu9_a7ILk5BmoeV5ODJl4XZV/view", img:"https://i.pinimg.com/736x/e9/66/dd/e966dd4a1a761c2a9f5b3a9dd216f0a6.jpg", categoria:"Terror"},
  {nome:"Manual de assassinato para boas garotas", pdf:"https://drive.google.com/file/d/1-s5T-liPw_SbWGbabfpZU1PK1Ee-BEc2/view", img:"https://i.pinimg.com/564x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg", categoria:"Terror"},
  {nome:"As virgens suicidas", pdf:"https://drive.google.com/file/d/1KP_yBq4yNC1_16ObR4-tPBFusYr40kS_/view", img:"https://i.pinimg.com/564x/c6/04/f4/c604f4827ffc53c39c9581cd88648b8b.jpg", categoria:"Romance"},
  {nome:"Jogos Vorazes", pdf:"https://drive.google.com/file/d/1bI0EGEfggzWJYQtX8SaC-38HVhrQrCb6/view", img:"https://i.pinimg.com/736x/a3/7b/22/a37b22220204a3a54ddbd3e6d408223d.jpg", categoria:"Fantasia"},
  {nome:"Até o verão terminar", pdf:"https://drive.google.com/file/d/1-Z_Wx7sHueYYnEgdpYgSuAQloHKIRZyO/view", img:"https://i.pinimg.com/564x/35/8a/54/358a549660c83add5987d067c5eb6794.jpg", categoria:"Romance"},
  {nome:"Clube do livro dos homens", pdf:"https://drive.google.com/file/d/1PDzsUofK5bfX8Xzfz7trExAxDDCc4X9F/view", img:"https://i.pinimg.com/564x/ac/96/bd/ac96bdb5d24a6fa37da7f8e5b9d3b7a8.jpg", categoria:"Romance"},
  {nome:"Eleanor e Grey", pdf:"https://drive.google.com/file/d/1P5P-8Qc4dX-lPTv9UiT1BKJgN1d6KwMw/view", img:"https://i.pinimg.com/736x/bf/c5/1b/bfc51b8751282a82b8d2dda892b8bcd8.jpg", categoria:"Romance"},
  {nome:"Beach Read", pdf:"https://drive.google.com/file/d/1vBi0wPXwBgNkGhfT0f4-pfoIhgW-wdrp/view", img:"https://i.pinimg.com/564x/f3/d6/eb/f3d6eb4c47a9046eb3172580de8e9b2b.jpg", categoria:"Romance"},
  {nome:"Entre o agora e o nunca", pdf:"https://drive.google.com/file/d/1UKZ-TtGmaxn7oKpZHnDb_U7GM8cq5EEM/view", img:"https://i.pinimg.com/736x/52/f8/e1/52f8e19ef807bebc7a8d4501bea48f4c.jpg", categoria:"Romance"},
  {nome:"Flores para Algernon", pdf:"https://drive.google.com/file/d/1yiRVgduYbYUKbODZKDSy2XqTtQR_Rd22/view", img:"https://i.pinimg.com/736x/ca/c7/ab/cac7ab4563acb18eb2de5b4f77131088.jpg", categoria:"Ficção"},
  {nome:"Johns and Hazel Guide to Not Dating", pdf:"https://drive.google.com/file/d/1aKDbhQpiEm9U-fC8GQ7DIOPF-x6L2zjR/view", img:"https://i.pinimg.com/564x/2a/05/85/2a058586605549829cae9ec202c44b5d.jpg", categoria:"Romance"},
  {nome:"O sol da meia noite", pdf:"https://drive.google.com/file/d/119nH3MZaPdRudca2YQjsCwUEbcKa3P5s/view", img:"https://i.pinimg.com/736x/d3/79/b1/d379b109e2eccb866550e45206c61058.jpg", categoria:"Romance"},
  {nome:"Crepúsculo", pdf:"https://drive.google.com/file/d/13TuRnTG_oJUXjVKR6wBJLG6YptluLgS5/view", img:"https://i.pinimg.com/736x/b6/47/b1/b647b1c379e28645b30985863d311d39.jpg", categoria:"Romance"},
  {nome:"A garota do trem", pdf:"https://drive.google.com/file/d/1djQLpbkOkq_AKxDA1o6iJg1iRQRIFKRJ/view", img:"https://i.pinimg.com/736x/df/66/98/df66982c3e86374b5b7f0ba848e54d14.jpg", categoria:"Terror"},
  {nome:"Crepúsculo - Lua Nova", pdf:"https://drive.google.com/file/d/13f5J9jQ0g94IiTRlU7tNWgeXrEEaD26o/view", img:"https://i.pinimg.com/564x/fe/44/68/fe446889fdbfbb64fa1cb729c1bd0f98.jpg", categoria:"Romance"},
  {nome:"Crepúsculo - Amanhecer", pdf:"https://drive.google.com/file/d/13hPMKese5kBG3BVJZNl6ybz6uQzblbfp/view", img:"https://i.pinimg.com/736x/98/17/b0/9817b0ede8e25ffe51e44ef0906bdc53.jpg", categoria:"Romance"},
  {nome:"Carrie a estranha", pdf:"https://drive.google.com/file/d/11Ic9zNm6AT-t6jsEb3T44ZipYUWe3QeQ/view", img:"https://i.pinimg.com/564x/e4/e7/3a/e4e73a1b3e2da8e592bfed9078686814.jpg", categoria:"Terror"},
  {nome:"Mentirosos", pdf:"https://drive.google.com/file/d/1vLggYlv-B0JQ3gUU-UgfIB9kI7w9aLM_/view", img:"https://i.pinimg.com/564x/4b/cc/b4/4bccb4a09a401ca54a751814986eb6e6.jpg", categoria:"Ficção"},
  {nome:"A seleção", pdf:"https://drive.google.com/file/d/1CjPztAFMt3agj8pkSbozXLyruWsT1VW1/view", img:"https://i.pinimg.com/736x/10/92/97/109297876f9bf01b7ec12e25470521a0.jpg", categoria:"Romance"},
  {nome:"A elite", pdf:"https://drive.google.com/file/d/1ieYpISnOaY2foY-RWv6LZPlmlC4pMOex/view", img:"https://i.pinimg.com/736x/08/12/0e/08120e29aa2f5fbb6137ce5cd098ed66.jpg", categoria:"Romance"},
  {nome:"A escolha", pdf:"https://drive.google.com/file/d/199j_YvyzKr2ysbQLVlto-bvZQVCnFDg_/view", img:"https://i.pinimg.com/564x/a6/f4/ad/a6f4ad1179de0caab13f172b32e6f24b.jpg", categoria:"Romance"},
  {nome:"A herdeira", pdf:"https://drive.google.com/file/d/19NMyBLURJG9FZB2o3KSesZXSxwCNkr38/view", img:"https://i.pinimg.com/736x/0d/80/f0/0d80f04516fc71975cb0af094e48227e.jpg", categoria:"Romance"},
  {nome:"A coroa", pdf:"https://drive.google.com/file/d/1c-GprGEP1Cuzbn0ZqjJPuKV0Q_j2yRNv/view", img:"https://i.pinimg.com/564x/c1/c8/91/c1c89175573be10046a2866415a124ca.jpg", categoria:"Romance"},
  {nome:"O lobo da Estepe", pdf:"https://christianrocha.wordpress.com/wp-content/uploads/2008/12/hermann_hesse_o_lobo_da_estepe.pdf", img:"https://i.pinimg.com/736x/62/c5/e3/62c5e3f63c2357417dfd2f42f3e91ed0.jpg", categoria:"Existencialismo"},
  {nome:"Notas do Subterraneo", pdf:"https://drive.google.com/file/d/1k17LhW_Ztnr8ZTtuzVL2zZJfysN2RkX9/view", img:"https://i.pinimg.com/736x/6b/d7/d0/6bd7d04a26f42355c5e5ebdb3b9456ee.jpg", categoria:"Existencialismo"},
  {nome:"a insustentável leveza do ser", pdf:"https://kbook.com.br/wp-content/files_mf/ainsustentavellevezadosermilankundera.pdf", img:"https://i.pinimg.com/736x/cb/0b/3b/cb0b3bb702f2c2f803c6d6ed77a4e111.jpg", categoria:"Existencialismo"},
  {nome:"Cem anos de solidão", pdf:"https://kbook.com.br/wp-content/uploads/2016/08/cemanosdesolidaogabrielgarciamarquez.pdf", img:"https://i.pinimg.com/736x/ef/f9/70/eff97080f1d1792d1552942c3e49ea72.jpg", categoria:"Romance"},
  {nome:"Demian", pdf:"https://drive.google.com/file/d/158dQAP-XhfZ5-Xk46pFuGC4p4FCpkt8k/view", img:"https://i.pinimg.com/1200x/e4/30/f2/e430f235bb1bb99c32caf6fb16ebcaca.jpg", categoria:"Romance"},
  {nome:"O estrangeiro", pdf:"https://drive.google.com/file/d/1gWfJ56eioc7Lr6p2TZHynIfRO8cZA71P/view", img:"https://i.pinimg.com/736x/64/9e/4e/649e4e2ad3012380b25cc00b22d6a767.jpg", categoria:"Existencialismo"},
  {nome:"A Nausea", pdf:"https://drive.google.com/file/d/1mF9tK8AD5VL2gySAji5XAfv5_TTUPCgF/view?usp=drive_open", img:"https://i.pinimg.com/736x/97/c0/0f/97c00fe47e2b66310c470bfb92be6728.jpg", categoria:"Romance"},
  {nome:"a redoma de vidro", pdf:"https://cdn.bookey.app/files/pdf/book/pt/a-redoma-de-vidro.pdf", img:"https://i.pinimg.com/1200x/4c/30/3e/4c303e9cde79f07162a1a3afea67ffbb.jpg", categoria:"Romance"},
  {nome:"o livro dos abraços", pdf:"https://www.anarquista.net/wp-content/uploads/2013/03/O-Livro-dos-Abra%C3%A7os-Eduardo-Galeano.pdf", img:"https://i.pinimg.com/736x/94/39/d6/9439d6e261a94c901297b9841959737e.jpg", categoria:"Ficção"},
  {nome:"O processo", pdf:"https://drive.google.com/file/d/1fbEfWzpuTUbfEH0mN4Dtt2esFj2ie6dl/view", img:"https://i.pinimg.com/736x/d0/03/76/d00376008d831853f1097d1e5aba6ae2.jpg", categoria:"Romance"},
  {nome:"O Senhor dos Anéis — J.R.R. Tolkien", pdf:"https://estdaliteratura.wordpress.com/wp-content/uploads/2017/05/li-2-o-senhor-dos-aneis-j-r-r-tolkien.pdf", img:"https://i.pinimg.com/736x/2b/59/e3/2b59e3e2eca324d36d2a865ad5a840cc.jpg", categoria:"Fantasia"},
  {nome:"O Hobbit — J.R.R. Tolkien", pdf:"https://ddcus.org/pdf/summer_reading/10th_Grade/O%20Hobbit%20-%20J_%20R_%20R_%20Tolkien%20-%20BEAP%2010%20Portuguese.pdf", img:"https://i.pinimg.com/1200x/b9/db/fb/b9dbfb358fba4e023cd39f038dd2644d.jpg", categoria:"Fantasia"},
  {nome:"Harry Potter — J.K. Rowling", pdf:"https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf", img:"https://i.pinimg.com/736x/55/4e/0c/554e0cb7330f288efe07d73c67070411.jpg", categoria:"Fantasia"},
  {nome:"As Crônicas de Nárnia — C.S. Lewis", pdf:"https://static.tumblr.com/jzav6f0/5uOmg0g5w/c.s._lewis_-_as_cr__nicas_de_n__rnia__volume_unico_.pdf", img:"https://i.pinimg.com/736x/f1/da/93/f1da9301380cccd139b10c1cdc746708.jpg", categoria:"Fantasia"},
  {nome: "Eragon (Ciclo da Herança) — Christopher Paolini", pdf:"https://cdn.bookey.app/files/pdf/book/pt/eragon.pdf", img:"https://i.pinimg.com/736x/8e/71/50/8e7150b7cfa953edf14994481ba42170.jpg", categoria:"Fantasia"},
  {nome: "Percy Jackson e os Olimpianos — Rick Riordan", pdf:"https://clubdelivros.wordpress.com/wp-content/uploads/2013/09/percy-jackson-e-os-olimpianos_-o-ladrao-de-raios-vol-1-rick-riordan.pdf", img:"https://i.pinimg.com/1200x/1f/d6/46/1fd64626847ac93d5c172fda65c89984.jpg", categoria:"Fantasia"},
  {nome: "A Bússola de Ouro (Fronteiras do Universo) — Philip Pullman", pdf:"https://cabana-on.com/Ler/wp-content/uploads/2017/09/Philip-Pullman-A-Bussola-De-Ouro.pdf", img:"https://i.pinimg.com/736x/f9/78/3e/f9783efc3c54a910ac9daa45c81b08ad.jpg", categoria:"Fantasia"},
  {nome: "Caraval — Stephanie Garber", pdf:"https://drive.google.com/file/d/1DfHnul_Jtdlvk7qTLMJGqoaU-98kk5D8/view", img:"https://i.pinimg.com/1200x/73/77/dd/7377dda7f6b6312742685f30896d13cc.jpg", categoria:"Fantasia"},
  {nome: "Lendário — Stephanie Garber", pdf:"https://drive.google.com/file/d/1A1piHv-kQlb-hu0vVnqeN29-MmSfAIyB/view", img:"https://i.pinimg.com/736x/f4/57/0a/f4570a47e818105ce3083b048e5ee1e0.jpg", categoria:"Fantasia"},
  {nome: "Finale — Stephanie Garber", pdf:"https://drive.google.com/file/d/1Q_3VNuGxbxxHkx0KCmCjetxOHZbHp3Pq/view", img:"https://i.pinimg.com/1200x/81/3d/19/813d19f2d2595964214ef99b320998b2.jpg", categoria:"Fantasia"},
  {nome: "Fantasyland Wildrest Dreams", pdf:"https://drive.google.com/file/d/181LGPEdsZPu94a-2Rw7J_efqqFYN1qdt/view", img:"https://i.pinimg.com/736x/9a/e0/b9/9ae0b9e75f6b4fde4059d34a434ec26b.jpg", categoria:"Fantasia"},
  {nome: "Fantasyland The Golden Dinasty", pdf:"https://drive.google.com/file/d/1V04xhdYoIsKhOeI6Vl52gmN7We0EEAJT/view", img:"https://i.pinimg.com/736x/57/2e/12/572e124f4ca94d770a56a21f7125be73.jpg", categoria:"Fantasia"},
  {nome: "A Parabola do Semeador Octavia E. Butler", pdf:"https://drive.google.com/file/d/1tbiMP_tmc5WigeysJKUyXhPqWQVwnxae/view", img:"https://i.pinimg.com/736x/20/9e/36/209e36b51a9bbd74c48a4be50b520dd3.jpg", categoria:"Ficção"},
  {nome: "A Princesa Salva a Si Mesma Neste Livro - Amanda Lovelace", pdf:"https://drive.google.com/file/d/1z4VAOYXirSyt7lcDEdnAQfzIVr-KVMHY/view", img:"https://i.pinimg.com/736x/d9/eb/f4/d9ebf4affd5b1c8f7987eb3de3e478e9.jpg", categoria:"Poesia"},
  {nome: "Anjos e Demônios - Dan Brown", pdf:"https://drive.google.com/file/d/122gNFbdugTAT_fhd1jUsu6oUkVQoZxD3/view", img:"https://i.pinimg.com/736x/b1/dd/16/b1dd16e8c1ba44f89332ca586b7f8b7f.jpg", categoria:"Ficção"},
  {nome: "Aristóteles e Dante Descobrem os Segredos do Universo - Benjamin Alire Sáenz", pdf:"https://drive.google.com/file/d/18S8Yc4Mvk9OQB8KeMa_AH79iy4KwrQPI/view", img:"https://i.pinimg.com/736x/9b/c6/9b/9bc69b30966e5a72ed11715f71aad71a.jpg", categoria:"Romance"},
  {nome: "Caixão Fechado - Agatha Christie", pdf:"https://drive.google.com/file/d/1e5tp780-h4h1vjFcWGvOSKj1yEb3pBRF/view", img:"https://i.pinimg.com/736x/1b/43/6b/1b436bd01c7aaf2ed341a445392038cf.jpg", categoria:"Romance"},
  {nome: "Cartas de amor aos mortos - Ava Dellaira", pdf:"https://drive.google.com/file/d/18jLzRdG6QYkh0YW63hLfgFWKk3XUT2Iv/view", img:"https://i.pinimg.com/736x/f8/7d/f0/f87df01e97709c91cca730d6a426cec6.jpg", categoria:"Ficção"},
  {nome: "Colleen Hoover - As Mil Partes do Meu Coração", pdf:"https://drive.google.com/file/d/1SXoqmOvFjkxZwAfFeJfeCNrCqBR1gv1r/view", img:"https://i.pinimg.com/736x/b6/3e/23/b63e236419da923735c8ae95c2047d10.jpg", categoria:"Romance"},
  {nome: "Cidades De Papel - John Green", pdf:"https://drive.google.com/file/d/1Cr6-NKu8b5kyoMkY2LYu9Xon6dHz7er9/view", img:"https://i.pinimg.com/736x/cf/88/38/cf8838f6de5668ff1fc8357cd3570d0d.jpg", categoria:"Ficção"},
  {nome: "Cilada - Harlan Coben", pdf:"https://drive.google.com/file/d/15bqFh9flXWIruezZ3lyJy5WfQefvDa9p/view", img:"https://i.pinimg.com/736x/03/03/61/03036151029c932f523777a041d7e60c.jpg", categoria:"Ficção"},
  {nome: "Como as Democracias Morrem - Steven Levitsky", pdf:"https://drive.google.com/file/d/1-z7YqQGuKKv2fsnENDzSgFxmLlrECwE2/view", img:"https://i.pinimg.com/1200x/51/d9/f8/51d9f8af2de61c1fd2ab783d1dd8e06f.jpg", categoria:"Educação"},
  {nome: "Enraizados - Naomi Novik", pdf:"https://drive.google.com/file/d/1StAsGxrN7dZls_MWAOEyG0832tb8PqWt/view", img:"https://i.pinimg.com/736x/d5/1a/6c/d51a6c58e9be77224eefb7a121fd6c0c.jpg", categoria:"Ficção"},
  {nome: "Fahrenheit 451 - Ray Bradbury", pdf:"https://drive.google.com/file/d/1eg-NU7FTevhp2IAj4JZxhysTRp4UlblE/view", img:"https://i.pinimg.com/1200x/46/d3/8a/46d38a1f04f4cb75058dc300686e4207.jpg", categoria:"Ficção"},
  {nome: "A auto estrada stephen king", pdf:"https://drive.google.com/file/d/1-LdoyqnyaZJlsm8Iq1uHU-xzQ4kb3a07/view", img:"https://images.dlivros.org/Stephen-King/auto-estrada-stephen-king_large.webp", categoria:"Terror"},
  {nome: "a sutil arte de ligar o f*da-se", pdf:"https://drive.google.com/file/d/1-94fXJUh2U13qi8sm3VdrBYpRDbPVQY8/view?usp=drive_open", img:"https://i.pinimg.com/736x/1e/f1/02/1ef10265f98ad82a5ad46e6a41788249.jpg", categoria:"Educação"},
  {nome: "no final morrem os dois", pdf:"https://drive.google.com/file/d/1-5otYd7LPLNMV93bemth0xGhpSmdMkZK/view?usp=drive_open", img:"https://i.pinimg.com/736x/f1/39/03/f139034286c654fd3a2d62cb4024838e.jpg", categoria:"Romance"},
  {nome: "o nevoeiro stephen king", pdf:"https://drive.google.com/file/d/1-IKHaP2S4pGWCCW-K9PFoFXmo-BeAYZ6/view", img:"https://i.pinimg.com/736x/30/c6/81/30c6813fd530ca77c08a4927a8896328.jpg", categoria:"Terror"},
  {nome: "os sofrimentos de jovem werther", pdf:"https://drive.google.com/file/d/1-F42jufqPG0etQCEtYT6sCkU8aCaS7-6/view?usp=drive_open", img:"https://i.pinimg.com/736x/ae/06/03/ae0603306b2ac7f7303acb3c1f13cbd7.jpg", categoria:"Romance"},
  {nome: "A (R)evolução das Mulheres - Mindy McGinnis - revolução das mulheres", pdf:"https://drive.google.com/file/d/1vnpppV-hhwbLF2WO6AhfhAZu-A2fuKxT/view", img:"https://m.media-amazon.com/images/I/816s9GDXqBL.jpg", categoria:"Ficção"},
  {nome: "A Boa Filha - Karin Slaughter", pdf:"https://drive.google.com/file/d/1dJxJ1I92n9Gf7G6k8gbEaumrpSzFyjiP/view", img:"https://i.pinimg.com/1200x/2b/13/47/2b13470a56686bf069ffa1907dd9a6f3.jpg", categoria:"Terror"},
  {nome: "A Conspiracao - Dan Brown", pdf:"https://drive.google.com/file/d/1CwhZyhDoDFI6MDuyrB5GrM1lqHx6nzP2/view?usp=drive_open", img:"https://i.pinimg.com/1200x/73/4f/2c/734f2ce4fe717a027679b81d24e13de9.jpg", categoria:"Terror"},
  {nome: "A Hora do Vampiro (Salem’s Lot) - Stephen King", pdf:"https://drive.google.com/file/d/1vq508f1d_hPJmp8js5gK3tjCmDsx57Hu/view", img:"https://i.pinimg.com/1200x/ac/0e/46/ac0e46efc5fda604eface26ea0f5b64d.jpg", categoria:"Terror"},
  {nome: "A Hora do Lobisomem - Stephen King", pdf:"https://drive.google.com/file/d/1Nb8OwHXL2FES5EgbnXFSkKSqAelXZUnA/view", img:"https://i.pinimg.com/736x/fc/dd/9c/fcdd9c71ae28928bff5458001ae86c5e.jpg", categoria:"Terror"},
  {nome: "A Incendiária - Stephen King", pdf:"https://drive.google.com/file/d/14jvicB5vxkrMyiXAnnnNlgIoy_lYwxzY/view", img:"https://i.pinimg.com/1200x/38/34/23/3834232d5985d3d7c01ecc79a1f39876.jpg", categoria:"Terror"},
  {nome: "A Dança da Morte - Stephen King", pdf:"https://drive.google.com/file/d/169sLNinU-Iz2txme4qtu6tnAH2Rd3ZNg/view", img:"https://i.pinimg.com/1200x/48/77/f8/4877f87d1288fc60201b94ba064bf6bd.jpg", categoria:"Terror"},
  {nome: "A Garota do Lago - Charlie Donlea", pdf:"https://drive.google.com/file/d/17ENK6_Ym8WSLTPHdxRgUfYyzksUs538t/view", img:"https://i.pinimg.com/1200x/67/96/12/6796128453f920b1dd2946e66ba5a6f8.jpg", categoria:"Terror"},
  {nome: "A Jornada das Bruxas - Karina Heid", pdf:"https://drive.google.com/file/d/1T0D65_JyWCwpas9FnzwG9Se6rV3nhwsq/view", img:"https://i.pinimg.com/736x/7a/7d/b0/7a7db0d6824bf43315268fdcc60b9d2f.jpg", categoria:"Terror"},
  {nome: "A Mulher na Janela - A. J. Finn", pdf:"https://drive.google.com/file/d/17ID94muy2Pw9jeoV70RRqaUXxkI1_jAn/view", img:"https://i.pinimg.com/736x/7e/38/24/7e38246d84689cd317d30e625a4554b7.jpg", categoria:"Terror"},
  {nome: "A Assombração da Casa da Colina - Shirley Jackson", pdf:"https://drive.google.com/file/d/1dvMFBwohIDkFwqFI_SXw_qxAWNbvhKL1/view", img:"https://i.pinimg.com/1200x/3c/92/20/3c9220bc55b15e5769f969780099d8a8.jpg", categoria:"Terror"},
  {nome: "A Noiva Fantasma - Yangsze Choo", pdf:"https://drive.google.com/file/d/1Po2XYimZG9IleLwccsycYRQSUyYdo-BH/view", img:"https://i.pinimg.com/736x/14/d9/34/14d9346de58c3589094b2aeef56cb588.jpg", categoria:"Terror"},
  {nome: "A Logica inexplicavel da minha vida - Benjamin Alire Saenz", pdf:"https://drive.google.com/open?id=13sMSqo8Zu_VyvCaIpbmca-xVaB3mpnjw&authuser=0", img:"https://i.pinimg.com/736x/84/da/2c/84da2c53b05ebfcea56f4935bfdfe81b.jpg", categoria:"Romance"},
  {nome: "A Paciente Silenciosa ", pdf:"https://drive.google.com/file/d/11VRm1CYgExOPismEPvCuzaKW0zEJidnX/view", img:"https://i.pinimg.com/1200x/20/a7/53/20a753cbaabfa3543df8f563236d3c78.jpg", categoria:"Terror"},
  {nome: "A Última Festa - Lucy Foley", pdf:"https://drive.google.com/file/d/1DskwQE2vOItFMxYj2FE0PZ9YzgIvOJCX/view", img:"https://i.pinimg.com/736x/0c/fc/b9/0cfcb9e4c7de1c1045f6089becf8a59d.jpg", categoria:"Terror"},
  {nome: "A segunda vez que te amei - Leila Rego", pdf:"https://drive.google.com/file/d/1L1-YG3vKwm5i9J2NU6fUinpW0k46FjxZ/view", img:"https://i.pinimg.com/1200x/0e/e5/e6/0ee5e695403a00429c6e1afdc26fc69a.jpg", categoria:"Romance"},
  {nome: "A Segunda Patria - Miguel Sanches Neto", pdf:"https://drive.google.com/file/d/13smg47_zvzdYAQpEwu4ku8UEuew7qy8-/view", img:"https://m.media-amazon.com/images/I/71Ovr317kCL._UF1000,1000_QL80_.jpg", categoria:"Ficção"},
  {nome: "A espera de um milagre - Stephen King", pdf:"https://drive.google.com/file/d/1LZ1U5sCatziSX47ypkAJ7zXj8Far3air/view", img:"https://i.pinimg.com/736x/ca/6e/29/ca6e297b54ffe5ab26d3e6c59a3d91ed.jpg", categoria:"Ficção"},
  {nome: "Amor & Gelato - Jenna Evans Welch", pdf:"https://drive.google.com/file/d/1Wi-DBCsUhtbPRz0A9iOc49Ca9lu5w4BA/view", img:"https://i.pinimg.com/1200x/69/dc/81/69dc81478ebaa98236186ec157d9a896.jpg", categoria:"Romance"},
  {nome: "Becky Albertalli - Leah fora de sintonia", pdf:"https://drive.google.com/file/d/1pGCkCefHziUtN0FGUPFm1ySvZ2SV30TN/view", img:"https://i.pinimg.com/736x/15/9d/d2/159dd25223ae2b51a7ea3b5b24266cc7.jpg", categoria:"Romance"},
  {nome: "Belas adormecidas - Stephen King", pdf:"https://drive.google.com/file/d/1Yl4QtQHeSrPa9ZnJN55R1L0Us3tljjtm/view", img:"https://m.media-amazon.com/images/I/810GRrBxqOL.jpg", categoria:"Terror"},
  {nome: "Box Grandes Obras de Nietzsche - Friedrich Nietzsche", pdf:"https://drive.google.com/file/d/1_F4KNjkEDdZqlEkMh-TmS67s9vndwTet/view", img:"https://i.pinimg.com/736x/61/aa/7d/61aa7d3ca89332ac4c5fb31869894bd9.jpg", categoria:"Educação"},
  {nome: "Boy Erased: Uma Verdade Anulada - Português", pdf:"https://drive.google.com/file/d/1b7tpGfubSMvIwRG6W2y-8rZJVuFyJM9M/view", img:"https://m.media-amazon.com/images/I/81Q+yg3XV5L._AC_UF1000,1000_QL80_.jpg", categoria:"Educação"},
  {nome: "Lolita - Vladimir Nabokov", pdf:"https://drive.google.com/file/d/17z7YOM_SlXv4B90CarGncpWX7OzSFh22/view", img:"https://m.media-amazon.com/images/I/71dfSg9HdoL._AC_UF1000,1000_QL80_.jpg", categoria:"Romance"},
  {nome: "Me Encontre - André Aciman", pdf:"https://drive.google.com/file/d/1HBkJbc6tJQRx6B_Qx_sVYSrealLrM4YF/view", img:"https://i.pinimg.com/736x/f5/7a/d9/f57ad976462d016b7907f62eb6ba8f6b.jpg", categoria:"Ficção"},
  {nome: "Mulherzinhas - Louisa May Alcott", pdf:"https://drive.google.com/file/d/1YXFISaWBkTjwDGxLUB0i1Fk6lQnjUtrJ/view", img:"https://i.pinimg.com/736x/20/94/26/20942692b8ad5b6eba6f1e9b054a691a.jpg", categoria:"Romance"},
  {nome: "Oscar Wilde - O Retrato de Dorian Gray", pdf:"https://drive.google.com/file/d/1y5gzyANE8k2AaMQjN2gOXIMevq2jo0A7/view", img:"https://i.pinimg.com/736x/6c/9a/65/6c9a652121d57973eb7263cebf81859c.jpg", categoria:"Ficção"},
  {nome: "better in black cassandra clare", pdf:"https://drive.google.com/file/d/1rCN4JRAMPSfN0hl1U2Mxr1kRueSjEjeO/view?usp=drive_open", img:"https://i.pinimg.com/736x/ac/44/4f/ac444ffe151e5df37a27529ef416e306.jpg", categoria:"Fantasia"},
  {nome: "Os Segredos da Mansão Blackthorn - Cassandra Clare", pdf:"https://drive.google.com/file/d/1Y_t3ALg36gJTmo1v4RNykqaL6gsePCmZ/view", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjRwi6TFb5GbmxTL52L9Q-Qn5SiLN_WARDw&s", categoria:"Fantasia"},
  {nome: "crônicas dos caçadores de sombras", pdf:"https://drive.google.com/file/d/16H9_9eYVg-3rqjactUac5oTR-tUM57XQ/view", img:"https://m.media-amazon.com/images/I/91jy4sZefWL.jpg", categoria:"Terror"},
  {nome: "Careful of Books - Cassandra Clare", pdf:"https://drive.google.com/file/d/1i-2hhCi9y_0Ivky47BSjal1TK2MG6eLu/view", img:"https://i.pinimg.com/736x/26/c4/c4/26c4c42d8e85bc1da92bcaf1a4deeb07.jpg", categoria:"Fantasia"},
  {nome: "A Guerra dos Tronos – As Crônicas de Gelo e Fogo, Vol. 1 - George R. R. Martin", pdf:"https://drive.google.com/file/d/1oGvKWGHy1sfWwgFGIz0g3Rgo7rGA_1sJ/view?usp=drive_open", img:"https://i.pinimg.com/1200x/14/79/92/147992adb6643ad2a8c9cfd2125925ed.jpg", categoria:"Fantasia"},
  {nome: "A Fúria dos Reis – As Crônicas de Gelo e Fogo, Vol. 2 - George R. R. Martin", pdf:"https://drive.google.com/file/d/1Y0RA3NjL7i0lo8lqbI25K3WHhS6EYB3T/view?usp=drive_open", img:"https://i.pinimg.com/736x/a4/d7/b3/a4d7b39a93399884cffd3a9012c3349d.jpg", categoria:"Fantasia"},
  {nome: "A Tormenta de Espadas – As Crônicas de Gelo e Fogo, Vol. 3 - George R. R. Martin", pdf:"https://drive.google.com/file/d/198-qZjfU63icTjQm9z3vl73-_tqs8v9B/view", img:"https://m.media-amazon.com/images/I/912SYaebhuL.jpg", categoria:"Fantasia"},
  {nome: "O Festim dos Corvos – As Crônicas de Gelo e Fogo, Vol. 4 - George R. R. Martin", pdf:"https://drive.google.com/file/d/1Yl1DuGN6Ky0SdtXsYJv9fRefD0Q3pwvP/view", img:"https://i.pinimg.com/736x/1f/48/ab/1f48abb248b78bb5ba66c58644d90113.jpg", categoria:"Fantasia"},
  {nome: "A Dança dos Dragões – As Crônicas de Gelo e Fogo, Vol. 5 - George R. R. Martin", pdf:"https://drive.google.com/file/d/1oNLExIcoj3uIhHAyjbIi34kL0NXxVXod/view?usp=drive_open", img:"https://m.media-amazon.com/images/I/A1q+wZFZbGL._AC_UF1000,1000_QL80_.jpg", categoria:"Fantasia"},
  {nome: "A Princesa e a Rainha: Os Negros e os Verdes – George R. R. Martin", pdf:"https://drive.google.com/file/d/1TbHnM9mu7Kx0kY53JOcdUOafE5ASdIHh/view", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ypowAMZl9Y7Fg6YuDA2zswcn4xfHcbPucw&s", categoria:"Fantasia"},
  {nome: "O Cavaleiro dos Sete Reinos – George R. R. Martin", pdf:"https://drive.google.com/file/d/1o6N78hQh2aJD6E5Gp87yxQJdODt8j6Fg/view?usp=drive_open", img:"https://m.media-amazon.com/images/I/61bFwnRaV1L._AC_UF1000,1000_QL80_.jpg", categoria:"Fantasia"},
  {nome: "O Príncipe de Westeros e Outras Histórias – George R. R. Martin", pdf:"https://drive.google.com/file/d/1xXdZbZMZCC064YhaxruAL_9uPJoh23zf/view?usp=drive_open", img:"https://i.pinimg.com/736x/26/a3/66/26a3666ba19889d08ac1bf37976f0c64.jpg", categoria:"Fantasia"},
  {nome: "Fogo & Sangue, Vol. 1 – George R. R. Martin", pdf:"https://drive.google.com/file/d/13sE-U2xhsKD-5D1aq3uxDYrdEDRdeEQ-/view", img:"https://i.pinimg.com/1200x/82/14/ee/8214eef6ea9acbec4372a0906c0406ed.jpg", categoria:"Fantasia"},
  {nome: "O Mundo de Gelo e Fogo – George R. R. Martin, Elio M. García Jr. & Linda Antonsson", pdf:"https://drive.google.com/file/d/1IteBKf2aUoWkGMwDUmAEdFPdo7HdPrxe/view", img:"https://i.pinimg.com/736x/1c/dd/9f/1cdd9f705564deee1df90f9e25adebf3.jpg", categoria:"Fantasia"},
  {nome: "Doutor Sono - Stephen King", pdf:"https://drive.google.com/file/d/17M3qzLC0G1y3FjXYekpx9Gc0L4hAlZ9b/view", img:"https://i.pinimg.com/1200x/26/3d/18/263d18c0c6bfacac4b098f84dcf9a76d.jpg", categoria:"Terror"},
  {nome: "Drácula - Bram Stoker", pdf:"https://drive.google.com/file/d/1IAnloXpABFjJ8Fuwa2g_xrduxw1IY5-_/view", img:"https://i.pinimg.com/1200x/ed/0f/b4/ed0fb4454416951dee2c6f444f058bdb.jpg", categoria:"Terror"},
  {nome: "O Cemitério - Stephen King", pdf:"https://drive.google.com/file/d/1fjgaZ3bdegNZ-W98LyceVDOyT1iSVwxA/view", img:"https://i.pinimg.com/736x/c8/10/c2/c810c20f7a89f484761eeb9293ff3779.jpg", categoria:"Terror"},
  {nome: "It - A Coisa - Stephen King", pdf:"https://drive.google.com/file/d/17VujCSH7DLJwqSaMaHXc2j-NRPKUyT7B/view", img:"https://i.pinimg.com/1200x/99/cf/15/99cf157244e26fc9058b5a8f5f5d8b47.jpg", categoria:"Terror"},
  {nome: "O Iluminado - Stephen King", pdf:"https://drive.google.com/file/d/1-4MWqGeUIXrR7ACiAnD0ftr3CcqpFgyN/view", img:"https://i.pinimg.com/736x/9e/c5/be/9ec5be13c7460b2192962ed1f5f65c0c.jpg", categoria:"Terror"},
  {nome: "Piano Vermelho – Josh Malerman", pdf:"https://drive.google.com/file/d/1QguUkE67Bft4ogTXsn4CSuY598aMHMYt/view", img:"https://i.pinimg.com/736x/12/7d/ba/127dbaa2f4b10d3b2eba998d2f925ee0.jpg", categoria:"Terror"},
  {nome: "Eu estou pensando em acabar com tudo", pdf:"https://drive.google.com/file/d/1s7r5B4XacZ8L-NT5kfrcbmjTkVJ1tcVj/view", img:"https://m.media-amazon.com/images/I/71VVKEh0GXL._UF1000,1000_QL80_.jpg", categoria:"Terror"},
  {nome: "BTK Profile Máscara da Maldade", pdf:"https://drive.google.com/file/d/1Nzv-Ff-TRaa-oTh11Nj3L5Dskork85CM/view", img:"https://i.pinimg.com/736x/97/63/1d/97631ddeba92ae22b9719e9b077624a3.jpg", categoria:"Biografia"},
  {nome: "Manson, a biografia", pdf:"https://drive.google.com/file/d/1IpIRM-uXNxBN3Vi9Sd7xJ9LYLcHN2lxK/view", img:"https://m.media-amazon.com/images/I/91mIn9PnvqL._UF1000,1000_QL80_.jpg", categoria:"Biografia"},
  {nome: "Social killers (R. J. Parker J. J. Slate)", pdf:"https://drive.google.com/file/d/1fCSDRnFAldOcLyy5K4iun7UlC6TOdOpp/view", img:"https://m.media-amazon.com/images/I/81rMG4gXXvL._UF1000,1000_QL80_.jpg", categoria:"Biografia"},
  {nome: "O diário de Myriam (Myriam Rawick, Philippe Lobjois) ", pdf:"https://drive.google.com/file/d/1nOXewlNMQZf40rf1PJIvappNmMj_UBpk/view", img:"https://i.pinimg.com/736x/68/37/89/68378988361ba52d8eaf39dfdc1e3646.jpg", categoria:"Biografia"},
  {nome: "Stephen King, a biografia Coração assombrado (Lisa Rogak) ", pdf:"https://drive.google.com/file/d/1na41Dd7ObbKA33AIYJNx2gygaJn0Iw73/view", img:"https://images.dlivros.org/Lisa-Rogak/stephen-king-biografia-coracao-assombrado-lisa-rogak_large.webp", categoria:"Biografia"},
  {nome: "Nietzsche (HQ) (Onfray~Leroy) ", pdf:"https://drive.google.com/file/d/10CSeRsjAKb__j9PGSqz3isvKzVKjYn-Y/view", img:"https://m.media-amazon.com/images/I/51ZJd4NX9HL._AC_UF1000,1000_QL80_.jpg", categoria:"HQ"},
  {nome: "A Menina do Outro Lado 1 (Nagabe) ", pdf:"https://drive.google.com/file/d/1UgQ2lq8hOn1F8sO2bi_3e-_EklxL6ffH/view", img:"https://i.pinimg.com/736x/e9/4f/0e/e94f0efa2737b7acf1fb2dbf6eba9509.jpg", categoria:"HQ"},
  {nome: "A Diferença Invisível – Mademoiselle Caroline Julie ", pdf:"https://drive.google.com/file/d/1RJqp5JDIMjfQLIZ0HBkgv_ZZYfBBWRHX/view", img:"https://grupoautentica.f1cdn.com.br/view/1080/1080/false/true/1185.jpg?MTE4NS0=", categoria:"HQ"},
{nome: "Scar Tissue – Anthony Kiedis", pdf:"https://drive.google.com/file/d/1HhsIpAsjNyEhT_XBR1-p_OkqUR1-5kVM/view", img:"https://http2.mlstatic.com/D_NQ_NP_2X_709571-MLU50456321033_062022-F.webp", categoria:"Biografia"},
  {nome: "Open – Andre Agassi", pdf:"https://drive.google.com/file/d/17jRyDPLQDiK8W_yPxm7AcO_waSANGoqs/view", img:"https://i.pinimg.com/736x/99/3e/d7/993ed7b374abec0692e635f10115a22d.jpg", categoria:"Biografia"},
  {nome: "As Flores do Mal – Charles Baudelaire", pdf:"https://drive.google.com/file/d/11pg6h6568oYUa8ewsM-XysNZvzX_GiX4/view", img:"https://i.pinimg.com/736x/2c/6a/d0/2c6ad048be4900787e5d9b256b5a0ef4.jpg", categoria:"Poesia"},
  {nome: "Confissões – Jean-Jacques Rousseau", pdf:"https://drive.google.com/file/d/1URh-WbJW7981yISoZwc0z2Ab35VvSngA/view", img:"https://i.pinimg.com/736x/e0/11/e7/e011e7ac734d5ddd145bd51b8fd60ce0.jpg", categoria:"Biografia"},
  {nome: "Código limpo (Robert C. Martin) ", pdf:"https://drive.google.com/file/d/1cCDMl0IWfbUGcvmvB2J5_j3DW8u76a4j/view", img:"https://i.pinimg.com/736x/41/3a/c5/413ac56663d733b68772e4874a3c84ac.jpg", categoria:"Educação"},
  {nome: "Maus - A História de um Sobrevivente", pdf:"https://drive.google.com/file/d/16_PZZFcsWZKM0xPu5SxdTOTZbiiyT0hE/view", img:"https://i.pinimg.com/1200x/a9/bf/e2/a9bfe23a10476ad59dcc14b7ee9c45db.jpg", categoria:"HQ"},
  {nome: "Raízes do Brasil (Sérgio Buarque de Holanda)", pdf:"https://drive.google.com/file/d/1iNKihJPJtlJHHFoBp7x2JXzT-U_R8-6e/view", img:"https://i.pinimg.com/736x/4d/38/52/4d3852e07308328d2725881ffd570b53.jpg", categoria:"Educação"},
  {nome: "Sandman - Os Caçadores de Sonhos (Neil Gaiman  Yoshitaka Amano)", pdf:"https://drive.google.com/file/d/1guH42g9mZRcfIgcp7FaijLutycVCe_zO/view", img:"https://i.pinimg.com/736x/27/da/3c/27da3c178ec47c5ffe18ee1ea2edabc8.jpg", categoria:"HQ"},
  {nome: "V de Vingança (Alan Moore, David Lloyd)", pdf:"https://drive.google.com/file/d/1S5eHKGcAefQIaBNDz6tYbOxh75DhpNSi/view", img:"https://i.pinimg.com/1200x/b7/3a/3d/b73a3de36d4a1524082e4e56744e9b88.jpg", categoria:"HQ"},
  {nome: "Alguma Poesia (Carlos Drummond de Andrade)", pdf:"https://drive.google.com/file/d/12d2FxN3GXy2Rz4z__5JCWHQfmdy04d5E/view", img:"https://i.pinimg.com/736x/c8/34/48/c8344899d3306a3dae66b94ea089ccf2.jpg", categoria:"Poesia"},
  {nome: "Cantos à beira-mar e outros poemas (Maria Firmina dos Reis)", pdf:"https://drive.google.com/file/d/1XRaOaL3WKnq6Y49c6UT15lGtF_UgTrM5/view?usp=drive_open", img:"https://i.pinimg.com/1200x/66/10/79/66107919c199393c7248714b936cab35.jpg", categoria:"Poesia"},
  {nome: "Cartas aos pósteros Correspondência de Hilda Hilst e Mora Fuentes (Hilda Hilst,  Mora Fuentes,  Ronald Polito)", pdf:"https://drive.google.com/file/d/1dBcG3NYnSb_Yhbj6Z_8sACgAINKIkkqN/view", img:"https://m.media-amazon.com/images/I/81Y+HeGV-DL._UF1000,1000_QL80_.jpg", categoria:"Poesia"},
  {nome: "Como identificar um mentiroso torne-se um verdadeiro detector de mentiras humano em menos de 60 minutos (David Craig)", pdf:"https://drive.google.com/file/d/1BMmD2HxHMapDvV2as8ZhpMm3f3tmDt1j/view", img:"https://i.pinimg.com/736x/f6/b5/a5/f6b5a558772d429fa551b60a31a3ef73.jpg", categoria:"Educação"},
  {nome: "Entendendo Algoritmos Um guia ilustrado para programadores e outros curiosos (Aditya Y. Bhargava)", pdf:"https://drive.google.com/file/d/1ewXV_gp9h7ezf4-kVLUlb1Aza86kSkwP/view", img:"https://m.media-amazon.com/images/I/71Vkg7GfPFL.jpg", categoria:"Educação"},
  {nome: "Hacking Para Leigos (Kevin Beaver)", pdf:"https://drive.google.com/file/d/1bVvy9hVen7tAt1y_NUfBdgroyo8yZ-9H/view", img:"https://i.pinimg.com/736x/ef/9b/0a/ef9b0a387ae19292bb15c90951f7a16c.jpg", categoria:"Educação"},
  {nome: "Linux A Bíblia (Christopher Negus, Christine Bresnahan etc.)", pdf:"https://drive.google.com/file/d/1Rmpxdcyo-XCjWLke7k3DZZ5LMWIJWsz0/view", img:"https://i.pinimg.com/736x/4d/da/08/4dda0890da99273a3c7969e53cb92c9d.jpg", categoria:"Educação"},
  {nome: "Técnicas de Invasão Aprenda as técnicas usadas por hackers em invasões reais (Bruno Fraga) ", pdf:"https://drive.google.com/file/d/1LYx-61qRkO3YtGl1EiJoNMwOyZ4-WaBF/view", img:"https://m.media-amazon.com/images/I/51QepTFdK7L._AC_UF1000,1000_QL80_.jpg", categoria:"Educação"},
  {nome: "A idade da razão (Sartre, Jean-Paul) ", pdf:"https://drive.google.com/file/d/1TqiQcHGLG5AKTQjvXNr_LBYl7aYk1eWS/view?usp=drive_open", img:"https://i.pinimg.com/1200x/34/48/80/34488097d3cbdd9d1c9adb6c8dd2a6c7.jpg", categoria:"Existencialismo"},
  {nome: "Diário de uma ansiosa ou como parei de me sabotar (Beth Evans) ", pdf:"https://drive.google.com/file/d/1l7WGYgcp8Pnaz5QHz4nriC_jg-QbEUdx/view", img:"https://i.pinimg.com/736x/3e/03/eb/3e03eb3eed696eb20c39ff5ced2d3f78.jpg", categoria:"Biografia"},
  {nome: "Para Todas As Pessoas Intensas (Iandê Albuquerque)", pdf:"https://drive.google.com/file/d/1Oz5sBbjs4d9tzRjmNwq-FCXm9wq1Q5U1/view?usp=drive_open", img:"https://i.pinimg.com/736x/2b/0f/5e/2b0f5e9a83b9049a3dc7325f5a3398db.jpg", categoria:"Biografia"},
  {nome: "meu corpo minha casa (Rupi Kaur)", pdf:"https://drive.google.com/file/d/1OVjHIGIXGySalKOicoEoJvuyyweAIoC0/view", img:"https://i.pinimg.com/1200x/00/b3/95/00b395effb6d31e9b7b5be85eb2fa875.jpg", categoria:"Poesia"},
  {nome: "Ser e tempo parte II - HEIDEGGER Martin (HEIDEGGER Martin) ", pdf:"https://drive.google.com/file/d/1lZZHgaTMkTHyCbm8gGBX7qw08Ie2zuho/view?usp=drive_open", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG43pM9m6g_sBwsuv0CS65OF09AYTkfSTD7MZNCn5SeQrMaJ41iz5aC3wYA-ToXlNBPz4&usqp=CAU", categoria:"Existencialismo"},
  {nome: "Ser e tempo parte I - HEIDEGGER Martin (HEIDEGGER Martin)", pdf:"https://drive.google.com/file/d/1PrJlcn0OvxCoE52P0dbjckYEgjbaZc3s/view?usp=drive_open", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaa_CT9GCproyE-AOaTSY_WxQHPavcskQPyw&s", categoria:"Existencialismo"},
  {nome: "Knulp Três histórias da vida de um andarilho (Hermann Hesse)", pdf:"https://drive.google.com/open?id=1GhVcI245kNxVJNAB6j2mNERUROhzwXeU&authuser=0", img:"https://m.media-amazon.com/images/I/71Z90gI4KeL.jpg", categoria:"Existencialismo"},
  {nome: "A queda (Albert Camus) ", pdf:"https://drive.google.com/file/d/121O5kxnEq-pebeLrvFWW-83PMWjBNUG0/view", img:"https://i.pinimg.com/736x/49/27/99/4927996d72e5044f48d74c94fc285c1c.jpg", categoria:"Existencialismo"},
  {nome: "Amor vampiro (Vianco Andre)", pdf:"https://drive.google.com/file/d/1Ae3Xf8ENsE0W3jnPYKJDG8P94l6O4J6T/view?usp=drive_open", img:"https://i.pinimg.com/736x/0f/46/b3/0f46b3ded173f9ebbe7114d87daa29e9.jpg", categoria:"Terror"},
  {nome: "A Odisseia - HQ (Homero)", pdf:"https://drive.google.com/file/d/15GrrAMKav3B6z6h1FSOQ5PdJlNYX3X8d/view", img:"https://www.lpm.com.br/livros/Imagens/odisseia_hq_9788525433640_g.jpg", categoria:"HQ"},
];

// ----------------------------------------------------- CATEGORIAS ---------------------------------------------------------------------------------------------
const categorias = [...new Set(livros.map(l => l.categoria))];

const categoriesContainer = document.getElementById("categoriesContainer");
const searchInput = document.getElementById("searchInput");

// ===== FUNÇÃO PARA CRIAR CARROSSEL DE UMA CATEGORIA =====
function criarCarrossel(categoria, livrosFiltrados) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const title = document.createElement("h2");
    title.textContent = categoria;
    categoryDiv.appendChild(title);

    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-container");

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.innerHTML = "&#10094;";

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.innerHTML = "&#10095;";

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    livrosFiltrados.forEach(livro => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const link = document.createElement("a");
        link.href = livro.pdf;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = livro.img;
        img.alt = livro.nome;

        link.appendChild(img);
        bookDiv.appendChild(link);
        carousel.appendChild(bookDiv);
    });

    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: -250, behavior: "smooth" });
    });
    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: 250, behavior: "smooth" });
    });

    carouselContainer.appendChild(leftArrow);
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(rightArrow);

    categoryDiv.appendChild(carouselContainer);
    categoriesContainer.appendChild(categoryDiv);
}

// ===== FUNÇÃO PARA RENDERIZAR TODAS AS CATEGORIAS COM FILTRO =====
function renderAllCategories(filtro = "") {
    categoriesContainer.innerHTML = "";

    categorias.forEach(categoria => {
        const livrosFiltrados = livros
            .filter(l => l.categoria === categoria)
            .filter(l => l.nome.toLowerCase().includes(filtro.toLowerCase()));

        if (livrosFiltrados.length > 0) {
            criarCarrossel(categoria, livrosFiltrados);
        }
    });
}

searchInput.addEventListener('input', () => {
    renderAllCategories(searchInput.value);
});

const categoriaLinks = document.querySelectorAll(".menu-categorias a");

const mainContainer = document.getElementById("categoriesContainer");

function mostrarLivrosPorCategoria(categoria) {
    mainContainer.innerHTML = ""; 

    const livrosFiltrados = livros.filter(l => l.categoria === categoria);

    if (livrosFiltrados.length > 0) {
        const listaDiv = document.createElement("div");
        listaDiv.classList.add("lista-livros");

        livrosFiltrados.forEach(livro => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            const link = document.createElement("a");
            link.href = livro.pdf;
            link.target = "_blank";

            const img = document.createElement("img");
            img.src = livro.img;
            img.alt = livro.nome;

            const nome = document.createElement("p");
            nome.textContent = livro.nome;

            link.appendChild(img);
            bookDiv.appendChild(link);
            bookDiv.appendChild(nome);
            listaDiv.appendChild(bookDiv);
        });

        mainContainer.appendChild(listaDiv);
    }
}

categoriaLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const categoria = link.dataset.categoria;
        mostrarLivrosPorCategoria(categoria);
    });
});



renderAllCategories();

