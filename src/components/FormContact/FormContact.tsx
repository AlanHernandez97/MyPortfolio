import React, { useState } from 'react'

const FormContact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitError('');


		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitSuccess(true);
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});


			setTimeout(() => {
				setSubmitSuccess(false);
			}, 5000);
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{submitSuccess && (
				<div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md">
					Gracias! Su mensaje se ha enviadp exitosamente
				</div>
			)}

			{submitError && (
				<div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md">
					{submitError}
				</div>
			)}

			<div>
				<label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
					Nombre
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-teal-500 transition-colors duration-300"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
					Correo
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-teal-500 transition-colors duration-300"
				/>
			</div>

			<div>
				<label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
					Asunto
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
					className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-teal-500 transition-colors duration-300"
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-teal-500 transition-colors duration-300"
				></textarea>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="px-6 py-3 bg-indigo-600 dark:bg-teal-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-teal-500 disabled:opacity-70"
			>
				{isSubmitting ? (
					<span className="flex items-center justify-center">
						<svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Enviando...
					</span>
				) : (
					'Enviar Mensaje'
				)}
			</button>
		</form>
	);
};


export default FormContact