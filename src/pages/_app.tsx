import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChallengesProvider>
			<Component {...pageProps} />
		</ChallengesProvider>
	);
}

export default MyApp;

//* #Rumoaoproximonivel (primeiro dia)
//? No primeiro dia vamos conhecer os conceitos por trás de um front-end SPA, os principais fundamentos do React
//? como componentes, propriedades, estado e ferramentas que funcionam por trás da biblioteca como Webpack e Babel.
//? Além disso, daremos início ao desenvolvimento da aplicação move.it, criando a estrutura básica de componentes da página.

//* #jornadainfinita (segundo dia)
//? Nesse segundo dia vamos aprender o que é Next.js e quando utilizar no desenvolvimento de aplicações React.
//? Vamos também criar nossos próprios hooks dando vida às funcionalidades de countdown e
//? ganho de experiência e leveis através de desafios.

//* #focopraticagrupo (terceiro dia)
//? Na terceiro aula realizaremos uma separação da aplicação em componentes menores e
//? aplicaremos o conceito de contextos no React, responsável por compartilhar uma informação entre vários componentes em tela.
//? Finalizaremos também a funcionalidade de desafios.

//* #neverstoplearning (quarto dia)
//? Na quarta aula iremos continuar evoluindo nossa aplicação, aprender ainda mais sobre a Context API,
//? e aprender a como utilizar as notificações e sons do navegador para melhorar a experiência do usuário.
