import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Resizer from 'react-image-file-resizer';



const ContactFormModal = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profileLink: '',
        message: '',
        image: null, // Store the image
    });



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Resize the image to a very small size for avatar usage (e.g., 100x100)
            Resizer.imageFileResizer(
                file,
                80, 80, // Set width and height to 100px for the avatar
                'JPEG', 90, 0,
                (uri) => {
                    setFormData((prevState) => ({
                        ...prevState,
                        image: uri, // Resized image as base64
                    }));
                },
                'base64' // Convert the image to base64
            );
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send email using EmailJS
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData, // Data you want to send to the email template
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (response) => {
                    console.log('Success:', response);
                    setSubmitSuccess(true);
                    setIsModalOpen(false);
                    setIsSubmitting(false);
                },
                (error) => {
                    console.error('Error:', error);
                    setSubmitSuccess(false);
                    setIsSubmitting(false);
                }
            );
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);




    return (
        <div className="relative">
            {/* Button to open modal */}
            <button
                onClick={openModal}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
                Form
            </button>



            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-[#1c1c1e] p-6 rounded-2xl shadow-lg w-96 text-center border border-purple-300">
                        <h2 className="text-2xl text-gray-300 font-semibold mb-4">Leave a message!</h2>

                        {submitSuccess !== null && (
                            <div
                                className={`mb-4 text-center ${submitSuccess ? 'text-green-500' : 'text-red-500'}`}
                            >
                                {submitSuccess ? 'Message sent successfully!' : 'Failed to send the message.'}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full text-gray-950 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full text-gray-950 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="profileLink" className="block text-sm font-medium text-gray-300">
                                    Profile Link -Optional (https:// + LinkedIn, portfolio,GitHub)
                                </label>
                                <input
                                    type="url"
                                    id="profileLink"
                                    name="profileLink"
                                    value={formData.profileLink}
                                    onChange={handleChange}
                                    className="mt-1 block w-full text-gray-950 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                  
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 block w-full text-gray-950 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-300">
                                    Upload Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className={`px-6 py-2 rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-purple-600'} text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="mt-6 bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition shadow-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactFormModal;
