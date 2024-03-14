import { GMAIL_USER, GMAIL_PASS } from '$env/static/private';
import nodemailer from 'nodemailer';
import { data } from '../modules/investment.store.ts';

// Nodemailer configuration
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: GMAIL_USER,
		pass: GMAIL_PASS
	}
});
let dataValue: any;
data.subscribe((value) => {
	dataValue = value;
});
// console.log(form);
// Doc: https://kit.svelte.dev/docs/types#public-types-submitfunction

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const interest = Math.pow(1.3, 1 / 12) - 1;
		const interest2 = Math.pow(1.3, 1 / 24) - 1;

		const formData = await request.formData();
		const email = formData.get('email');
		const text: any = formData.get('message');
		const name = formData.get('name');
		const phone = formData.get('phone');
		const texto = `Se ha contactado con usted ${name}\nTelefono: ${phone}\nCorreo: ${email}\nY su consulta es:\n`;
		// const investment = formData.get('investment');
		// const roi = Number(investment) * interest;
		// const roi2 = Number(investment) * interest2;
		// const dataText = `\nInversion: ${investment}$, pago a 12: ${roi.toFixed(2)}$, pago a 24: ${roi2.toFixed(2)}$`;
		await transporter.sendMail({
			from: `${GMAIL_USER}`,
			to: 'info@galaxy-fitness.com',
			subject: `Landing Contact from ${name} ${phone} ${email}`,
			text: texto + text
			// html
		});
		// Process the form data and perform actions
		return { success: true };
	}

	// login: async (event) => {
	// 	// TODO log the user in
	// },
	// register: async (event) => {
	// 	// TODO register the user
	// }
};
