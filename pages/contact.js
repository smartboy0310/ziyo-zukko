import Head from 'next/head';
import ContactPage from '../src/Components/Contact/ContactPage';

function Contact() {
	return (
		<>
			<Head>
				<title>Ziyo-zukko</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/logo.svg" />
			</Head>
         <ContactPage />
		</>
	)
}

export default Contact;