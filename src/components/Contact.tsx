// import React, { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-8"
//     >
//       <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800 max-w-xl w-full">
//         Kontakta mig
//       </h2>

//       <div className="w-full max-w-3xl">
//         {submitted ? (
//           <div className="bg-green-100 border border-green-300 text-green-700 font-semibold text-xl py-6 rounded-lg shadow-md text-center">
//             Tack för ditt meddelande! Jag återkommer till dig inom kort.
//           </div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 w-full"
//           >
//             {/* Namn */}
//             <div className="mb-8">
//               <label
//                 htmlFor="name"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Namn
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Ditt namn"
//                 className="w-full px-5 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//               />
//             </div>

//             {/* E-post */}
//             <div className="mb-8">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 E-postadress
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Din e-postadress"
//                 className="w-full px-5 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//               />
//             </div>

//             {/* Meddelande */}
//             <div className="mb-8">
//               <label
//                 htmlFor="message"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Meddelande
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 placeholder="Ditt meddelande"
//                 rows={6}
//                 className="w-full px-5 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
//               />
//             </div>

//             {/* Skicka-knapp */}
//             <button
//               type="submit"
//               className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
//             >
//               Skicka meddelande
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }
